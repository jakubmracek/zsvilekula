import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak se u nás učí — ZŠ Vilekula",
  description: "Slovní hodnocení, věkově smíšené skupiny, projekty a učení venku. Jak vypadá den ve Vilekule.",
};

export default function JakSeUNasUciPage() {
  return (
    <main>
      <section style={{ paddingTop: "52px", paddingBottom: "8px" }}>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: "44em" }}>
            <span className="kicker"><span className="q">?</span> O Vilekule</span>
            <h2>Jak se u nás učí</h2>
            <p className="lead-in">Nepřipravujeme děti na testy, ale na svět plný otazníků. Čtyři věci proto děláme jinak než běžná škola — a jedna z nich vám asi nejlíp ukáže proč.</p>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "24px" }}>
        <div className="wrap">
          <div className="prin">
            <div className="prin-row">
              <div className="n">01</div>
              <div>
                <h3>Slovní hodnocení</h3>
                <p>Místo známek dítěti i vám popisujeme, co už umí a kam roste — konkrétně a lidsky. Dítě se tak neučí kvůli jedničce, ale protože ho věc zajímá. K tomu patří sebehodnocení, vrstevnická zpětná vazba a společné tripartity.</p>
              </div>
            </div>
            <div className="prin-row">
              <div className="n">02</div>
              <div>
                <h3>Věkově smíšené skupiny</h3>
                <p>Učíme se v mladším dvojročí a starším trojročí. Mladší se přirozeně učí od starších, starší dostávají příležitost vést — přesně jako to chodí v opravdovém světě, ne v ročníku srovnaných stejně starých dětí.</p>
              </div>
            </div>
            <div className="prin-row">
              <div className="n">03</div>
              <div>
                <h3>Projekty a expedice</h3>
                <p>Poznáváme svět v souvislostech: jedno téma prochází napříč předměty a vyústí ve výpravu ven. Dva dny v týdnu trávíme mimo školu — ve městě i v terénu — kde se znalosti hned zkoušejí v praxi.</p>
              </div>
            </div>
            <div className="prin-row">
              <div className="n">04</div>
              <div>
                <h3>Učení venku</h3>
                <p>Příroda a město jsou naše učebny. Děti poznávají rukama i nohama, s vlastním nožem a batohem na zádech — ne jen z lavice. Venku se učí odvaha, spolupráce i samostatnost, které se z pracovního sešitu vyčíst nedají.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pero">
        <span className="q-big" aria-hidden="true">?</span>
        <div className="wrap">
          <span className="kicker"><span className="q">?</span> Ukázka toho, proč to děláme jinak</span>
          <h2 style={{ marginTop: "12px" }}>Proč u nás děti hned nepíšou perem</h2>
          <p>U nás se nespěchá na krasopis. Než dá dítě na papír první písmeno, potřebuje k tomu tři věci: připravenou ruku, chuť a hlavně důvod něco sdělit. A ty se nebudují opisováním řádků.</p>
          <p>Nejdřív posilujeme jemnou motoriku a koordinaci — rukama, venku, prací s materiálem, kreslením a tvořením. Zároveň pěstujeme chuť říct něco, co dítě opravdu říct chce. Když je ruka připravená a smysl jasný, psaní přijde samo, bez odporu a bez slz.</p>
          <p>Pero totiž není cíl. Cílem je dítě, které dokáže vyjádřit svou myšlenku — a písmo je jen jeden z nástrojů, jak to udělat.</p>
        </div>
      </section>
      <section style={{ paddingTop: "8px" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3.4vw,32px)" }}>Zní vám to blízko?</h2>
          <p style={{ color: "var(--inkoust-2)", fontSize: "17px", marginTop: "10px" }}>Přijďte se podívat, jak to u nás vypadá naživo.</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <a className="btn btn-primary" href="https://nilsson.zsvilekula.cz/zapis/prihlaseni">Máme zájem o zápis <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M5 12h14M13 6l6 6-6 6" />
 </svg></a>
            <Link className="btn btn-ghost" href="/nas-tym" style={{ borderColor: "var(--linka)", color: "var(--inkoust)" }}>Poznejte náš tým</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
