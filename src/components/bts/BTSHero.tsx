"use client";

import React from "react";
import { motion } from "motion/react";
import { Reveal, SplitHeading } from "@/components/motion/primitives";

export function BTSHero() {
  return (
    <section
      style={{
        position: "relative",
        borderBottom: "1px solid #E6E7E9",
        padding:
          "clamp(64px,8vw,120px) clamp(16px,4vw,56px) clamp(40px,5vw,72px)",
        background: "#FFFFFF",
        overflow: "hidden",
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
            <span>7°N 80°E · Production Field Notes & Behind The Scenes</span>
          </div>
        </Reveal>

        <SplitHeading
          as="h1"
          parts={[
            { text: "Behind the lens," },
            { text: "on set across Sri Lanka.", italic: true },
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
              maxWidth: "720px",
            }}
          >
            We don&apos;t rent gear by the hour or outsource our editing. Here is a
            glimpse into our gear rigs, high-speed FPV flight lines, color suites,
            and 48-hour turnarounds.
          </p>
        </Reveal>
      </div>

      {/* Field Specs Strip */}
      <Reveal delay={0.25}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: "24px",
            marginTop: "clamp(40px,5vw,64px)",
            paddingTop: "28px",
            borderTop: "1px solid #E6E7E9",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                font: "500 11px/1 'Poppins',sans-serif",
                textTransform: "lowercase",
                letterSpacing: ".01em",
                color: "rgba(17,19,23,.5)",
                marginBottom: "8px",
              }}
            >
              Hardware Model
            </span>
            <span
              style={{
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "22px",
                color: "#111317",
              }}
            >
              100% In-House Owned
            </span>
          </div>

          <div>
            <span
              style={{
                display: "block",
                font: "500 11px/1 'Poppins',sans-serif",
                textTransform: "lowercase",
                letterSpacing: ".01em",
                color: "rgba(17,19,23,.5)",
                marginBottom: "8px",
              }}
            >
              Drone Cinematography
            </span>
            <span
              style={{
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "22px",
                color: "#111317",
              }}
            >
              Avata 2 & Neo 2 FPV
            </span>
          </div>

          <div>
            <span
              style={{
                display: "block",
                font: "500 11px/1 'Poppins',sans-serif",
                textTransform: "lowercase",
                letterSpacing: ".01em",
                color: "rgba(17,19,23,.5)",
                marginBottom: "8px",
              }}
            >
              Turnaround Speed
            </span>
            <span
              style={{
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "22px",
                color: "#111317",
              }}
            >
              48-Hour Delivery
            </span>
          </div>

          <div>
            <span
              style={{
                display: "block",
                font: "500 11px/1 'Poppins',sans-serif",
                textTransform: "lowercase",
                letterSpacing: ".01em",
                color: "rgba(17,19,23,.5)",
                marginBottom: "8px",
              }}
            >
              Field Hubs
            </span>
            <span
              style={{
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "22px",
                color: "#111317",
              }}
            >
              Colombo · Negombo · Galle
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
