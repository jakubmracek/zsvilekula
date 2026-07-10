import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LogoDefs } from "@/components/Logo";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZŠ Vilekula — Škola pro svět plný otazníků",
  description:
    "Soukromá základní škola v Teplicích. Věkově smíšené skupiny, slovní hodnocení a učení venku. Respektující přístup, kde každé dítě roste vlastním tempem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <LogoDefs />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
