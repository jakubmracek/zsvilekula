import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O Vilekule — ZŠ Vilekula",
  description: "Kdo jsme, co znamená otazník a na čem stavíme. Příběh a hodnoty ZŠ Vilekula v Teplicích.",
};

export default function OVilekulePage() {
  return (
    <main>
      <section style={{ paddingTop: "52px", paddingBottom: "8px" }}>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: "46em" }}>
            <span className="kicker"><span className="q">?</span> O Vilekule</span>
            <h2>Škola pro svět plný otazníků</h2>
            <p style={{ fontSize: "20px", color: "var(--inkoust-2)", marginTop: "14px", lineHeight: "1.6" }}>Svět se mění rychleji než kdy dřív. Nevíme, jaké profese budou naše děti dělat ani jaké otázky budou řešit. Připravit je proto neznamená naplnit je fakty — ale vypěstovat v nich odvahu ptát se, hledat a nebát se neznámého.</p>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "20px" }}>
        <div className="wrap prose">
          <p>Ve Vilekule stavíme na respektu, přirozené zvědavosti a spolupráci. Věříme, že dítě se učí nejlíp, když ho věc opravdu zajímá a když má bezpečné místo, kde smí zkoušet, chybovat a růst vlastním tempem.</p>
          <p>Nejsme nedotknutelné autority — jsme průvodci, kterým děti tykají a se kterými jdou po cestě společně. Učíme se ve věkově smíšených skupinách, hodnotíme slovem místo známek a velkou část času trávíme venku, kde se znalosti hned zkoušejí v praxi. Kořeny máme mimo jiné ve skautingu, který nás naučil, že charakter i dovednosti se budují prožitkem.</p>
        </div>
      </section>
      <section className="otaz">
        <span className="qbg" aria-hidden="true">?</span>
        <div className="wrap">
          <span className="kicker"><span className="q">?</span> Naše značka</span>
          <h2 style={{ marginTop: "10px" }}>Co znamená otazník</h2>
          <p>Copatá hlava v našem logu není náhoda — jsou to dva spojené otazníky. Otazník pro nás neznamená bezradnost, ale <strong>odvahu ptát se</strong>: základ každého skutečného poznání. Je to i připomínka Pipi Dlouhé punčochy, po jejímž domě — Vile Vilekule — se jmenujeme. Tu nezkrotnou samostatnost a chuť dělat věci po svém chceme dávat i našim dětem.</p>
          <p style={{ fontSize: "14px", color: "var(--inkoust-2)", marginTop: "12px" }}>Autorkou loga je výtvarnice Markéta Málková.</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Odkud jdeme</span>
            <h2>Náš příběh</h2>
          </div>
          <div className="tl">
            <div className="ev">
              <div className="yr">2022</div>
              <p>Začínáme jako malá domškolácká komunita rodin, které spojuje důvěra v respektující a zážitkové učení.</p>
            </div>
            <div className="ev">
              <div className="yr">2025</div>
              <p>Z komunity vyrůstá oficiální Základní škola Vilekula. Zapisujeme se do rejstříku škol a v září otevíráme první školní rok — s 18 dětmi ve věkově smíšených skupinách a s celým týmem průvodkyň a průvodců.</p>
            </div>
            <div className="ev">
              <div className="yr">2026</div>
              <p>Na jaře úspěšně procházíme první inspekcí České školní inspekce a zapojujeme se do celostátní soutěže Pohár vědy. Od září se stěhujeme do nových prostor na Kapelní ulici v centru Teplic a chystáme se přijmout zatím největší první třídu.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "8px" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Na čem stavíme</span>
            <h2>Naše hodnoty</h2>
          </div>
          <div className="vals">
            <div className="val-item">
              <h4>Respekt a partnerství</h4>
              <p>S dětmi jednáme jako s partnery. Tykáme si a rozhodujeme spolu.</p>
            </div>
            <div className="val-item">
              <h4>Věkově smíšené skupiny</h4>
              <p>Mladší se učí od starších, starší se učí vést — jako v životě.</p>
            </div>
            <div className="val-item">
              <h4>Slovní hodnocení</h4>
              <p>Popisujeme, co dítě umí a kam roste. Bez známek a žebříčků.</p>
            </div>
            <div className="val-item">
              <h4>Učení venku</h4>
              <p>Dva dny v týdnu jsme mimo školu — ve městě i v terénu.</p>
            </div>
            <div className="val-item">
              <h4>Skautské kořeny</h4>
              <p>Charakter i dovednosti se budují prožitkem a odpovědností.</p>
            </div>
            <div className="val-item">
              <h4>Vnitřní motivace</h4>
              <p>Dítě se učí nejlíp, když ho věc opravdu zajímá.</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginTop: "44px" }}>
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
