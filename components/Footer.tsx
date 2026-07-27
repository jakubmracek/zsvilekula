import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <Logo className="vlogo" /> Vilekula
            </div>
            <p>
              Soukromá základní škola alternativního typu.
              <br />
              Respektující přístup, věkově smíšené třídy, učení venku.
            </p>
            <div className="udaje">
              Sídlo: J. V. Sládka 1548/22, 415 01 Teplice
              <br />
              IČO 231 36 316 · RED IZO 691 018 901 · DS rm35wuu
            </div>
            <a
              className="foot-ig"
              href="https://www.instagram.com/vilekula.teplice/"
              target="_blank"
              rel="noopener"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
              @vilekula.teplice
            </a>
          </div>
          <div>
            <h4>Úřední deska</h4>
            <ul>
              <li><Link href="/uredni-deska">ŠVP a školní řád</Link></li>
              <li><Link href="/uredni-deska">Výroční zprávy</Link></li>
              <li><Link href="/uredni-deska">Inspekční zprávy ČŠI</Link></li>
              <li><Link href="/uredni-deska">Kritéria a formuláře</Link></li>
            </ul>
          </div>
          <div>
            <h4>Pro rodiče</h4>
            <ul>
              <li><Link href="/prakticke-informace">Provoz a kontakty</Link></li>
              <li><Link href="/prakticke-informace">Omlouvání absencí</Link></li>
              <li><Link href="/prakticke-informace">Družina a jídelna</Link></li>
              <li><Link href="/o-vilekule">Zapojení komunity</Link></li>
            </ul>
          </div>
          <div>
            <h4>Spojení</h4>
            <ul>
              <li><Link href="/kontakt">Kontaktní formulář</Link></li>
              <li><Link href="/podporuji-nas">Podporují nás</Link></li>
              <li><Link href="/zapis">Dny otevřených dveří</Link></li>
              <li><Link href="/gdpr">Ochrana údajů (GDPR)</Link></li>
              <li><a href="https://nilsson.zsvilekula.cz/">Nilsson</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 ZŠ Vilekula Teplice</span>
          <span>Vila Vilekula — dům, kde děláme věci po svém.</span>
        </div>
      </div>
    </footer>
  );
}
