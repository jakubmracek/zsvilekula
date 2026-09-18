"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const NILSSON = [
  { href: "https://nilsson.zsvilekula.cz/", t: "Jsem průvodce", s: "Interní systém pro tým" },
  { href: "https://nilsson.zsvilekula.cz/portal", t: "Jsem rodič", s: "Rodičovský portál" },
  { href: "https://nilsson.zsvilekula.cz/zapis/prihlaseni", t: "Mám zájem o zápis", s: "Registrace a přihláška" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="brand" href="/">
          <Logo /> Vilekula
        </Link>
        <nav className="links" style={menu ? { display: "flex" } : undefined}>
          <Link href="/o-vilekule">O Vilekule</Link>
          <Link href="/nas-tym">Náš tým</Link>
          <Link href="/zapis">Pro zájemce</Link>
          <Link href="/ze-zivota-skoly">Ze života školy</Link>
          <Link href="/prakticke-informace">Pro rodiče</Link>
          <Link href="/podporuji-nas">Podporují nás</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
        <div className="nav-actions">
        <a
          className="ig-link"
          href="https://www.instagram.com/vilekula.teplice/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram Vilekula (@vilekula.teplice)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="20" rx="5.5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <div className="nils" data-open={open} ref={ref}>
          <button
            className="nils-btn"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
          >
            Vstup do Nilssonu
            <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="nils-menu" role="menu">
            {NILSSON.map((it) => (
              <a key={it.href} href={it.href} role="menuitem">
                <span className="mi-ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M8 4v16" />
                  </svg>
                </span>
                <span>
                  <span className="mi-t">{it.t}</span>
                  <br />
                  <span className="mi-s">{it.s}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <button className="burger" aria-label="Menu" onClick={() => setMenu((m) => !m)}>☰</button>
        </div>
      </div>
    </header>
  );
}
