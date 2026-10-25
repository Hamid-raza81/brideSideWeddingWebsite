import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { weddingData } from "@/data/wedding";
import "./globals.css";

const cormorant = localFont({
  src: "./fonts/cormorant-garamond-variable.woff2",
  variable: "--font-cormorant",
  weight: "300 700",
  display: "swap",
});

const playfair = localFont({
  src: "./fonts/playfair-display-variable.woff2",
  variable: "--font-playfair",
  weight: "400 900",
  display: "swap",
});

const greatVibes = localFont({
  src: "./fonts/great-vibes-regular.woff2",
  variable: "--font-great-vibes",
  weight: "400",
  display: "swap",
});

const amiri = localFont({
  src: [
    { path: "./fonts/amiri-arabic-regular.woff2", weight: "400" },
    { path: "./fonts/amiri-arabic-bold.woff2", weight: "700" },
  ],
  variable: "--font-amiri",
  display: "swap",
});

const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans-variable.woff2",
  variable: "--font-jakarta",
  weight: "400 800",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined;
const coupleNames = `${weddingData.bride.fullName} & ${weddingData.groom.fullName}`;
const socialImage = siteUrl
  ? [{ url: weddingData.assets.heroImageSrc, alt: `Wedding invitation for ${coupleNames}` }]
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: `${coupleNames} — Wedding Invitation`,
  description: weddingData.seo.description,
  openGraph: {
    title: `${coupleNames} — Wedding Invitation`,
    description: weddingData.seo.description,
    images: socialImage,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${coupleNames} — Wedding Invitation`,
    description: weddingData.seo.description,
    images: siteUrl ? [weddingData.assets.heroImageSrc] : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#243A2D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${greatVibes.variable} ${amiri.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F8F3E8] text-[#302E27] font-sans antialiased selection:bg-[#B58B35]/20 selection:text-[#243A2D] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
