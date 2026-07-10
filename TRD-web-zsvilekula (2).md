# TRD — Nový web ZŠ Vilekula (zsvilekula.cz)

> Technický požadavkový dokument. Navazuje na PRD „Komplexní zadání pro tvorbu webu alternativní školy ZŠ Vilekula Teplice".
> Stav: **v0.4** (schválen vizuál homepage; doplněn předprodukční checklist / Definition of Ready; 9. 7. 2026) · Vlastník: Jakub Mráček · Konvence sladěny s IS Nilsson.

---

## 1. Účel a rozsah dokumentu

Tento TRD převádí PRD do technických rozhodnutí a spec pro build. **Zamčená rozhodnutí** (kap. 3) jsou výsledkem analýzy. **Vyřešené otázky** (kap. 15) shrnují volby z 9. 7. 2026. **Backlog** (kap. 16) drží odložené nápady.

Mimo rozsah: vizuál (řeší se v Claude Design), copywriting (produkce po schválení vizuálu), interní logika IS Nilsson (beze změny, kromě jedné malé migrace — viz kap. 15).

---

## 2. Cíle (z PRD, zkráceně)

Web plní dvě role: **akvizice a filtrace zájemců** (jasně sdělit pedagogickou vizi tak, aby přitáhla souznící rodiče a odradila hledače drilu) a **informační servis pro stávající komunitu** (rychlý mobilní přístup k provozu, kalendáři, dokumentům a fotkám). Homepage komunikuje vizi hned v úvodu, aktuality jsou níž.

---

## 3. Zamčená architektonická rozhodnutí (ADR)

### AD-1 — Vlastní stack, sdílený Supabase projekt s Nilssonem
Next.js (App Router) na Vercelu, data ve **stejném Supabase projektu jako Nilsson**, doména a CDN přes Cloudflare.
- **Důvod:** zeď i fotosouhlasy znovupoužívají data z Nilssona; Supabase Auth i data jsou per-projekt, takže reuse ⟹ stejný projekt. Odpadá druhý projekt i federace.
- **Kompromis:** větší blast-radius. Ošetřeno schématem `web`, FORCE RLS, zápisem jen přes server actions s `has_role()`, veřejným čtením jen publikovaných řádků.

### AD-2 — Všechny soubory na Drive; Supabase drží jen ukazatele
- **Google Drive = paměť** pro fotky **i úřední PDF** (originály).
- **Cloudflare = doručení** (edge cache před Drivem).
- **Supabase = jen ukazatele + editorial stav** (`drive_file_id`, popisky, pořadí, stav). Ani byte pixelů ani PDF.
- **Důvod:** explicitní volba nedávat fotky ani dokumenty do Supabase; Drive je týmu známý.
- **Kompromis:** Drive není CDN a přímý hotlink je dnes nespolehlivý (Google blokuje/škrtí externí hotlinking). Proto se z Drivu **nikdy neservíruje přímo** — čte se přes Drive API (service account) a cachuje na edge.

### AD-3 — Zeď „Ze života školy" = capability link, odvolatelný
Zeď není přihlášení, ale **odkaz nesoucí klíč**, distribuovaný přes Resend. **Jeden roční sdílený odkaz** pro všechny.
- **Odvolatelnost:** tokeny žijí v tabulce `web.access_tokens` (ne čistě bezstavově). Cookie nese ID tokenu, middleware ověřuje `revoked_at IS NULL` → **odvolání zneplatní i aktivní session**. Únik odkazu se řeší okamžitým vydáním nového a rozesláním přes Resend, bez čekání na roční rotaci.
- **Bonus:** tatáž tabulka umožňuje mít víc aktivních tokenů současně → **předpřipravuje per-family variantu (B-1) bez změny schématu**.
- **Důvod:** respektuje filozofii „rodiče se nemusí logovat"; Nilsson zůstává rozesílač/archiv, jen posílá odkaz. Přeposílatelný prarodičům.
- **Kompromis:** model „tajný odkaz". Pro fotky se souhlasem adekvátní.

### AD-4 — Obsah: markdown, žádný rich editor; statické stránky jako MDX
Text = Markdown (živý náhled). Stabilní stránky = **MDX v gitu**. Často měněný obsah (blog, galerie) = data v Supabase. Kalendář = externí zdroj (Google Kalendář).

