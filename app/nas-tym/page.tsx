import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Náš tým — ZŠ Vilekula",
  description: "Průvodkyně a průvodci ZŠ Vilekula — lidé, kteří provázejí děti na jejich cestě.",
};

export default function NasTymPage() {
  return (
    <main>
      <section style={{ paddingTop: "52px", paddingBottom: "6px" }}>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: "44em" }}>
            <span className="kicker"><span className="q">?</span> O Vilekule</span>
            <h2>Náš tým</h2>
            <p className="lead-in" style={{ fontSize: "20px", color: "var(--inkoust-2)", marginTop: "14px", lineHeight: "1.6" }}>Začínaly dvě průvodkyně. Dnes je nás celý tým průvodců, asistentů, lektorů a specialistů — každý se svým příběhem, který ho k dětem přivedl. S dětmi si tykáme; nejsme nedotknutelné autority, ale partneři na cestě.</p>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "22px" }}>
        <div className="wrap">
          <div className="team-grid">
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">JM</div>
              <div>
                <h3>Jakub Mráček</h3>
                <div className="role">Ředitel školy</div>
                <p>Zkušený pedagog s osmnáctiletou praxí na Gymnáziu Teplice, kde je zástupcem ředitelky. Vystudoval pedagogiku a chemii na VŠCHT. Dlouhodobě se věnuje skautingu — jako vedoucí teplického střediska získal praxi v budování týmů a vedení. Ve Vilekule propojuje tradiční pedagogiku s neformálním vzděláváním a chce prostředí, kde se děti učí s radostí a každé roste vlastním tempem.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">LM</div>
              <div>
                <h3>Ludmila (Lída) Mráčková</h3>
                <div className="role">Průvodkyně, výchovná poradkyně, zástupkyně ředitele</div>
                <p>Vystudovala učitelství biologie a češtiny. Klíčové zkušenosti ale sbírala od dvanácti let ve skautu — vedla družiny, oddíly, tábory i rodinný oddíl Severské lišky a pracovala v lesní školce. V Teplicích založila Rodinné centrum Jeřabina a domškoláckou komunitu, ze které Vilekula vyrostla.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">VP</div>
              <div>
                <h3>Václava (Vendy) Pelcová</h3>
                <div className="role">Průvodkyně, metodička prevence, průvodkyně družiny</div>
                <p>K pedagogice ji přivedla dobrovolnická práce a asistence lidem s handicapem. Vystudovala speciální pedagogiku na UK a působila na Speciální ZŠ v Teplicích. Spoluzakládala lesní klub v Opárnu. Věří v přirozenou vnitřní motivaci dětí a v bezpečný prostor pro sebeřízené učení.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">JŠ</div>
              <div>
                <h3>Jana Švecová</h3>
                <div className="role">Zástupkyně ředitele pro administrativu</div>
                <p>Vystudovala práva a sociální pedagogiku. Pět let koordinovala dobrovolníky v rozvojových zemích a deset let pracovala u teplických salesiánů s rodinami. S Vilekulou je od úplného začátku — stará se o administrativu a právní agendu, aby se průvodci mohli naplno věnovat dětem.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">LW</div>
              <div>
                <h3>Lenka Walterová</h3>
                <div className="role">Průvodkyně třídy mladšího dvojročí</div>
                <p>Učitelka prvního stupně se zaměřením na prožitkové učení a respektující komunikaci. Působila ve waldorfských třídách, dokončuje studium na UJEP a vzdělává se v socio-emočním učení i formativním hodnocení. Díky pobytům v USA a Británii vede výuku i v angličtině. Propojuje akademický a osobnostní rozvoj, dramatickou a výtvarnou výchovu, hudbu a učení venku.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">KS</div>
              <div>
                <h3>Kateřina Studničková</h3>
                <div className="role">Průvodkyně třídy staršího trojročí, komunikace</div>
                <p>Vystudovala učitelství pro první stupeň na UJEP a učila na místních školách. Vzdělává se v muzikoterapii, dramatické výchově a učení venku. Ve Vilekule vede starší trojročí a stará se o komunikaci a sociální sítě. Průvodkyní je od prosince 2025.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">MK</div>
              <div>
                <h3>Michaela Kruchlová</h3>
                <div className="role">Asistentka pedagoga</div>
                <p>Původně vyučená cukrářka, později se věnovala administrativě a účetnictví. Po mateřské přijala nabídku zapojit se do Vilekuly. Díky vlastní dceři ví, jak zásadní je přirozená motivace a individuální přístup. Ráda se učí nové věci a je oporou celému týmu.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">MZ</div>
              <div>
                <h3>Martin Záhlava</h3>
                <div className="role">Expediční průvodce</div>
                <p>Absolvent VOŠ se zaměřením na ochranu životního prostředí, s kurzem asistenta pedagoga a stážemi v lesních školkách. Do Vilekuly přináší silný vztah k přírodě a neformálnímu vzdělávání venku a vytváří bezpečné, inspirativní prostředí, které respektuje potřeby dětí.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">HR</div>
              <div>
                <h3>Helena Ryklová</h3>
                <div className="role">Průvodkyně, průvodkyně družiny</div>
                <p>Absolventka sociální pedagogiky na UJEP s dlouholetou praxí v pomáhajících profesích — přes deset let působí i v Centru služeb pro zdravotně postižené. Přináší porozumění individuálním potřebám dětí, empatii a zázemí pro zdravé vztahy v kolektivu.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">KK</div>
              <div>
                <h3>Kateřina Křístková</h3>
                <div className="role">Trenérka angličtiny</div>
                <p>Absolventka Policejní akademie se státní zkouškou z psychologie. Angličtina ji provází celým životem. Jako matka spojila své dvě vášně — sport a jazyky: vede tělocvik na prvním stupni a učí angličtinu tak, aby se děti cítily bezpečně a učení je bavilo.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="ext">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Kdo dál pomáhá</span>
            <h2>Externí spolupracovníci a dobrovolníci</h2>
          </div>
          <div className="team-grid" style={{ marginTop: "34px" }}>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">ZJ</div>
              <div>
                <h3>Zuzana Junková</h3>
                <div className="role">Psychoterapeutka</div>
                <p>Vystudovala psychologii a výcvik v systemické psychoterapii, dále arteterapii a ekoterapii. Zaměřuje se na rodinné vztahy, vědomé rodičovství a náhradní rodinnou péči. Patří k zakládajícím rodinám Vilekuly.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">MS</div>
              <div>
                <h3>Martina Součková</h3>
                <div className="role">Dobrovolnice</div>
                <p>Architektka, která si k práci s dětmi doplnila pedagogické minimum. Zkušenosti s neformálním vzděláváním má ze skautu, kde vede oddíl a lektoruje kurzy pro budoucí vedoucí. Ve Vilekule pomáhá s komunitními a vzdělávacími aktivitami.</p>
              </div>
            </article>
            <article className="tcard">
              <div className="avatar" title="zástupný portrét">JS</div>
              <div>
                <h3>Jonáš Sirko</h3>
                <div className="role">Dobrovolník</div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "10px" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.4vw,32px)" }}>Chcete nás poznat osobně?</h2>
          <p style={{ color: "var(--inkoust-2)", fontSize: "17px", marginTop: "10px" }}>Nejlíp se poznáme naživo — přijďte se podívat, jak to u nás chodí.</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <a className="btn btn-primary" href="https://nilsson.zsvilekula.cz/zapis/prihlaseni">Máme zájem o zápis <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M5 12h14M13 6l6 6-6 6" />
 </svg></a>
            <Link className="btn btn-ghost" href="/jak-se-u-nas-uci" style={{ borderColor: "var(--linka)", color: "var(--inkoust)" }}>Jak se u nás učí</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
