import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebsiteEffects } from "@/components/layout/WebsiteEffects";
import { Providers } from "@/components/motion/Providers";
import { BTSHero } from "@/components/bts/BTSHero";
import { BTSStories } from "@/components/bts/BTSStories";
import { BTSGallery } from "@/components/bts/BTSGallery";

export const metadata: Metadata = {
  title: "Behind The Scenes · Field Notes | Seven & Eighty (7°N 80°E)",
  description:
    "Explore how Seven & Eighty crafts frame-by-frame luxury and cinematic speed across Sri Lanka with in-house Sony cinema rigs, FPV drones, and 48-hour turnarounds.",
};

export default function BTSPage() {
  return (
    <Providers>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
        }}
      >
        <WebsiteEffects />
        <Header />
        <main style={{ flex: 1 }}>
          <BTSHero />
          <BTSStories />
          <BTSGallery />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
