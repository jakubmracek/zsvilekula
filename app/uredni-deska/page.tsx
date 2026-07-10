import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Úřední deska — ZŠ Vilekula",
  description: "ŠVP, školní řád, výroční a inspekční zprávy, kritéria a formuláře ZŠ Vilekula.",
};

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
                <ul className="doclist">
                  <li>
                    <a href="https://drive.google.com/drive/folders/11Q23Gspa9zAgSm9ESRfyk_X4PRfRWOtS" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Volební řád školské rady</a>
                  </li>
                  <li>
                    <a href="https://www.zsvilekula.cz/zverejneni-kandidatu-do-skolske-rady/" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Zveřejnění kandidátů do školské rady</a>
                  </li>
                  <li>
                    <a href="https://www.zsvilekula.cz/vyhlaseni-vysledku-voleb-clenu-skolske-rady-2025-2028/" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Vyhlášení výsledků voleb (2025–2028)</a>
                  </li>
                </ul>
              </div>
            </details>
            <details className="acc">
              <summary>Školní legislativa <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <ul className="doclist">
                  <li>
                    <a href="https://drive.google.com/drive/folders/11Q23Gspa9zAgSm9ESRfyk_X4PRfRWOtS" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Školní vzdělávací program (ŠVP)</a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/11Q23Gspa9zAgSm9ESRfyk_X4PRfRWOtS" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Školní řád</a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/11Q23Gspa9zAgSm9ESRfyk_X4PRfRWOtS" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Vnitřní řád školní družiny</a>
                  </li>
                </ul>
                <p className="acc-note">PDF se navážou ze složky na Drive; v produkci dostane každý dokument stabilní URL.</p>
              </div>
            </details>
            <details className="acc">
              <summary>Zprávy a hodnocení <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <ul className="doclist">
                  <li>
                    <a href="https://drive.google.com/drive/folders/11Q23Gspa9zAgSm9ESRfyk_X4PRfRWOtS" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Výroční zpráva o činnosti a hospodaření</a>
                  </li>
                  <li>
                    <a href="https://www.csicr.cz/cz/Registr-inspekcnich-zprav?d=40236" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Inspekční zpráva ČŠI (registr inspekčních zpráv)</a>
                  </li>
                </ul>
              </div>
            </details>
            <details className="acc">
              <summary>Přijímání a správní řízení <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg></summary>
              <div className="acc-body">
                <ul className="doclist">
                  <li>
                    <a href="https://drive.google.com/drive/folders/11Q23Gspa9zAgSm9ESRfyk_X4PRfRWOtS" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Kritéria přijetí do 1. třídy</a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/11Q23Gspa9zAgSm9ESRfyk_X4PRfRWOtS" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Žádost o přijetí k základnímu vzdělávání</a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/11Q23Gspa9zAgSm9ESRfyk_X4PRfRWOtS" target="_blank" rel="noopener"><span className="fic">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
 <path d="M14 2v6h6" />
 </svg>
 </span>Žádost o odklad povinné školní docházky</a>
                  </li>
                </ul>
                <p className="acc-note">Postup zápisu a přestupu najdete na stránce <Link href="/zapis" style={{ textDecoration: "underline" }}>Zápis a přestup</Link>.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
