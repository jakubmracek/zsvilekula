import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů (GDPR) — ZŠ Vilekula",
  description:
    "Informace o zpracování osobních údajů podle nařízení GDPR na Základní škole Vilekula, Teplice — správce, účely, práva subjektů a kontakt.",
};

export default function GdprPage() {
  return (
    <main>
      <section style={{ paddingTop: "52px", paddingBottom: "8px" }}>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: "46em" }}>
            <span className="kicker"><span className="q">?</span> Ochrana údajů</span>
            <h2>Zpracování osobních údajů (GDPR)</h2>
            <p style={{ fontSize: "18px", color: "var(--inkoust-2)", marginTop: "14px", lineHeight: "1.6" }}>
              Osobní údaje zpracováváme podle nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákona
              č. 110/2019 Sb., o zpracování osobních údajů. Níže najdete základní přehled — úplné informace vám na
              vyžádání poskytneme písemně.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "20px" }}>
        <div className="wrap prose" style={{ maxWidth: "44em" }}>
          <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "22px", fontWeight: 500, marginTop: "8px" }}>
            Správce údajů
          </h3>
          <p>
            Základní škola Vilekula, školská právnická osoba, se sídlem J. V. Sládka 1548/22, 415 01 Teplice,
            IČO 231 36 316, datová schránka rm35wuu. Kontakt ve věcech ochrany osobních údajů:{" "}
            <a href="mailto:jakub.mracek@zsvilekula.cz" style={{ color: "var(--oranz-tmava)" }}>
              jakub.mracek@zsvilekula.cz
            </a>.
          </p>

          <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "22px", fontWeight: 500, marginTop: "28px" }}>
            Jaké údaje a proč zpracováváme
          </h3>
          <p>
            Zpracováváme zejména údaje dětí a jejich zákonných zástupců nezbytné pro vedení školní matriky,
            zajištění vzdělávání a plnění právních povinností školy podle školského zákona (č. 561/2004 Sb.).
            Právním základem je nejčastěji plnění právní povinnosti a plnění úkolu ve veřejném zájmu; v dílčích
            případech (např. zveřejnění fotografií) zpracováváme údaje na základě vašeho souhlasu, který lze
            kdykoli odvolat.
          </p>

          <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "22px", fontWeight: 500, marginTop: "28px" }}>
            Doba uložení
          </h3>
          <p>
            Údaje uchováváme po dobu stanovenou právními předpisy a spisovým a skartačním řádem školy. Po uplynutí
            této doby jsou bezpečně zlikvidovány.
          </p>

          <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "22px", fontWeight: 500, marginTop: "28px" }}>
            Vaše práva
          </h3>
          <p>
            Máte právo na přístup ke svým údajům, jejich opravu nebo výmaz, omezení zpracování, právo vznést
            námitku a právo na přenositelnost údajů. Tam, kde zpracováváme údaje na základě souhlasu, jej můžete
            kdykoli odvolat. Domníváte-li se, že zpracování není v pořádku, můžete podat stížnost u Úřadu pro
            ochranu osobních údajů (uoou.gov.cz).
          </p>

          <p style={{ fontSize: "14px", color: "var(--inkoust-2)", marginTop: "28px", fontStyle: "italic" }}>
            Toto je základní informační přehled ve smyslu čl. 13 GDPR. Konkrétní podmínky jednotlivých zpracování
            (např. při zápisu nebo v systému Nilsson) vám poskytneme při sběru příslušných údajů.
          </p>
        </div>
      </section>
    </main>
  );
}
