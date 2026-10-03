import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebsiteEffects } from "@/components/layout/WebsiteEffects";
import { Providers } from "@/components/motion/Providers";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { InquiryTrust } from "@/components/inquiry/InquiryTrust";
import { Reveal, SplitHeading } from "@/components/motion/primitives";

export const metadata: Metadata = {
  title: "Inquire · Start a Project | Seven & Eighty (7°N 80°E)",
  description:
    "Tell us what you sell. We meet in person, sign an NDA within 48 hours, and launch high-converting video reels and social content for your brand.",
};

export default function InquirePage() {
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
          {/* Hero Header */}
          <section
            style={{
              position: "relative",
              borderBottom: "1px solid #E6E7E9",
              padding:
                "clamp(64px,8vw,120px) clamp(16px,4vw,56px) clamp(40px,5vw,72px)",
              background: "#FFFFFF",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                maxWidth: "1000px",
              }}
            >
              <Reveal>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    font: "500 13px/1 'Poppins',sans-serif",
                    letterSpacing: ".01em",
                    textTransform: "lowercase",
                    color: "rgba(17,19,23,.62)",
                  }}
                >
                  <span
                    data-pulse="1"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 99,
                      background: "#0D3B3A",
                    }}
                  />
                  <span>7°N 80°E · Project Initiation & Booking</span>
                </div>
              </Reveal>

              <SplitHeading
                as="h1"
                parts={[
                  { text: "Start a project" },
                  { text: "with Seven & Eighty.", italic: true },
                ]}
                style={{
                  margin: 0,
                  fontFamily: "'Bodoni Moda',serif",
                  fontWeight: 500,
                  fontSize: "clamp(42px,6.5vw,96px)",
                  lineHeight: 0.95,
                  letterSpacing: "-.03em",
                  color: "#111317",
                }}
              />

              <Reveal delay={0.15}>
                <p
                  style={{
                    margin: 0,
                    font: "400 clamp(16px,1.4vw,20px)/1.6 'Poppins',sans-serif",
                    color: "rgba(17,19,23,.78)",
                    maxWidth: "680px",
                  }}
                >
                  Tell us what you sell, where you&apos;re based, and what your
                  target timeline is. We review inquiries same-day and reach out
                  directly via WhatsApp.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Form */}
          <InquiryForm />

          {/* Trust / Next Steps */}
          <InquiryTrust />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
