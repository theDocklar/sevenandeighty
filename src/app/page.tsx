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
import { ScrollThemeProvider, ThemeSection } from "@/components/theme/ScrollTheme";

export default function HomePage() {
  return (
    <Providers>
      <ScrollThemeProvider initialTheme="light">
        <WebsiteEffects />
        <Header />
        <main style={{ flex: 1 }}>
          <ThemeSection id="hero-trigger" theme="light" label="Hero">
            <HeroSection />
          </ThemeSection>
          <ThemeSection id="partners-trigger" theme="light" label="Partners">
            <PartnersSection />
          </ThemeSection>
          <ThemeSection id="work-trigger" theme="dark" label="Work">
            <WorkSection />
          </ThemeSection>
          <ThemeSection id="services-trigger" theme="light" label="Services">
            <ServicesSection />
          </ThemeSection>
          <ThemeSection id="process-trigger" theme="light" label="Process">
            <ProcessSection />
          </ThemeSection>
          <ThemeSection id="kit-trigger" theme="dark" label="Kit">
            <KitSection />
          </ThemeSection>
          <ThemeSection id="contact-trigger" theme="light" label="Contact">
            <ContactSection />
          </ThemeSection>
        </main>
        <Footer />
      </ScrollThemeProvider>
    </Providers>
  );
}
