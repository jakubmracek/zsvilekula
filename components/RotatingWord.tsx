"use client";
import { useEffect, useRef } from "react";

const WORDS = ["otazníků", "zvědavosti", "objevů", "odvahy"];
const SVG =
  '<svg viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M4 13 C 40 4, 90 4, 130 11 S 180 16, 196 8" fill="none" stroke="#E86A17" stroke-width="4.5" stroke-linecap="round"/></svg>';

export default function RotatingWord() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    const id = setInterval(() => {
      el.classList.add("swap");
      setTimeout(() => {
        i = (i + 1) % WORDS.length;
        el.innerHTML = WORDS[i] + SVG;
        el.classList.remove("swap");
      }, 330);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="mark"
      ref={ref}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: WORDS[0] + SVG }}
    />
  );
}
