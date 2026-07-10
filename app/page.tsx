import Link from "next/link";
import RotatingWord from "@/components/RotatingWord";

const Arrow = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Home() {
  return (
    <main>
      {/* HERO — pro produkci nastav background-image na .hero-media (hi-res foto nebo <video>) */}
      <section className="hero">
        <div className="hero-media" style={{ backgroundImage: "url(/hero.jpg)" }} />
        <div className="hero-scrim" />
        <div className="hero-content">
          <span className="eyebrow">Soukromá základní škola · Teplice</span>
          <h1 aria-label="Škola pro svět plný otazníků">
            Škola pro svět plný <RotatingWord />.
          </h1>
          <p className="lede">
            Věkově smíšené skupiny, slovní hodnocení a dva dny v týdnu venku.
            Připravujeme děti na svět rychlých změn — ne biflováním, ale odvahou ptát se.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="https://nilsson.zsvilekula.cz/zapis/prihlaseni">
              Máme zájem o zápis <Arrow />
            </a>
            <Link className="btn btn-light" href="/jak-se-u-nas-uci">Jak se u nás učí</Link>
          </div>
        </div>
      </section>

      {/* FILTRACE */}
      <section className="filtrace" id="filtrace">
        <span className="qmark-bg" aria-hidden="true">?</span>
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Jsme upřímní</span>
            <h2>Pro koho jsme — a pro koho spíš ne</h2>
            <p>Nechceme být školou pro všechny. Chceme být tou pravou pro rodiny, kterým je náš přístup blízký.</p>
          </div>
          <div className="fil-grid">
            <div className="fil-card">
              <h3><span className="tick yes">✓</span> Sedneme si, pokud</h3>
              <ul>
                <li><span className="tick yes">✓</span> hledáte respekt a partnerství mezi dítětem, rodinou a školou</li>
                <li><span className="tick yes">✓</span> věříte, že dítě se učí nejlíp, když ho věc opravdu zajímá</li>
                <li><span className="tick yes">✓</span> dává vám smysl slovní zpětná vazba víc než známka a žebříček</li>
                <li><span className="tick yes">✓</span> je vám blízké učení venku, v souvislostech a napříč věkem</li>
              </ul>
            </div>
            <div className="fil-card">
              <h3><span className="tick no">✕</span> Nejspíš ne, pokud</h3>
              <ul>
                <li><span className="tick no">✕</span> očekáváte klasické známkování a srovnávání dětí mezi sebou</li>
                <li><span className="tick no">✕</span> hledáte autoritativní dril a jedno tempo pro celou třídu</li>
                <li><span className="tick no">✕</span> chcete, aby se dítě „hlavně připravilo na přijímačky“</li>
                <li><span className="tick no">✕</span> nevyhovuje vám větší míra spolupráce rodičů na chodu školy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPY */}
      <section id="principy">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Jak se u nás učí</span>
            <h2>Čtyři věci, které děláme jinak</h2>
          </div>
          <div className="principy-grid">
            {[
              ["01", "Slovní hodnocení", "Místo známek popisujeme, co dítě umí a kam roste. Konkrétně a lidsky."],
              ["02", "Věkově smíšené třídy", "Mladší se učí od starších, starší vedou mladší. Jako v opravdovém světě."],
              ["03", "Projekty a expedice", "Učení v souvislostech — jedno téma napříč předměty, zakončené výpravou."],
              ["04", "Učení venku", "Příroda a město jsou naše učebny. Poznáváme rukama i nohama, ne jen v lavici."],
            ].map(([n, t, p]) => (
              <div className="p-card" key={n}>
                <div className="p-num">{n}</div>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NILSSON */}
      <section className="nilsson">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Školní systém Nilsson</span>
            <h2>Kudy dál — podle toho, kdo jste</h2>
            <p>Přihlášky, rodičovský portál i zázemí pro tým na jednom místě.</p>
          </div>
          <div className="nils-grid">
            <a className="n-card" href="https://nilsson.zsvilekula.cz/zapis/prihlaseni">
              <svg className="n-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></svg>
              <h3>Chci k vám dítě přihlásit</h3>
              <p>Zájem o zápis nebo přestup — pro rodiny, které u nás dítě zatím nemají.</p>
              <span className="go">Zaregistrovat se a požádat o zápis <Arrow /></span>
              <div className="n-note">Máte u nás dítě? Žádost podáte rovnou na /zapis.</div>
            </a>
            <a className="n-card" href="https://nilsson.zsvilekula.cz/portal">
              <svg className="n-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>
              <h3>Rodičovský portál</h3>
              <p>Pro rodiče našich dětí — omlouvání, platby, zprávy a přihlášky do družiny.</p>
              <span className="go">Přejít do portálu <Arrow /></span>
            </a>
            <a className="n-card" href="https://nilsson.zsvilekula.cz/">
              <svg className="n-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M8 4v16" /></svg>
              <h3>Zázemí pro tým</h3>
              <p>Pro zaměstnankyně a zaměstnance školy — interní systém a agenda.</p>
              <span className="go">Přihlásit se <Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      {/* AKTUALITY — placeholdery; foto se doplní / natáhnou z Drive (viz TRD) */}
      <section id="aktuality">
        <div className="wrap">
          <div className="akt-top">
            <div className="sec-head">
              <span className="kicker"><span className="q">?</span> Ze života školy</span>
              <h2>Co se u nás děje</h2>
            </div>
            <span className="wall-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              Fotogalerie jen pro naše rodiny
            </span>
          </div>
          <div className="akt-grid">
            {[
              ["Praktický život", "Vaříme z toho, co vypěstujeme", "Papriky, okurky, nože v malých rukou — a spousta ochutnávání po cestě."],
              ["Projekt", "Sázíme a zkoumáme, jak roste život", "Vlastní sazenice, pozorování a kreslení — botanika, která se dá osahat."],
              ["Ze společenství", "Ranní kruh: Příběhy Země", "Věkově smíšený kruh, kde se sdílí, naslouchá a společně objevuje."],
            ].map(([d, t, p]) => (
              <article className="a-card" key={t}>
                <div className="a-thumb">fotografie z výuky</div>
                <div className="a-body">
                  <div className="a-date">{d}</div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
