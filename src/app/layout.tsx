import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodoni = localFont({
  src: [
    {
      path: "../fonts/BodoniModa-Regular.woff2",
      weight: "400 800",
      style: "normal",
    },
    {
      path: "../fonts/BodoniModa-Italic.woff2",
      weight: "400 800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-bodoni",
});

const poppins = localFont({
  src: [
    {
      path: "../fonts/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Seven & Eighty · 7°N & 80°E",
  description: "We don't sell posts. We sell the reason people buy. Social media & video agency · Sri Lanka.",
  metadataBase: new URL("https://sevenandeighty.com"),
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
    title: "Seven & Eighty · 7°N & 80°E",
    description: "We don't sell posts. We sell the reason people buy.",
    url: "https://sevenandeighty.com",
    siteName: "Seven and Eighty",
    images: [
      {
        url: "/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Seven & Eighty — 7°N 80°E",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven & Eighty · 7°N & 80°E",
    description: "We don't sell posts. We sell the reason people buy.",
    images: ["/og-image-1200x630.png"],
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
    <html lang="en" className={`${bodoni.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
