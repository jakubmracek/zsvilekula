# Dodělávky webu zsvilekula.cz — 27. 7. 2026

Stručný záznam změn nasazených 27. 7. 2026 (commit `554e408`, větev `master`).

## 1. Instagram (@vilekula.teplice)

Odkaz na veřejný profil <https://www.instagram.com/vilekula.teplice/> přidán na tři místa:

- **Hlavička** (`components/Nav.tsx`) — ikona IG vedle tlačítka „Vstup do Nilssonu"; viditelná i na mobilu (mimo sbalené menu).
- **Patička** (`components/Footer.tsx`) — „@vilekula.teplice" pod identifikačními údaji.
- **Ze života školy** (`app/ze-zivota-skoly/page.tsx`) — sekce je jen pro rodiny (zaheslovaný portál), proto doplněna věta a tlačítko směřující nepřihlášené návštěvníky na veřejný Instagram.

Styly (`.ig-link`, `.foot-ig`, `.nav-actions`) v `app/globals.css`.

## 2. Sekce „Podporují nás"

Nová stránka **`/podporuji-nas`** (`app/podporuji-nas/page.tsx`), odkaz v hlavičce i patičce.

- Podporovatelé seskupení po školních letech, řízeni datovým polem `SUPPORTERS` (přidání partnera = jeden záznam `{ name, logo, href, note? }`).
  - **2025/2026:** Nadační fond Zeměkvět, QUALIFORM a.s.
  - **2026/2027:** 3P Bydlení s.r.o.
- Loga stažena z webů partnerů do `public/partnery/` (`zemekvet.svg`, `qualiform.svg`, `3p-bydleni.svg`).
- Logo 3P mělo jen bílou variantu (pro tmavé pozadí); text `.st0` v SVG přebarven na tmavou (`#241F1A`), aby byl čitelný na světlé kartě.
- Uzavírací blok „Chcete podpořit Vilekulu?" s odkazem na dárcovské údaje na `/kontakt`.

Styly (`.supporters`, `.sup-card`, `.sup-year` …) v `app/globals.css`.

## 3. Úřední deska (`app/uredni-deska/page.tsx`)

- **Self-hosting dokumentů.** Dřívější odkazy vedly na sdílenou Google Drive složku, která ale vyžaduje přihlášení → pro veřejnost nefunkční. Všech 10 PDF je nyní v `public/dokumenty/` a servírováno přímo z domény (čistá stabilní URL).
- **Přepis na data-driven `DocList`.** Každý dokument je objekt `{ label, desc, href, internal, soon }`; méně opakování, snadná údržba.
- **Popis u každé položky** (řádek pod názvem).
- **Placeholder „Bude zveřejněno"** (badge, neklikací) u dokumentů, které zatím neexistují.
- **Elektronické žádosti.** Žádost o přijetí a Žádost o odklad neodkazují na PDF, ale na stránku Zápis a přestup (`/zapis`).
- **Nová sekce „Zřizovací a rejstříkové dokumenty"** (zřizovací listina, rozhodnutí o zápisu do rejstříku).
- **Přejmenování:** „Minimální preventivní program" uveden pod novějším názvem **„Preventivní program školy 2025/2026"** (termín MŠMT/NPI, slovo „minimální" se vypouští).

### Seznam PDF v `public/dokumenty/`
skolni-vzdelavaci-program · skolni-rad · volebni-rad-skolske-rady · provozni-rad · organizacni-rad · preventivni-program-skoly-2025-2026 · rozhodnuti-o-prijeti-2026 · rozhodnuti-o-zapisu-do-rejstriku · zrizovaci-listina · inspekcni-zprava-csi

## Ověření na produkci (27. 7. 2026)

- Všech 10 PDF: HTTP 200, `application/pdf`, hlavička `%PDF-`, velikosti odpovídají originálům.
- Stránky `/uredni-deska`, `/podporuji-nas`, `/ze-zivota-skoly`: HTTP 200.
- Loga partnerů: HTTP 200, `image/svg+xml`.

## Otevřené / navazující body

- **3 dokumenty zatím chybí** (na desce placeholder „Bude zveřejněno"): Vnitřní řád školní družiny, Výroční zpráva o činnosti a hospodaření, Kritéria přijetí do 1. třídy. Až vzniknou → nahrát PDF do `public/dokumenty/` a v příslušném `DocList` přepnout `soon: true` na `href`.
