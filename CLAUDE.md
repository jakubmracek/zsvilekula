# CLAUDE.md — Web ZŠ Vilekula (Fáze 0)

Kontext pro Claude Code. Cílem je převést schválené mockupy do produkčního webu.

## Co to je
Veřejný web soukromé ZŠ Vilekula (Teplice). Dvě role: akvizice/filtrace zájemců a informační servis pro rodiče. Návrh je hotový a schválený — tady jde o převod do Next.js, ne o nový design.

## Stack
- Next.js (App Router) + TypeScript
- Plain CSS s design tokeny v `app/globals.css` (žádný Tailwind)
- Fonty přes `next/font/google`: Fraunces (nadpisy), DM Sans (text) → CSS proměnné `--font-fraunces`, `--font-dmsans`
- Fáze 0 = statický web, BEZ databáze. Supabase/zeď/blog/galerie až Fáze 1–2 (viz TRD).

## Design systém (drž se ho)
- Barvy (v `:root` v globals.css): brand oranžová `--oranz #E86A17`, tmavší `--oranz-tmava #B14E0C`, zeleň `--les #2F5233`, papír `--papir #FCF9F3`, inkoust `--inkoust #241F1A`.
- Nadpisy Fraunces, text DM Sans. Dvě „weighty“ stačí.
- **Signaturní otazník**: drobné oranžové „?“ u nadpisů sekcí (`<span class="kicker"><span class="q">?</span> ...`) a velký jemný vodoznak `<span class="qmark-bg">?</span>` v barevných sekcích.
- Třídy jsou už definované v globals.css (`.wrap`, `.btn`, `.sec-head`, `.kicker`, `.fil-card`, `.p-card`, `.n-card`, `.a-card`, …) — nové stránky je jen znovupoužijí.

## Co už je hotové
- `app/layout.tsx` — fonty, metadata, `<Nav/>`, `<Footer/>`, logo defs
- `components/` — `Nav` (s Nilsson dropdownem + mobilním menu), `Footer`, `Logo`, `RotatingWord` (rotující slovo v hero)
- `app/page.tsx` — **homepage jako referenční vzor**, jak stavět stránky
- `app/globals.css` — kompletní design tokeny + třídy

## Úkol: dopřevést zbývajících 7 stránek
Zdroj obsahu a rozvržení = přiložené mockupy (`*-mockup.html`) + TRD. Každou stránku udělej jako route podle vzoru `app/page.tsx`, znovupoužij komponenty a třídy z globals.css. Případné stránkové styly přidej do globals.css (nebo CSS modul).

| Route | Zdrojový mockup |
|---|---|
| `/o-vilekule` | vilekula-o-vilekule-mockup.html |
| `/jak-se-u-nas-uci` | vilekula-jak-ucime-mockup.html |
| `/nas-tym` | vilekula-tym-mockup.html |
| `/zapis` | vilekula-zapis-mockup.html |
| `/prakticke-informace` | vilekula-prakticke-mockup.html |
| `/uredni-deska` | vilekula-uredni-deska-mockup.html |
| `/kontakt` | vilekula-kontakt-mockup.html |

Odkazy v `Nav` a `Footer` na tyto routy už míří — dořeš chybějící cíle (`/ze-zivota-skoly` je zatím zeď na později, `/gdpr` doplň).

## Poznámky / TODO
- **Logo**: `components/Logo.tsx` obsahuje vytrasovaný SVG (~56 kB). Prožeň ho SVGO → jednotky kB.
- **Fotky**: hero i galerie zatím placeholdery. Hi-res fotky dej do `public/` a nastav `background-image` na `.hero-media`; galerie/aktuality později z Google Drive (viz TRD, Fáze 1).
- **Kontaktní formulář** jsme z návrhu vypustili (přímý e-mail + „Napsat nám“). Pokud se vrátí, napoj přes Resend + Cloudflare Turnstile.
- **SEO**: doplň `metadata` per stránku, `sitemap.ts`, `robots.ts`, JSON-LD (`EducationalOrganization`).
- **Diakritika**: fonty mají `latin-ext` subset — držet.

## Nasazení
Vercel (za Cloudflare). Fáze 0 nepotřebuje env proměnné. DNS cutover na forpsi: apex + www → Vercel, `nilsson.` beze změny.

## Příkazy
- `npm install` && `npm run dev` (http://localhost:3000)
- `npm run build`
