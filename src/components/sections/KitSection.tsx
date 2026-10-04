"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Reveal,
  SplitHeading,
  Stagger,
  StaggerItem,
} from "@/components/motion/primitives";

const KIT: [string, string][] = [
  ["Camera", "Sony A7 III"],
  ["Drone", "DJI Avata 2"],
  ["Drone", "DJI Neo 2"],
  ["Phone", "iPhone 17 Pro Max"],
  ["Gimbal", "Zhiyun Smooth Q3"],
];

export function KitSection() {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <section
      id="kit"
      data-screen-label="06 Our kit"
      style={{ borderBottom: "1px solid var(--site-border)" }}
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
                color: "color-mix(in srgb, var(--site-fg) 62%, transparent)",
              }}
            >
              04 — Our kit
            </div>
          </Reveal>
          <SplitHeading
            parts={[
              { text: "We own our kit," },
              { text: "so we can shoot tonight.", italic: true },
            ]}
            style={{
              margin: 0,
              fontFamily: "'Bodoni Moda',serif",
              fontWeight: 500,
              fontSize: "clamp(38px,5vw,76px)",
              lineHeight: 1,
              letterSpacing: "-.02em",
              maxWidth: "900px",
              textWrap: "balance",
            }}
          />
        </div>
        <Reveal delay={0.15}>
          <div
            style={{
              font: "600 10px/1.8 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
              textAlign: "right",
              color: "color-mix(in srgb, var(--site-fg) 62%, transparent)",
              whiteSpace: "nowrap",
            }}
          >
            Owned, not rented by the hour
          </div>
        </Reveal>
      </div>

      <Stagger
        stagger={0.06}
        amount={0.12}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))",
          borderTop: "1px solid var(--site-border)",
        }}
      >
        {KIT.map((k, i) => (
          <StaggerItem key={k[1]}>
            <motion.div
              className="kit-card-box"
              whileHover={{ y: -6, backgroundColor: "rgba(13, 59, 58, 0.03)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              style={{
                minHeight: "280px",
                padding: "24px clamp(16px,2vw,28px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px",
                borderRight: "1px solid var(--site-border)",
                cursor: "default",
                background: "var(--site-bg)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  font: "500 12px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "color-mix(in srgb, var(--site-fg) 70%, transparent)",
                }}
              >
                <span>{k[0]}</span>
                <span>{pad(i + 1)}</span>
              </div>
              <div
                style={{
                  aspectRatio: "4/3",
                  background: "rgba(128,128,128,.08)",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  font: "600 9px/1 'Poppins',sans-serif",
                  letterSpacing: ".05em",
                  color: "color-mix(in srgb, var(--site-fg) 45%, transparent)",
                }}
              >
                GEAR PHOTO
              </div>
              <span
                style={{
                  fontFamily: "'Bodoni Moda',serif",
                  fontWeight: 500,
                  fontSize: "26px",
                  lineHeight: 1.1,
                  color: "var(--site-fg)",
                }}
              >
                {k[1]}
              </span>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
