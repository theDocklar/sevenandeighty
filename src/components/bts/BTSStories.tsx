"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Reveal,
  SplitHeading,
  Stagger,
  StaggerItem,
} from "@/components/motion/primitives";

const STORIES = [
  {
    num: "01",
    tag: "Flight Dynamics",
    title: "FPV Fly-Throughs at 60km/h",
    desc: "How we navigate the DJI Avata 2 and Neo 2 through indoor villa doors, over infinity pools, and millimeters past cocktail shakers without cutting the shot.",
    bullets: [
      "Sub-249g ultra-compact indoor FPV",
      "One-take continuous spatial tours",
      "Dynamic vertical framing for Instagram & TikTok",
    ],
  },
  {
    num: "02",
    tag: "Turnaround Velocity",
    title: "The 48-Hour Pipeline",
    desc: "Most agencies take three weeks to deliver a 30-second reel. We shoot at sunset, ingest footage by 9 PM, cut and grade overnight, and have sound-designed masters ready for your approval in 48 hours.",
    bullets: [
      "Same-night proxy transcoding",
      "Custom sound effects (SFX) & bespoke audio mixing",
      "Instant review links via WhatsApp",
    ],
  },
  {
    num: "03",
    tag: "Color & Optics",
    title: "Sony S-Log3 & Cinema Tone",
    desc: "Our color pipeline utilizes custom-built LUTs mapped to warm island skin tones, deep oceanic blues, and velvety restaurant interior blacks.",
    bullets: [
      "10-bit 4:2:2 high-bitrate acquisition",
      "Precision color temperature matching",
      "Micro-contrast optimization for mobile OLED screens",
    ],
  },
  {
    num: "04",
    tag: "Location Scouting",
    title: "Chasing the Ceylon Golden Hour",
    desc: "Whether shooting coastal tide breaks in Galle or rooftop twilight in Colombo 07, our crew operates with mobile kits ready to deploy in under 5 minutes when the sky turns gold.",
    bullets: [
      "Zero generator or bulky lighting delays",
      "Ultra-mobile Zhiyun Smooth Q3 & handheld rigs",
      "Natural atmosphere augmented by compact LED tubes",
    ],
  },
];

export function BTSStories() {
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
              02 — Production field logs
            </div>
          </Reveal>
          <SplitHeading
            parts={[
              { text: "Four rules" },
              { text: "we shoot by.", italic: true },
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
            Tactical & Cinematic
          </div>
        </Reveal>
      </div>

      <Stagger
        stagger={0.08}
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          borderTop: "1px solid #E6E7E9",
        }}
      >
        {STORIES.map((story) => (
          <StaggerItem key={story.num}>
            <motion.div
              whileHover={{ y: -4, backgroundColor: "rgba(13, 59, 58, 0.02)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              style={{
                padding: "clamp(36px,4.5vw,56px) clamp(16px,3vw,40px)",
                borderRight: "1px solid #E6E7E9",
                borderBottom: "1px solid #E6E7E9",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "28px",
                background: "#FFFFFF",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bodoni Moda',serif",
                      fontWeight: 500,
                      fontSize: "36px",
                      lineHeight: 1,
                      color: "#111317",
                    }}
                  >
                    {story.num}
                  </span>
                  <span
                    style={{
                      font: "600 10px/1.4 'Poppins',sans-serif",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "#0D3B3A",
                      background: "rgba(13, 59, 58, 0.08)",
                      padding: "4px 10px",
                      borderRadius: "99px",
                    }}
                  >
                    {story.tag}
                  </span>
                </div>

                <h3
                  style={{
                    margin: "0 0 14px 0",
                    fontFamily: "'Bodoni Moda',serif",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: 1.2,
                    color: "#111317",
                  }}
                >
                  {story.title}
                </h3>

                <p
                  style={{
                    margin: "0 0 24px 0",
                    font: "400 14px/1.6 'Poppins',sans-serif",
                    color: "rgba(17,19,23,.75)",
                  }}
                >
                  {story.desc}
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid #E6E7E9",
                  paddingTop: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {story.bullets.map((b) => (
                  <div
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      font: "500 12px/1.4 'Poppins',sans-serif",
                      color: "#111317",
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: 99,
                        background: "#111317",
                      }}
                    />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
