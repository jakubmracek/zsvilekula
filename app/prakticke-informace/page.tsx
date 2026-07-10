import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praktické informace — ZŠ Vilekula",
  description: "Provoz školy, omlouvání absencí, družina, jídelna a kontakty pro rodiče.",
};

export default function PraktickeInformacePage() {
  return (
    <main>
      <section style={{ paddingTop: "52px", paddingBottom: "8px" }}>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: "44em" }}>
            <span className="kicker"><span className="q">?</span> Pro rodiče</span>
            <h2>Jak to u nás chodí</h2>
            <p style={{ fontSize: "19px", color: "var(--inkoust-2)", marginTop: "12px", lineHeight: "1.6" }}>Krátký pohled do našeho běžného dne — ať víte, co u nás dítě čeká.</p>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "22px" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Náš den</span>
            <h2>Režim dne</h2>
          </div>
          <div className="rezim">
            <div className="rrow">
              <div className="t">8:00–8:20</div>
              <div className="a">Příchod dětí</div>
            </div>
            <div className="rrow">
              <div className="t">8:30</div>
              <div className="a">Ranní kruh a začátek programu</div>
            </div>
            <div className="rrow">
              <div className="t">12:45</div>
              <div className="a">Konec dopoledního programu</div>
            </div>
            <div className="rrow">
              <div className="t">13:00</div>
              <div className="a">Vyzvednutí, nebo společný oběd<small>Po obědě lze dítě vyzvednout okolo 13:35.</small></div>
            </div>
            <div className="rrow">
              <div className="t">do 16:00</div>
              <div className="a">Odpolední družina<small>Ve všední dny mimo expedice.</small></div>
            </div>
            <div className="rrow">
              <div className="t">expediční dny</div>
              <div className="a">Program venku, konec okolo 14:30<small>Ve městě i v terénu, bez oběda ve škole.</small></div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <div className="pcards">
            <div className="pcard">
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              </div>
              <h3>Družina</h3>
              <p>Máme vlastní odpolední družinu do 16:00. Úplata je 1 000 Kč na školní rok, jednorázově.</p>
            </div>
            <div className="pcard">
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 2v20M17 2c-1.7 0-3 2-3 5s1 4 3 4v11" />
                </svg>
              </div>
              <h3>Obědy</h3>
              <p>Chodíme do jídelny nedaleké Hotelové školy (ul. Čs. dobrovolců, ~700 m). Děti vybírají ze tří jídel, oběd vyjde rodiče zhruba na 50–55 Kč.</p>
            </div>
            <div className="pcard">
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Komunikace a omlouvání</h3>
              <p>Absence omlouváte pohodlně v rodičovském portálu. Urgentně se dovoláte do sborovny. Každý týden posíláme zprávy a fotky z výuky. Během programu ale telefony nezvedáme — jsme naplno s dětmi.</p>
            </div>
            <div className="pcard">
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3>Pravidla a vybavení</h3>
              <p>U nás bez elektroniky (výjimkou jsou volací hodinky) a bez slazených nápojů a sladkostí — doporučujeme ovoce a zeleninu. Místo aktovky batoh, k tomu vlastní nůž a podsedák: učíme se rukama a venku.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "12px" }}>
        <div className="wrap">
          <div className="portal-note">
            <div>
              <h3>Jste naše rodina?</h3>
              <p>Konkrétní provozní informace — kontakty na družinu a jídelnu, formuláře, platby i omlouvání — najdete přehledně v rodičovském portálu Nilsson.</p>
            </div>
            <a className="btn btn-primary" href="https://nilsson.zsvilekula.cz/portal">Rodičovský portál <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M5 12h14M13 6l6 6-6 6" />
 </svg></a>
          </div>
        </div>
      </section>
    </main>
  );
}
