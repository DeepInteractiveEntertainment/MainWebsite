import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Barlow, Barlow_Condensed, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBg from "@/components/ui/AnimatedBg";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

// HURDA-G sayfası (.hg) — oyunun arayüz yazı tipleri
const barlow = Barlow({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600"], variable: "--font-barlow", display: "swap" });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});
const shareTech = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-share-tech", display: "swap" });

const siteUrl = "https://deepinteractiveentertainment.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deep Interactive Entertainment | Independent Game Studio",
    template: "%s | Deep Interactive Entertainment",
  },
  description:
    "Deep Interactive Entertainment is an independent game studio in Istanbul, Türkiye. We build action games for PC & console — and ship production-grade Unity Asset Store tools like CrossLobby Pro, DeepAI Pro and Mobile Controls Pro.",
  keywords: [
    "Deep Interactive Entertainment",
    "indie game studio",
    "Istanbul",
    "Türkiye",
    "Chaos Budz",
    "Hurda-G",
    "PC game",
    "console game",
    "Unity Asset Store",
    "CrossLobby Pro",
    "DeepAI Pro",
    "Mobile Controls Pro",
  ],
  authors: [{ name: "Deep Interactive Entertainment" }],
  creator: "Deep Interactive Entertainment",
  applicationName: "Deep Interactive Entertainment",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Deep Interactive Entertainment",
    title: "Deep Interactive Entertainment | Independent Game Studio",
    description:
      "Independent game studio from Istanbul, Türkiye. Action games for PC & console + Unity Asset Store developer tools.",
    images: [{ url: "/games/chaos-budz.jpg", width: 1200, height: 630, alt: "Deep Interactive Entertainment" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Deep_Int_Ent",
    creator: "@Deep_Int_Ent",
    title: "Deep Interactive Entertainment | Independent Game Studio",
    description:
      "Independent game studio from Istanbul, Türkiye. Action games + Unity Asset Store tools.",
    images: ["/games/chaos-budz.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#070a14",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Deep Interactive Entertainment",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Independent game studio from Istanbul, Türkiye. Action games for PC & console and Unity Asset Store developer tools.",
  email: "deepinteractiveentertainment@gmail.com",
  foundingLocation: { "@type": "Place", name: "Istanbul, Türkiye" },
  sameAs: [
    "https://store.steampowered.com/app/4308870/Chaos_Budz/",
    "https://discord.gg/ngc6KQcvk",
    "https://www.youtube.com/@DeepInteractiveEntertainment",
    "https://www.instagram.com/deepinteractiveentertainment/",
    "https://x.com/Deep_Int_Ent",
    "https://www.linkedin.com/company/deepinteractiveentertainment/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${barlow.variable} ${barlowCondensed.variable} ${shareTech.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('die-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {/* Global animated background — covers the whole page */}
          <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
            <AnimatedBg />
          </div>
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