### AD-5 — Ingest fotek: Vercel cron + Drive API + sharp
Průvodce nahraje do složky na Drivu → cron přes Drive API najde nové soubory → `sharp` udělá derivace (WebP/AVIF + placeholder), **odstraní EXIF** → zapíše `web.photos` jako **draft** → `void notifyDiscord(...)` → editor zkontroluje, otaguje děti (fotosouhlasy) a publikuje. `sharp` běží na Vercelu (Node runtime).

### AD-6 — GoGreen doručování: transformuj jednou, servíruj z edge
Derivace se generují jednou při ingestu, servírují z Cloudflare edge cache s dlouhým `Cache-Control`. Drive API se dotýká jen při studené cache.

**Průběh napříč webem:** *Google Workspace (Drive + Kalendář) = kde tým reálně pracuje; web = cachovaná optimalizovaná projekce; Supabase = ukazatele + editorial stav; Nilsson/Resend = odlehčená distribuce a identita.*

---

## 4. Systémová architektura

```mermaid
flowchart TB
  subgraph Workspace["Google Workspace (zdroj pravdy pro tym)"]
    Drive[(Drive: fotky + PDF)]
    GCal[(Kalendar: akce)]
  end
  subgraph Vercel["Vercel — Next.js"]
    Cron[Cron: ingest fotek]
    Web[Web app + server actions]
    Img[/img a /dokument route]
  end
  subgraph Supa["Supabase (sdileny s Nilssonem)"]
    DB[(schema web: posts, galleries, photos, documents, access_tokens)]
    Nilsson[(Nilsson: students + photo_consent, staff_roles)]
  end
  CF[Cloudflare edge cache + CDN]
  Resend[Resend e-maily]
  Visitor((Navstevnik))

  Drive -->|Drive API| Cron --> DB
  Cron -->|kontrola souhlasu| Nilsson
  GCal -->|Calendar API| Web
  Web --> DB
  Web --> Nilsson
  Visitor --> CF
  CF -->|miss| Web
  CF -->|miss soubor| Img -->|Drive API| Drive
  Web -->|odkaz ke galerii| Resend --> Visitor
```

---

## 5. Datový model (schema `web`)

Konvence dle Nilssonu: `school_year TEXT` (`'2026/2027'`), append-only u historie, FORCE RLS, `SECURITY DEFINER` + `STABLE` helpery, `REVOKE ... FROM PUBLIC` + explicitní granty.

| Tabulka | Klíčové sloupce | Poznámka |
|---|---|---|
| `web.posts` | `id, slug, title, body_md, cover_photo_id, gallery_id, status, publish_at, author_staff_id, school_year, created_at, updated_at` | `status ∈ {draft, scheduled, published}` |
| `web.galleries` | `id, slug, title, description_md, event_date, drive_folder_id, cover_photo_id, depicted_groups[], status, school_year` | 1 galerie = 1 akce; `depicted_groups` = třídy na akci (seed pro tagování) |
| `web.photos` | `id, gallery_id, drive_file_id, width, height, placeholder, caption, sort_order, no_identifiable_person BOOL` | **žádné pixely**; `no_identifiable_person` obchází tagování |
| `web.photo_tags` | `photo_id, student_id` | koho fotka zobrazuje (pro fotosouhlasy); `student_id` → Nilsson; předvyplní se z `depicted_groups` |
| `web.documents` | `id, category, slug, title, drive_file_id, version, published_at, supersedes_id, is_current` | úřední deska; **soubor na Drive**; stabilní URL přes `slug` |
| `web.access_tokens` | `id, token_hash, scope, school_year, label, created_at, revoked_at` | zeď; odvolatelné; víc aktivních možných |

Kalendář **nemá vlastní tabulku** — zdrojem je Google Kalendář (kap. 9).

**RLS vzor:** anon `SELECT` jen `status='published'` (přes `SECURITY DEFINER STABLE` view/funkci); zápisy jen přes server actions s `has_role()`. Typy generovat `npx supabase gen types` po migraci (pozor na kódování `types/database.ts`).

