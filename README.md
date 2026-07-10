# Web ZŠ Vilekula — startovací balíček (Fáze 0)

Běžící základ Next.js webu se schváleným vizuálem. Homepage je hotová jako vzor,
zbylé stránky se dopřevádějí podle `CLAUDE.md`.

## Rychlý start
```bash
npm install
npm run dev      # http://localhost:3000
```

## Struktura
```
app/
  layout.tsx     # fonty (next/font), Nav, Footer, logo defs, metadata
  page.tsx       # homepage (referenční vzor stránky)
  globals.css    # design tokeny + sdílené třídy
components/
  Nav.tsx        # hlavička + Nilsson dropdown + mobilní menu (client)
  Footer.tsx     # patička s úředními údaji
  Logo.tsx       # inline SVG logo (recolor přes currentColor) — projet SVGO
  RotatingWord.tsx  # rotující slovo v hero (client)
CLAUDE.md        # instrukce pro dopřevedení zbylých stránek
```

## Další kroky
Otevři projekt v Claude Code a řiď se `CLAUDE.md` — postav zbylých 7 stránek
podle vzoru `app/page.tsx` a nasaď Fázi 0 na Vercel.

Zdroj obsahu/designu = přiložené mockupy (`*-mockup.html`) a TRD.
