import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zápis a přestup — ZŠ Vilekula",
  description: "Jak k nám přihlásit dítě, dny otevřených dveří a přestup z jiné školy.",
};

export default function ZapisPage() {
  return (
    <main>
      <section style={{ paddingTop: "52px", paddingBottom: "6px" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Pro zájemce</span>
            <h2>Zápis a přestup</h2>
            <p>Cesta k nám je vždycky osobní — chceme se s vámi i s dítětem poznat dřív, než padne rozhodnutí. Tady je, jak to u nás probíhá.</p>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "30px" }}>
        <div className="wrap">
          <h3 className="blk">Do první třídy</h3>
          <div className="facts">
            <div className="fact">
              <div className="lbl">Zápis</div>
              <div className="big">16. 1. 2027</div>
            </div>
            <div className="fact">
              <div className="lbl">Počet míst</div>
              <div className="big">14</div>
            </div>
            <div className="fact">
              <div className="lbl">Pro děti narozené</div>
              <div className="big" style={{ fontSize: "21px" }}>1. 9. 2020 – 31. 8. 2021</div>
            </div>
          </div>
          <h4 className="sub">Jak podat přihlášku</h4>
          <div className="steps">
            <div className="step">
              <div>
                <h4>Zaregistrujte se v Nilssonu</h4>
                <p>Jeden ze zákonných zástupců se zaregistruje v našem systému — formulář vás pak celým zápisem provede.</p>
              </div>
            </div>
            <div className="step">
              <div>
                <h4>Vyplňte elektronickou přihlášku</h4>
                <p>Přihlášku podáte online ještě před samotným zápisem.</p>
              </div>
            </div>
            <div className="step">
              <div>
                <h4>Přijďte k zápisu 16. 1. 2027</h4>
                <p>S sebou si vezměte občanský průkaz zákonného zástupce a rodný list dítěte. Zápisem se zahajuje správní řízení.</p>
              </div>
            </div>
            <div className="step">
              <div>
                <h4>Rozhodnutí a smlouva</h4>
                <p>Seznam přijatých zveřejníme pod evidenčním číslem, do spisu můžete nahlížet. S přijetím pak uzavřeme smlouvu o vzdělávání.</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <a className="btn btn-primary" href="https://nilsson.zsvilekula.cz/zapis/prihlaseni">Zaregistrovat se k zápisu <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M5 12h14M13 6l6 6-6 6" />
 </svg></a>
          </div>
          <div className="krit">
            <h3 style={{ fontSize: "20px" }}>Podle čeho vybíráme</h3>
            <p style={{ color: "var(--inkoust-2)", marginTop: "6px" }}>Když se přihlásí víc dětí, než máme míst, rozhoduje:</p>
            <ul>
              <li>posouzení předpokladů dítěte přímo u zápisu (zážitkové aktivity, 0–90 bodů v šesti oblastech)</li>
              <li>vzdálenost bydliště od školy (0–10 bodů)</li>
              <li>sourozenec už ve škole (1 bod)</li>
              <li>při rovnosti bodů rozhoduje los</li>
            </ul>
            <p style={{ color: "var(--inkoust-2)", marginTop: "14px", fontSize: "15px" }}>Úplná a závazná kritéria najdete na <Link href="/uredni-deska" style={{ color: "var(--oranz-tmava)", textDecoration: "underline" }}>úřední desce</Link>.</p>
          </div>
          <p style={{ marginTop: "26px", color: "var(--inkoust-2)", fontSize: "15px" }}>Uvažujete o <strong>odkladu</strong>? I s tím vám u zápisu poradíme — postup i potřebné doklady s vámi projdeme osobně.</p>
          <p style={{ marginTop: "10px", color: "var(--inkoust-2)", fontSize: "15px" }}>Než se rozhodnete, přijďte se podívat — termín <strong>dne otevřených dveří</strong> pro školní rok 2027/2028 upřesníme.</p>
        </div>
      </section>
      <section className="prestup">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Do vyššího ročníku</span>
            <h2>Přestup</h2>
            <p>Přestup je citlivá věc — pro dítě, které mění místo i kolektiv, pro vás, kteří máte svá očekávání, i pro nás, kteří přijímáme nového člena do skupiny. Proto začínáme vždy osobním rozhovorem.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div>
                <h4>Napište řediteli</h4>
                <p>Ozvěte se nejdřív řediteli školy na jakub.mracek@zsvilekula.cz. Řekneme si navzájem svá očekávání.</p>
              </div>
            </div>
            <div className="step">
              <div>
                <h4>Sejdeme se — a vezmeme dítě na den</h4>
                <p>Standardně se setkáme s vámi a poté vezmeme dítě na jeden den do Vilekuly, ať samo zjistí, jestli mu u nás bude dobře.</p>
              </div>
            </div>
            <div className="step">
              <div>
                <h4>Teprve pak formulář</h4>
                <p>Když bude všechno sedět, má smysl vyplnit formulář k přestupu.</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "26px" }}>
            <a className="btn btn-primary" href="mailto:jakub.mracek@zsvilekula.cz">Napsat řediteli <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M5 12h14M13 6l6 6-6 6" />
 </svg></a>
          </div>
        </div>
      </section>
    </main>
  );
}