**Publikovatelnost fotky = živá funkce**, ne snímek: veřejná galerie čte přes `SECURITY DEFINER STABLE` funkci, která vrací fotku jen když `no_identifiable_person` **nebo** všechny řádky `web.photo_tags` odkazují na děti s aktuálním `photo_consent=true` v Nilssonu. Odvolání souhlasu se tak projeví samo (viz kap. 7.1).

---

## 6. Role a oprávnění (zjednodušeno)

Jen dvě role, bez zvláštní `web_editor` role v `staff_roles`:

| Role | Mapování | Blog | Galerie | Úřední deska | Struktura webu |
|---|---|---|---|---|---|
| **Administrátor** | `staff.role = 'director'` | ✓ vč. publikace | ✓ vč. publikace | ✓ | ✓ |
| **Editor** | libovolný přihlášený zaměstnanec | ✓ vč. publikace | ✓ vč. publikace | číst | ✗ |

- Být zaměstnanec = automaticky editor; ředitelé = administrátoři.
- Editoři publikují přímo (žádný samostatný schvalovatel). Draft zůstává jako *stav*, ne jako oprávnění — kdokoli může uložit draft a publikovat, až bude hotovo.
- Kalendář se needituje na webu (zdroj = Google Kalendář, spravuje se ve Workspace).
- Úřední deska + struktura webu = jen administrátor (ředitel).

---

## 7. Fotky — ingest, úložiště, doručování

**Konvence složek na Drivu:** `Vilekula-web/galerie/YYYY-MM-DD Název akce`. Z názvu se parsuje datum + titulek. Průvodce nahrává z mobilu přes appku Drive.

**Ingest (Vercel cron, Node runtime):**
1. Drive API (service account) vylistuje nové soubory.
2. `sharp`: derivace WebP + AVIF (~400/800/1600 px), blur placeholder (LQIP), **strip EXIF/metadat**.
3. Derivace do `Vilekula-web/_web/…` (originály zůstávají).
4. Upsert `web.galleries` (draft) + `web.photos` (ukazatele, rozměry, placeholder).
5. `void notifyDiscord(...)` editorovi.

**Doručování:** galerie ukazuje na `/img/[photo_id]?w=…`. Cloudflare edge cache: hit → z edge; miss → `/img` route vytáhne derivát z Drivu **přes API**, nastaví `Cache-Control: public, max-age=31536000, immutable`. Drive API se drží pod kvótami (limit jednotek/min na projekt).

**Bezpečnost obrázků:** stránka za wallem; obrázky mají neuhádnutelné URL. Přísnější token-check na `/img` route je možný, ale ruší edge cache — pro školní fotky se souhlasem nedoporučeno.

### 7.1 Fotosouhlasy (vynucení)

- **Zdroj pravdy:** příznak `photo_consent` u dítěte v **Nilssonu** (sbírán u zápisu). Default = nemá souhlas (fail-safe). Web čte přímo (sdílený projekt, RLS).
- **Dvouúrovňový výběr:** picker nejdřív checkboxem vybere třídu/třídy (`group`), pak zobrazí roster vyfiltrovaný jen na ně. Nezbytné pro škálování (u rostoucího počtu dětí by plochý seznam byl otrava).
- **Hromadné tagování (seed):** na úrovni galerie se jednou vybere „kdo byl na akci" (→ `web.galleries.depicted_groups`); tím se **předvyplní tagy na všechny fotky** jako výchozí sada. Editor doupraví jen výjimky (fotka jen pár dětí). U společné fotky třídy tedy nula práce navíc.
- **Živá kontrola, ne snímek:** publikovatelnost se počítá za běhu (kap. 5) — fotka je vidět jen když všechny otagované děti *aktuálně* mají souhlas, nebo je `no_identifiable_person`.
- **Odvolatelnost (proč tagovat i u plně souhlasící třídy):** i když má dnes celá třída souhlas a filtr by prošel bez tagů, souhlas jde odvolat. **S tagy** odvolání zneviditelní přesně dotčené fotky (invalidace cache galerie → zmizí samy, bez ručního zásahu). **Bez tagů** by se muselo stáhnout/ručně přeprojít celé galerie třídy. Proto se taguje vždy.
- **Neotagované fotky se nepublikují** (nic s neposouzenou osobou ven), ledaže je fotka označena `no_identifiable_person` (krajina, záda, ruce, dav).
- **Bez rozpoznávání obličejů** — párování tváří dětí = biometrika zvláštní kategorie (GDPR čl. 9), přidalo by riziko. Tagování je ruční.
- **Cache při odvolání:** změna souhlasu v Nilssonu spustí `revalidatePath` dotčených galerií (dle `depicted_groups`), aby se projevila promptně i přes ISR/edge cache.

