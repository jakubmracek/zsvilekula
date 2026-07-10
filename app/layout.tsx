import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LogoDefs } from "@/components/Logo";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZŠ Vilekula — Škola pro svět plný otazníků",
    template: "%s",
  },
  description:
    "Soukromá základní škola v Teplicích. Věkově smíšené skupiny, slovní hodnocení a učení venku. Respektující přístup, kde každé dítě roste vlastním tempem.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "ZŠ Vilekula",
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Základní škola Vilekula",
              alternateName: "ZŠ Vilekula",
              url: SITE_URL,
              email: "jakub.mracek@zsvilekula.cz",
              telephone: "+420777323557",
              address: {
                "@type": "PostalAddress",
                streetAddress: "J. V. Sládka 1548/22",
                addressLocality: "Teplice",
                postalCode: "41501",
                addressCountry: "CZ",
              },
              description:
                "Soukromá základní škola v Teplicích. Věkově smíšené skupiny, slovní hodnocení a učení venku.",
            }),
          }}
        />
        <LogoDefs />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
