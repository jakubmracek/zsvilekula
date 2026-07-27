import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Úřední deska — ZŠ Vilekula",
  description: "ŠVP, školní řád, výroční a inspekční zprávy, kritéria a formuláře ZŠ Vilekula.",
};

/**
 * Položka seznamu dokumentů úřední desky.
 * - href + (nic)      → PDF / externí odkaz (otevře se v novém panelu)
 * - href + internal   → odkaz na stránku webu (např. /zapis)
 * - soon (bez href)   → placeholder „Bude zveřejněno"
 */
type Doc = {
  label: string;
  desc?: string;
  href?: string;
  internal?: boolean;
  soon?: boolean;
};

function DocList({ items }: { items: Doc[] }) {
  return (
    <ul className="doclist">
      {items.map((it) => {
        const inner = (
          <>
            <span className="fic">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            </span>
            <span className="doc-txt">
              <span className="doc-label">{it.label}</span>
              {it.desc && <span className="doc-desc">{it.desc}</span>}
            </span>
          </>
        );

        if (it.soon || !it.href) {
          return (
            <li key={it.label} className="doc-soon">
              {inner}
              <span className="doc-badge">Bude zveřejněno</span>
            </li>
          );
        }

        return (
          <li key={it.label}>
            {it.internal ? (
              <Link href={it.href}>{inner}</Link>
            ) : (
              <a href={it.href} target="_blank" rel="noopener">{inner}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function UredniDeskaPage() {
  return (
    <main>
      <section style={{ paddingTop: "52px", paddingBottom: "10px" }}>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: "44em" }}>
            <span className="kicker"><span className="q">?</span> Povinné informace</span>
            <h2>Úřední deska</h2>
            <p style={{ fontSize: "19px", color: "var(--inkoust-2)", marginTop: "12px", lineHeight: "1.6" }}>Zákonem zveřejňované dokumenty a údaje o škole na jednom místě.</p>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <div className="deska">
            <details className="acc" open>
              <summary>Identifikační údaje <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <dl>
                  <dt>Název</dt>
                  <dd>ZŠ Vilekula</dd>
                  <dt>Právní forma</dt>
                  <dd>školská právnická osoba (§ 124–140 školského zákona)</dd>
                  <dt>Sídlo</dt>
                  <dd>J. V. Sládka 1548/22, 415 01 Teplice</dd>
                  <dt>Místo výuky</dt>
                  <dd>Kapelní 2, 415 01 Teplice</dd>
                  <dt>IČO</dt>
                  <dd>231 36 316</dd>
                  <dt>RED IZO</dt>
                  <dd>691 018 901</dd>
                  <dt>Datová schránka</dt>
                  <dd>
                    <a href="https://www.mojedatovaschranka.cz/sds/detail?dbid=rm35wuu">rm35wuu</a>
                  </dd>
                  <dt>Bankovní účet</dt>
                  <dd>2303305396/2010 (Fio banka, a.s.)</dd>
                  <dt>Rejstřík</dt>
                  <dd>
                    <a href="https://isv.gov.cz/rspo/detail/0d302b04-7d6d-4cbd-bdf7-7a2e493e9ecd?stavKeDni=2025-09-02" target="_blank" rel="noopener">Výpis z rejstříku škol a školských právnických osob</a>
                  </dd>
                </dl>
              </div>
            </details>
            <details className="acc">
              <summary>Zřizovatel <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <dl>
                  <dt>Název</dt>
                  <dd>Efraim Dlouhá punčocha, z.s.</dd>
                  <dt>IČO</dt>
                  <dd>22 004 459</dd>
                  <dt>Sídlo</dt>
                  <dd>J. V. Sládka 1548/22, 415 01 Teplice</dd>
                  <dt>Statutární orgán</dt>
                  <dd>Mgr. Ludmila Mráčková — <a href="mailto:ludmila.mrackova@zsvilekula.cz">ludmila.mrackova@zsvilekula.cz</a>, 608 420 325</dd>
                  <dt>Datová schránka</dt>
                  <dd>
                    <a href="https://www.mojedatovaschranka.cz/sds/detail?dbid=gh5iiet">gh5iiet</a>
                  </dd>
                  <dt>Rejstřík</dt>
                  <dd>
                    <a href="https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1252432&typ=PLATNY" target="_blank" rel="noopener">Výpis ze spolkového rejstříku</a>
                  </dd>
                </dl>
              </div>
            </details>
            <details className="acc">
              <summary>Zřizovací a rejstříkové dokumenty <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <DocList
                  items={[
                    {
                      label: "Zřizovací listina školské právnické osoby",
                      desc: "Zřizovací listina vydaná zřizovatelem (Efraim Dlouhá punčocha, z.s.).",
                      href: "/dokumenty/zrizovaci-listina.pdf",
                    },
                    {
                      label: "Rozhodnutí o zápisu do školského rejstříku (MŠMT)",
                      desc: "Rozhodnutí MŠMT o zápisu školy do rejstříku škol a školských zařízení.",
                      href: "/dokumenty/rozhodnuti-o-zapisu-do-rejstriku.pdf",
                    },
                  ]}
                />
              </div>
            </details>
            <details className="acc">
              <summary>Školská rada <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <p>Členové byli zvoleni a jmenováni k 29. 9. 2025, funkční období tři roky (2025–2028).</p>
                <ul className="members">
                  <li>
                    <span className="nm">Jakub Jerie</span>
                    <span className="rl">volený zástupce rodičů a zletilých žáků</span>
                  </li>
                  <li>
                    <span className="nm">Václava Pelcová</span>
                    <span className="rl">volená zástupkyně pedagogických pracovníků</span>
                  </li>
                  <li>
                    <span className="nm">Vendulka Drobná</span>
                    <span className="rl">jmenovaná zástupkyně zřizovatele</span>
                  </li>
                </ul>
                <DocList
                  items={[
                    {
                      label: "Volební řád školské rady",
                      desc: "Pravidla voleb členů školské rady.",
                      href: "/dokumenty/volebni-rad-skolske-rady.pdf",
                    },
                    {
                      label: "Zveřejnění kandidátů do školské rady",
                      desc: "Seznam kandidátů pro volby do školské rady.",
                      href: "https://www.zsvilekula.cz/zverejneni-kandidatu-do-skolske-rady/",
                    },
                    {
                      label: "Vyhlášení výsledků voleb (2025–2028)",
                      desc: "Výsledky voleb členů školské rady pro funkční období 2025–2028.",
                      href: "https://www.zsvilekula.cz/vyhlaseni-vysledku-voleb-clenu-skolske-rady-2025-2028/",
                    },
                  ]}
                />
              </div>
            </details>
            <details className="acc">
              <summary>Školní legislativa <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <DocList
                  items={[
                    {
                      label: "Školní vzdělávací program (ŠVP)",
                      desc: "Vzdělávací program školy podle rámcového vzdělávacího programu.",
                      href: "/dokumenty/skolni-vzdelavaci-program.pdf",
                    },
                    {
                      label: "Školní řád",
                      desc: "Práva a povinnosti žáků a rodičů a pravidla chodu školy.",
                      href: "/dokumenty/skolni-rad.pdf",
                    },
                    {
                      label: "Vnitřní řád školní družiny",
                      desc: "Pravidla provozu školní družiny.",
                      soon: true,
                    },
                    {
                      label: "Provozní řád",
                      desc: "Podmínky provozu a režim školy.",
                      href: "/dokumenty/provozni-rad.pdf",
                    },
                    {
                      label: "Organizační řád",
                      desc: "Organizační uspořádání a řízení školy.",
                      href: "/dokumenty/organizacni-rad.pdf",
                    },
                    {
                      label: "Preventivní program školy 2025/2026",
                      desc: "Program prevence rizikového chování pro školní rok 2025/2026.",
                      href: "/dokumenty/preventivni-program-skoly-2025-2026.pdf",
                    },
                  ]}
                />
              </div>
            </details>
            <details className="acc">
              <summary>Zprávy a hodnocení <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <DocList
                  items={[
                    {
                      label: "Výroční zpráva o činnosti a hospodaření",
                      desc: "Souhrn činnosti a hospodaření školy za školní rok.",
                      soon: true,
                    },
                    {
                      label: "Inspekční zpráva ČŠI (registr inspekčních zpráv)",
                      desc: "Záznam v registru inspekčních zpráv České školní inspekce.",
                      href: "https://www.csicr.cz/cz/Registr-inspekcnich-zprav?d=40236",
                    },
                    {
                      label: "Inspekční zpráva ČŠI (PDF ke stažení)",
                      desc: "Inspekční zpráva České školní inspekce ke stažení.",
                      href: "/dokumenty/inspekcni-zprava-csi.pdf",
                    },
                  ]}
                />
              </div>
            </details>
            <details className="acc">
              <summary>Přijímání a správní řízení <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <DocList
                  items={[
                    {
                      label: "Kritéria přijetí do 1. třídy",
                      desc: "Kritéria pro přijímání dětí k základnímu vzdělávání.",
                      soon: true,
                    },
                    {
                      label: "Žádost o přijetí k základnímu vzdělávání",
                      desc: "Podává se elektronicky přes stránku Zápis a přestup.",
                      href: "/zapis",
                      internal: true,
                    },
                    {
                      label: "Žádost o odklad povinné školní docházky",
                      desc: "Podává se elektronicky přes stránku Zápis a přestup.",
                      href: "/zapis",
                      internal: true,
                    },
                    {
                      label: "Rozhodnutí o přijetí pro školní rok 2026/2027",
                      desc: "Rozhodnutí o přijetí k základnímu vzdělávání pro školní rok 2026/2027.",
                      href: "/dokumenty/rozhodnuti-o-prijeti-2026.pdf",
                    },
                  ]}
                />
                <p className="acc-note">Postup zápisu a přestupu najdete na stránce <Link href="/zapis" style={{ textDecoration: "underline" }}>Zápis a přestup</Link>.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