---

## 8. Zeď „Ze života školy" — capability link

- **Token:** náhodný, uložený hashovaně v `web.access_tokens` (`scope=school_year`, `label`, `revoked_at`).
- **Vstup:** `zsvilekula.cz/zivot?k=<token>` → middleware ověří proti tabulce (indexováno, lze cachovat) → nastaví cookie nesoucí ID tokenu → další návštěvy link nepotřebují.
- **Distribuce:** odkaz v týdenním reportu z Resendu; přeposílatelný.
- **Odvolání:** `revoked_at` zneplatní token i existující cookie/session. Nový token se vydá a rozešle.
- **Rotace:** roční. **GDPR posture:** capability link + souhlasy + strip EXIF + neuhádnutelné URL = obhajitelné pro fotky dětí.

---

## 9. Obsahové moduly

**Aktuality / Blog:** markdown, cover foto, volitelná vazba na galerii, plánované publikování přes `status='scheduled'` + `publish_at` (cron každých pár minut přepne na `published` + `revalidatePath`).

**Kalendář akcí:** zdrojem **dedikovaný Google Kalendář** čtený přes Calendar API (service account) a cachovaný — stejný vzor jako Drive pro fotky (Workspace = zdroj, web = projekce). Rodiče se přihlásí přes nativní ICS/subscribe odkaz Google Kalendáře. Kategorie přes barvu události nebo tag v názvu (slavnost / brigáda / prázdniny / expedice).

**Úřední deska:** akordeony dle PRD (identifikační údaje, legislativa, zprávy a hodnocení, správní řízení). **PDF na Drivu**, servírované přes cachovaný route `/dokumenty/[slug]` → stabilní veřejné URL. Verzování append-only v `web.documents`: nová verze buď **přepíše ukazatel u stejného `slug`** (stejná URL, nový obsah — splňuje požadavek PRD na prevenci mrtvých odkazů), nebo archivuje (`supersedes_id`, `is_current=false`).

**Statické stránky (MDX):** Filozofie & hodnoty, Jak se u nás učí (scannovatelné — odrážky, tučné klíčové myšlenky), Náš tým, Zápis a přestup, Dny otevřených dveří, Školné, Praktické informace, Zapojení komunity, GDPR, Kontakt.

**Prokliky do Nilssonu (výrazně oddělené CTA):**
- Zápis (rodiče s dítětem u nás): `https://nilsson.zsvilekula.cz/zapis`
- Registrace (noví rodiče): `https://nilsson.zsvilekula.cz/zapis/prihlaseni` → poté `/zapis`
- Rodičovský portál: `https://nilsson.zsvilekula.cz/portal`
- Zaměstnanci: `https://nilsson.zsvilekula.cz/`

---

## 10. SEO a strukturovaná data

SSG/ISR, `sitemap.xml`, `robots.txt`, kanonické URL, OG obrázky. JSON-LD: `EducationalOrganization`, `Event` (kalendář), `BreadcrumbList`. Sémantické nadpisy.

---

## 11. Migrace z WordPressu

- **Přebíráme všechny texty** ze současného webu (Příběh, Tým, FAQ, Dokumenty, Máme zájem, Kontakty, Podporují nás) — přepíšeme a budeme doplňovat.
- **301 redirecty** ze všech starých WP URL na nové (mapa se sestaví enumerací současných URL při buildu).
- **Re-hosting obrázků** ze `wp-content` do nového flow.
- **DNS cutover (forpsi):** apex + `www` → Vercel/Cloudflare; subdoména `nilsson.` beze změny. Turnstile na kontaktním formuláři.
- **Rollback:** WP běží do potvrzení, DNS až po smoke testu.

---

## 12. Výkon a analytika (GoGreen)

