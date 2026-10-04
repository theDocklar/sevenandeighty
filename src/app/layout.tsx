import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Seven & Eighty · 7°N 80°E | Social Media & Video Agency Sri Lanka",
    template: "%s | Seven & Eighty (7°N 80°E)",
  },
  description:
    "We don't sell posts. We sell the reason people buy. Premium social media management, cinematic vertical reels, FPV drone shoots, and commercial brand films across Colombo, Negombo, and Galle, Sri Lanka.",
  metadataBase: new URL("https://sevenandeighty.com"),
  keywords: [
    "Seven and Eighty",
    "7N80E",
    "video production agency Sri Lanka",
    "social media agency Colombo",
    "Instagram reels production Sri Lanka",
    "FPV drone videography Colombo",
    "hospitality video production Galle",
    "hotel promotional video Sri Lanka",
    "restaurant food videography Negombo",
    "commercial filmmaker Sri Lanka",
    "TikTok content creation Sri Lanka",
    "luxury villa cinematography Sri Lanka",
  ],
  authors: [
    { name: "Seven and Eighty", url: "https://sevenandeighty.com" },
    { name: "Lashitha", url: "https://sevenandeighty.com/inquire" },
    { name: "Sandanu", url: "https://sevenandeighty.com/inquire" },
  ],
  creator: "Seven and Eighty",
  publisher: "Seven and Eighty",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "LK-1",
    "geo.placename": "Colombo, Negombo, Galle, Sri Lanka",
    "geo.position": "7.2083;79.8358",
    "ICBM": "7.2083, 79.8358",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Seven & Eighty · 7°N 80°E | Social Media & Video Agency Sri Lanka",
    description:
      "We don't sell posts. We sell the reason people buy. Reels, ads, FPV drone cinematography, and social media for hotels, shops, and brands across Colombo, Negombo, and Galle.",
    url: "https://sevenandeighty.com",
    siteName: "Seven and Eighty (7°N 80°E)",
    images: [
      {
        url: "/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Seven & Eighty — Social Media & Video Agency Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven & Eighty · 7°N 80°E",
    description:
      "We don't sell posts. We sell the reason people buy. Social media & video agency · Sri Lanka.",
    images: ["/og-image-1200x630.png"],
    creator: "@7n80e",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "google-site-verification=googlee95c8d0sevenandeighty",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      "facebook-domain-verification": ["sevenandeighty-fb-verify"],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className="min-h-screen antialiased"
        style={{
          background: "var(--site-bg, #FFFFFF)",
          color: "var(--site-fg, #111317)",
          transition: "background-color 0.4s ease, color 0.4s ease",
        }}
      >
        {children}
      </body>
    </html>
  );
}
