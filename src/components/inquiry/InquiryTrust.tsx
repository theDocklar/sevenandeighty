"use client";

import React from "react";
import { Reveal, SplitHeading } from "@/components/motion/primitives";

const WHAT_HAPPENS = [
  {
    num: "01",
    title: "Same-day response",
    desc: "We review your brief, check availability across our Colombo, Negombo & Galle crews, and reach out via WhatsApp.",
  },
  {
    num: "02",
    title: "Moodboard & NDA",
    desc: "We sign an NDA within 48 hours and send a visual concept board tailored to your brand's unique tone.",
  },
  {
    num: "03",
    title: "We roll cameras",
    desc: "We shoot with our owned in-house kit (Sony A7 III, Avata 2, FPV, gimbals) and deliver your first reel within days.",
  },
];

export function InquiryTrust() {
  return (
    <section
      style={{
        borderBottom: "1px solid #E6E7E9",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "20px",
          padding:
            "clamp(64px,8vw,112px) clamp(16px,4vw,56px) clamp(32px,4vw,48px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <Reveal delay={0}>
            <div
              style={{
                font: "500 13px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "rgba(17,19,23,.62)",
              }}
            >
              05 — What happens next
            </div>
          </Reveal>
          <SplitHeading
            parts={[
              { text: "From inquiry" },
              { text: "to camera rolling.", italic: true },
            ]}
            style={{
              margin: 0,
              fontFamily: "'Bodoni Moda',serif",
              fontWeight: 500,
              fontSize: "clamp(34px,4.5vw,64px)",
              lineHeight: 1,
              letterSpacing: "-.02em",
              maxWidth: "800px",
            }}
          />
        </div>

        <Reveal delay={0.15}>
          <div
            style={{
              font: "600 10px/1.8 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
              color: "rgba(17,19,23,.62)",
              whiteSpace: "nowrap",
            }}
          >
            Direct access to directors
          </div>
        </Reveal>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          borderTop: "1px solid #E6E7E9",
        }}
      >
        {WHAT_HAPPENS.map((step) => (
          <div
            key={step.num}
            style={{
              padding: "clamp(32px,4vw,48px) clamp(16px,3vw,36px)",
              borderRight: "1px solid #E6E7E9",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <span
              style={{
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "44px",
                lineHeight: 1,
                color: "#111317",
              }}
            >
              {step.num}
            </span>
            <h4
              style={{
                margin: 0,
                font: "600 16px/1.3 'Poppins',sans-serif",
                letterSpacing: "-.01em",
                color: "#111317",
              }}
            >
              {step.title}
            </h4>
            <p
              style={{
                margin: 0,
                font: "400 14px/1.6 'Poppins',sans-serif",
                color: "rgba(17,19,23,.7)",
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