SSG/ISR, edge cache, minimum client-side JS, předgenerované WebP/AVIF, `immutable` cache na soubory. Cíl: mobilní Lighthouse ≥ 90.

**Analytika:** **Umami Cloud (free tier)** jako primární — cookieless, GDPR-čisté (bez cookie lišty), skript pod 10 kB, vlastní události + UTM (užitečné pro měření akvizice, např. proklik na CTA Zápis). **Cloudflare Web Analytics** zapnutý vedle jako bezplatná kontrolní second-opinion. Obojí zdarma, obojí bez cookie lišty.

---

## 13. Bezpečnost a GDPR

- FORCE RLS, `REVOKE FROM PUBLIC` + explicitní granty, server-side zápisy s `has_role()`.
- Service account (Drive/Calendar) s minimem oprávnění (jen potřebné složky/kalendář).
- **Strip EXIF/GPS** u všech fotek.
- **Fotosouhlasy** vynuceny **za běhu** (živá funkce, ne snímek — kap. 7.1); odvolání účinné automaticky; zdroj v Nilssonu.
- Data residency: potvrdit EU region (Frankfurt) Nilssonova projektu.
- Cookie minimalismus (jen technické: session zdi + preference).

---

## 14. Nasazení a prostředí

- Vercel: `production` + `preview`.
- Env/secrets: Supabase klíče, Drive/Calendar service account, token secret zdi, Resend, Discord webhook, Umami site ID.
- Cron: ingest fotek + přepínač plánovaných příspěvků (sladit s konvencí `0 6 * * *`).
- CI: commity `git config user.email "jakub.mracek@gmail.com"` (jinak Vercel CI odmítne).

---

## 15. Vyřešená rozhodnutí (9. 7. 2026) a zbývající předpoklady

**Rozhodnutí:**
- Role zjednodušeny na Administrátor (ředitel) + Editor (každý zaměstnanec); editoři publikují přímo. *(O-1)*
- Úřední PDF na Drive, ne do Supabase. *(O-2)*
- Zeď = jeden roční odkaz, ale **odvolatelný** (tabulka tokenů). *(O-3)*
- Kalendář = Google Kalendář jako zdroj. *(O-4)*
- Analytika = Umami Cloud (free) + Cloudflare Web Analytics vedle. *(O-5)*
- Fotosouhlasy = ruční tagování + filtr proti Nilsson příznaku. *(O-6)*
- Migrace = přebrat všechny texty, doplňovat. *(O-7)*
- Fotky týmu + bios = připraveno. *(O-8)*

**Zbývající předpoklady k dořešení při buildu:**
- Malá migrace v **Nilssonu**: příznak `photo_consent` u studenta (default nemá).
- Potvrdit EU region Nilssonova Supabase projektu.
- Založit Google Kalendář pro akce + nasdílet service accountu.
- Enumerovat současné WP URL pro redirect mapu.

---

## 16. Backlog / budoucí vývoj (arch notes)

- **B-1 — Odkazy do zdi per rodina:** vydávat token per rodina → odvolatelnost jednotlivce, jemnější audit. **Nově částečně připraveno** tabulkou `web.access_tokens` (víc aktivních tokenů) — přechod nevyžaduje nové schéma, jen logiku vydávání. *(Rozhodnuto 9. 7. 2026: jeden odkaz teď, per-family později.)*
- **B-2 — Centralizace `CURRENT_SCHOOL_YEAR`** do `lib/config.ts` (sladit s Nilsson TODO).
- **B-3 — Flag `prijima_komunikaci`** pokud web bude posílat notifikace.
- **B-4 — On-the-fly transformace** (Cloudflare Images) jako alternativa k předgenerování.

---

## 17. Rizika

| Riziko | Dopad | Mitigace |
|---|---|---|
| Drive API kvóty / hotlink blokace | Nefunkční soubory | Čtení jen přes API, agresivní edge cache, žádný přímý hotlink |
| Blast-radius sdíleného projektu | Únik/zápis do citlivých dat | Schema `web`, FORCE RLS, zápis jen přes server actions s rolí |
| Únik capability odkazu | Fotky viditelné cizím | Odvolatelný token, roční rotace, jen obsah se souhlasem |
| Fotka dítěte bez souhlasu | GDPR incident | Tagování + živá kontrola proti Nilsson příznaku; odvolání účinné automaticky; neotagované se nepublikují |
| Ztráta SEO při migraci | Propad návštěvnosti | 301 redirect mapa, sitemap, cutover až po testu |

