import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podporují nás — ZŠ Vilekula",
  description:
    "Partneři, dárci a přátelé, díky kterým funguje ZŠ Vilekula. Nezávislá škola, kterou drží při životě komunita.",
};

/**
 * Podporovatelé seskupení po školních letech. Přidání partnera = jeden záznam.
 * - name: jméno firmy / nadace / osoby (povinné)
 * - note: krátký popis podpory (nepovinné)
 * - logo: cesta k logu v public/partnery/ (nepovinné — bez loga se zobrazí jen jméno)
 * - href: web partnera (nepovinné)
 */
type Supporter = { name: string; note?: string; logo?: string; href?: string };

const SUPPORTERS: { year: string; items: Supporter[] }[] = [
  {
    year: "2025/2026",
    items: [
      { name: "Nadační fond Zeměkvět", logo: "/partnery/zemekvet.svg", href: "https://zemekvet.cz/" },
      { name: "QUALIFORM, a.s.", logo: "/partnery/qualiform.svg", href: "https://www.qualiform.cz/" },
    ],
  },
  {
    year: "2026/2027",
    items: [
      // Logo 3P: jejich bílý wordmark přebarvený na tmavý text (.st0), aby byl čitelný na světlé kartě.
      { name: "3P Bydlení s.r.o.", logo: "/partnery/3p-bydleni.svg", href: "https://www.3pb.cz/" },
    ],
  },
];

const hasSupporters = SUPPORTERS.some((g) => g.items.length > 0);

export default function PodporujiNasPage() {
  return (
    <main>
      <section style={{ paddingTop: "52px", paddingBottom: "10px" }}>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: "44em" }}>
            <span className="kicker"><span className="q">?</span> Komunita a partneři</span>
            <h2>Podporují nás</h2>
            <p style={{ fontSize: "19px", color: "var(--inkoust-2)", marginTop: "12px", lineHeight: "1.6" }}>
              Vilekula je nezávislá škola, kterou drží při životě rodiny, přátelé a partneři,
              kterým dává smysl. Děkujeme všem, kdo nám pomáhají — finančně, časem i dovednostmi.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "12px" }}>
        <div className="wrap">
          {hasSupporters ? (
            SUPPORTERS.filter((g) => g.items.length > 0).map((g) => (
              <div key={g.year} className="sup-group">
                <h3 className="sup-year">Školní rok {g.year}</h3>
                <div className="supporters">
                  {g.items.map((s) => {
                    const inner = (
                      <>
                        {s.logo ? (
                          <img src={s.logo} alt={s.name} />
                        ) : (
                          <span className="sup-name">{s.name}</span>
                        )}
                        {s.note && <span className="sup-note">{s.note}</span>}
                      </>
                    );
                    return s.href ? (
                      <a key={s.name} className="sup-card" href={s.href} target="_blank" rel="noopener">
                        {inner}
                      </a>
                    ) : (
                      <div key={s.name} className="sup-card">{inner}</div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <p style={{ fontSize: "17px", color: "var(--inkoust-2)", lineHeight: "1.7", maxWidth: "40em" }}>
              Seznam partnerů a dárců právě připravujeme.
            </p>
          )}
        </div>
      </section>

      <section style={{ background: "var(--les)", color: "#E6EFE3", marginTop: "40px" }}>
        <div className="wrap podpora">
          <div>
            <span className="kicker" style={{ color: "#F6B27C" }}><span className="q">?</span> Přidejte se</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(26px,3.6vw,36px)", marginTop: "8px" }}>Chcete podpořit Vilekulu?</h2>
            <p style={{ color: "#C6D5C2", fontSize: "17px", lineHeight: "1.7", marginTop: "14px", maxWidth: "40em" }}>
              Každý dar pomáhá — na vybavení, expedice i na to, abychom mohli držet solidární
              školné pro rodiny, které by si Vilekulu jinak nemohly dovolit. Ozvěte se nám,
              rádi domluvíme podobu spolupráce.
            </p>
            <div className="cta-row" style={{ marginTop: "22px" }}>
              <Link className="btn btn-light" href="/kontakt">
                Jak podpořit a kontakt
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
