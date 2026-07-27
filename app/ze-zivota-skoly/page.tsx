import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ze života školy — ZŠ Vilekula",
  description:
    "Fotogalerie a aktuality ze života ZŠ Vilekula jsou dostupné rodinám našich dětí po přihlášení do rodičovského portálu Nilsson.",
  robots: { index: false, follow: true },
};

export default function ZeZivotaSkolyPage() {
  return (
    <main>
      <section className="filtrace" style={{ minHeight: "62vh", display: "flex", alignItems: "center" }}>
        <span className="qmark-bg" aria-hidden="true">?</span>
        <div className="wrap" style={{ textAlign: "center", maxWidth: "44em" }}>
          <span className="wall-pill" style={{ margin: "0 auto" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            Fotogalerie jen pro naše rodiny
          </span>
          <h2 style={{ fontSize: "clamp(28px,3.8vw,40px)", marginTop: "20px" }}>Ze života školy</h2>
          <p style={{ fontSize: "18px", color: "var(--inkoust-2)", lineHeight: "1.7", marginTop: "14px" }}>
            Fotky z výuky, expedic a společných akcí sdílíme jen s rodinami našich dětí — kvůli soukromí dětí je
            galerie i aktuality dostupná po přihlášení do rodičovského portálu.
          </p>
          <div className="cta-row" style={{ justifyContent: "center", marginTop: "28px" }}>
            <a className="btn btn-primary" href="https://nilsson.zsvilekula.cz/portal">
              Přejít do rodičovského portálu
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <p style={{ fontSize: "16px", color: "var(--inkoust-2)", lineHeight: "1.7", marginTop: "34px" }}>
            Nejste z našich rodin? Představu o životě školy a naší komunity si uděláte z veřejného profilu na Instagramu.
          </p>
          <div className="cta-row" style={{ justifyContent: "center", marginTop: "14px" }}>
            <a
              className="btn btn-ghost"
              href="https://www.instagram.com/vilekula.teplice/"
              target="_blank"
              rel="noopener"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
              @vilekula.teplice na Instagramu
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