---

## 18. Fázování

- **Fáze 0 — Akvizice (bez DB):** statické MDX stránky (vize, jak učíme, tým, zápis, školné), úřední deska, Nilsson CTA, kontakt s Turnstile. Rychle živě, plní hlavní roli.
- **Fáze 1 — Komunita:** blog (markdown) + galerie přes drag-drop upload + capability zeď + kalendář (GCal) + fotosouhlasy (ruční tagování).
- **Fáze 2 — Automatizace:** Drive-sync ingest, plánované publikování, notifikace.

---

## 19. Předprodukční checklist (Definition of Ready)

Cíl prvního nasazení = **Fáze 0** (akviziční část bez DB). Ta jde živě, jakmile je hotový obsah + DNS.

### 19.1 Od Jakuba — obsah, data, přístupy
- [ ] Finální texty stránek (píše se společně; homepage → „jak učíme" → „tým" → ostatní)
- [ ] Kurátorská sada fotek + rozhodnutí hero **foto vs. krátké video**
- [ ] Bios týmu + portréty průvodců
- [ ] Úřední PDF: ŠVP, školní řád, výroční zprávy, inspekční zprávy ČŠI, kritéria a formuláře
- [ ] Potvrzená **adresa/prostory** (visí Trnovany vs. Kapelní), kontakty, bankovní účet, REDIZO, provozní doba, kontakty družina/jídelna, školné, termíny dnů otevřených dveří
- [ ] Přístupy / nasdílení: Vercel, GitHub repo (nový pro web, nebo monorepo), Cloudflare zóna, Supabase (Nilsson projekt), Google Workspace, Resend, účet Umami

### 19.2 Technické zázemí
- [ ] Potvrdit **EU region** (Frankfurt) Nilssonova Supabase projektu
- [ ] Nilsson migrace: `photo_consent` u studenta (default nemá)
- [ ] Schéma `web` + tabulky + RLS + živá „publishable" funkce; vygenerovat typy
- [ ] Google **service account** (Drive + Calendar); nasdílet složku galerie + dedikovaný kalendář akcí
- [ ] Token secret zdi, env/secrets na Vercelu, crony
- [ ] Umami site ID + zapnout Cloudflare Web Analytics; Discord webhook (existuje)
- [ ] Logo: projet **SVGO** (56 kB → jednotky kB), varianty přes `currentColor`

### 19.3 Doména a migrace
- [ ] Enumerovat staré WP URL → **301 redirect mapa**
- [ ] DNS cutover na forpsi: apex + www → Vercel/Cloudflare; `nilsson.` beze změny
- [ ] Turnstile na kontaktním formuláři
- [ ] WP běží do smoke testu (rollback pojistka)

---

## 20. Vizuální identita (schváleno 9. 7. 2026)

Směr schválen na proklikatelném mockupu (`vilekula-homepage-mockup.html`).
- **Barvy:** brand oranžová `#E86A17` (tmavší `#B14E0C` na text/hover), přírodní zeleň `#2F5233`, teplá papírová běl `#FCF9F3`, teplá téměř-černá `#241F1A`.
- **Typografie:** Fraunces (displejový serif s charakterem) na nadpisy, DM Sans na text.
- **Podpisový prvek:** ručně tažené oranžové podtržení klíčového slova (odkaz na slovní hodnocení a hand-made ducha Vily Vilekuly).
- **Homepage layout:** celoobrazovkový hero s mottem (připraveno pro foto/video) → „pro koho jsme / pro koho ne" (filtrace) → principy → tři vstupy do Nilssonu (rozbalovací menu „Jsem průvodce / Jsem rodič / Mám zájem o zápis") → aktuality (za zdí) → patička s úřední deskou.
- **Logo:** inline SVG přes `currentColor` (tmavé v hlavičce, bílé v patičce).

---

*Konec TRD v0.4. Cíl nejbližšího nasazení: Fáze 0 (akviziční část). Vizuál schválen, pokračuje produkce textů.*
