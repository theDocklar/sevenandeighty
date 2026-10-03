import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebsiteEffects } from "@/components/layout/WebsiteEffects";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { KitSection } from "@/components/sections/KitSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Providers } from "@/components/motion/Providers";

export default function HomePage() {
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
          <HeroSection />
          <PartnersSection />
          <WorkSection />
          <ServicesSection />
          <ProcessSection />
          <KitSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
