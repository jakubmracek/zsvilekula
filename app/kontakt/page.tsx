import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt — ZŠ Vilekula",
  description: "Kde nás najdete a jak se spojit s vedením a týmem ZŠ Vilekula v Teplicích.",
};

export default function KontaktPage() {
  return (
    <main>
      <section style={{ paddingTop: "52px", paddingBottom: "10px" }}>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: "44em" }}>
            <span className="kicker"><span className="q">?</span> Spojení</span>
            <h2>Kontakt</h2>
            <p style={{ fontSize: "19px", color: "var(--inkoust-2)", marginTop: "12px", lineHeight: "1.6" }}>Napište nám, nebo se rovnou přijďte podívat. Nejradši se s vámi potkáme osobně.</p>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "22px" }}>
        <div className="wrap">
          <div className="k-grid">
            <div className="k-block">
              <h3>Spojte se s námi</h3>
              <div className="k-item">
                <span className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                </span>
                <div>
                  <div className="lbl">Ředitel školy</div>
                  <div className="val">Ing. Jakub Mráček<br /><a href="mailto:jakub.mracek@zsvilekula.cz">jakub.mracek@zsvilekula.cz</a> · <a href="tel:+420777323557">777 323 557</a></div>
                </div>
              </div>
              <div className="k-item">
                <span className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <div className="lbl">Telefon do sborovny</div>
                  <div className="val">
                    <a href="tel:+420732459467">732 459 467</a>
                  </div>
                  <div className="sub">Jen urgentní věci pro rodiče našich dětí. Během výuky telefon nezvedáme — ať jsme naplno s dětmi.</div>
                </div>
              </div>
              <div className="k-item">
                <span className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <div className="lbl">Kam děti chodí (místo výuky)</div>
                  <div className="val">Kapelní 2, 415 01 Teplice</div>
                </div>
              </div>
              <a className="btn btn-primary" href="mailto:jakub.mracek@zsvilekula.cz" style={{ marginTop: "22px" }}>Napsat nám <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M5 12h14M13 6l6 6-6 6" />
 </svg></a>
            </div>
            <div className="map">
              <svg className="pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <strong>Kapelní 2, 415 01 Teplice</strong>
                <br />
                <span style={{ color: "var(--les)", fontSize: "14px" }}>místo poskytování vzdělávání</span>
              </div>
              <a className="btn btn-ghost" href="https://www.google.com/maps/search/?api=1&query=Kapeln%C3%AD+2+Teplice" style={{ borderColor: "var(--les)", color: "var(--les)" }}>Otevřít v Mapách <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M7 17 17 7M8 7h9v9" />
 </svg></a>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--les)", color: "#E6EFE3" }}>
        <div className="wrap podpora">
          <div>
            <span className="kicker" style={{ color: "#F6B27C" }}><span className="q">?</span> Podpořte nás</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(26px,3.6vw,36px)", marginTop: "8px" }}>Podpořte Vilekulu</h2>
            <p style={{ color: "#C6D5C2", fontSize: "17px", lineHeight: "1.7", marginTop: "14px", maxWidth: "40em" }}>Vilekula je nezávislá škola, kterou drží při životě rodiny a přátelé, kterým dává smysl. Každý dar pomáhá — na vybavení, expedice i na to, abychom mohli držet solidární školné pro rodiny, které by si Vilekulu jinak nemohly dovolit.</p>
            <p style={{ marginTop: "18px", fontSize: "16px", color: "#fff" }}>Účet: <a href="https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=2303305396&bankCode=2010&amount=1000&currency=CZK&message=Dar%20Vilekule" target="_blank" rel="noopener" style={{ color: "#F6B27C" }}>2303305396/2010</a> · Fio banka</p>
          </div>
          <a href="https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=2303305396&bankCode=2010&amount=1000&currency=CZK&message=Dar%20Vilekule" target="_blank" rel="noopener" className="qr-card">
            <img src="https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=2303305396&bankCode=2010&amount=1000&currency=CZK&message=Dar%20Vilekule" alt="QR platba – dar Vilekule" />
            <div style={{ color: "var(--les)", fontSize: "13px", fontWeight: "600", marginTop: "8px" }}>Naskenujte a přispějte</div>
          </a>
        </div>
      </section>
      <section className="oficial">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker"><span className="q">?</span> Úřední údaje</span>
            <h2>Identifikační údaje</h2>
          </div>
          <div className="udaje-grid">
            <div className="udaje-block">
              <h3>Škola</h3>
              <dl>
                <dt>Právní forma</dt>
                <dd>školská právnická osoba (§ 124–140 školského zákona)</dd>
                <dt>Sídlo</dt>
                <dd>J. V. Sládka 1548/22, 415 01 Teplice</dd>
                <dt>IČO</dt>
                <dd>231 36 316</dd>
                <dt>RED IZO</dt>
                <dd>691 018 901</dd>
                <dt>Datová schránka</dt>
                <dd>
                  <a href="https://www.mojedatovaschranka.cz/sds/detail?dbid=rm35wuu">rm35wuu</a>
                </dd>
                <dt>Bankovní účet</dt>
                <dd>
                  <a href="https://api.paylibo.com/paylibo/generator/czech/image?accountNumber=2303305396&bankCode=2010&amount=1000&currency=CZK&message=Dar%20Vilekule" target="_blank" rel="noopener" title="Otevřít QR platbu">2303305396/2010 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ verticalAlign: "-2px" }}>
 <rect x="3" y="3" width="7" height="7" rx="1" />
 <rect x="14" y="3" width="7" height="7" rx="1" />
 <rect x="3" y="14" width="7" height="7" rx="1" />
 <path d="M14 14h3v3M21 14v.01M14 21h.01M17 21h4v-4" />
 </svg></a>
                  <span style={{ color: "var(--inkoust-2)", fontWeight: "400" }}>Fio banka, a.s.</span>
                </dd>
                <dt>Rejstřík</dt>
                <dd>
                  <a href="https://isv.gov.cz/rspo/detail/0d302b04-7d6d-4cbd-bdf7-7a2e493e9ecd?stavKeDni=2025-09-02">Výpis z rejstříku škol a školských právnických osob</a>
                </dd>
              </dl>
            </div>
            <div className="udaje-block">
              <h3>Zřizovatel</h3>
              <dl>
                <dt>Název</dt>
                <dd>Efraim Dlouhá punčocha, z.s.</dd>
                <dt>IČO</dt>
                <dd>22 004 459</dd>
                <dt>Sídlo</dt>
                <dd>J. V. Sládka 1548/22, 415 01 Teplice</dd>
                <dt>Statutární orgán</dt>
                <dd>Mgr. Ludmila Mráčková</dd>
                <dt>Kontakt</dt>
                <dd><a href="mailto:ludmila.mrackova@zsvilekula.cz">ludmila.mrackova@zsvilekula.cz</a> · 608 420 325</dd>
                <dt>Datová schránka</dt>
                <dd>
                  <a href="https://www.mojedatovaschranka.cz/sds/detail?dbid=gh5iiet">gh5iiet</a>
                </dd>
                <dt>Rejstřík</dt>
                <dd>
                  <a href="https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1252432&typ=PLATNY">Výpis ze spolkového rejstříku</a>
                </dd>
              </dl>
            </div>
          </div>
          <p style={{ marginTop: "22px", fontSize: "14px", color: "var(--inkoust-2)" }}>Kompletní úřední dokumenty (ŠVP, školní řád, výroční a inspekční zprávy, kritéria přijetí) najdete na <Link href="/uredni-deska" style={{ color: "var(--oranz-tmava)", textDecoration: "underline" }}>úřední desce</Link>.</p>
        </div>
      </section>
    </main>
  );
}
