"use client";

import React from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/primitives";

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        padding: "clamp(80px,10vw,140px) clamp(16px,4vw,56px) 32px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "clamp(64px,8vw,112px)",
        background: "#FFFFFF",
      }}
    >
      {/* Horizontal Crosshair Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "calc(clamp(80px,10vw,140px) + clamp(48px,6vw,90px))",
          height: "1px",
          background: "#E6E7E9",
          transformOrigin: "center",
        }}
      />

      {/* Vertical Crosshair Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "1px",
          background: "#E6E7E9",
          transformOrigin: "top",
        }}
      />

      {/* Center Logo with gentle float / pop */}
      <Reveal delay={0.1}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            position: "relative",
            background: "#FFFFFF",
            padding: "24px clamp(20px,3vw,40px)",
            borderRadius: "4px",
          }}
        >
          <img
            src="/brand/seven-and-eighty-logo-black.svg"
            alt="7°&80° — North, East"
            style={{
              width: "clamp(200px,32vw,453px)",
              height: "auto",
              display: "block",
            }}
          />
        </motion.div>
      </Reveal>

      {/* Bottom bar */}
      <Reveal delay={0.2} style={{ width: "100%" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px 24px",
            background: "#FFFFFF",
            paddingTop: "24px",
            borderTop: "1px solid #E6E7E9",
            font: "600 10px/1.6 'Poppins',sans-serif",
            letterSpacing: ".01em",
            textTransform: "lowercase",
            color: "rgba(17,19,23,.62)",
          }}
        >
          <span style={{ whiteSpace: "nowrap" }}>
            Seven and Eighty · 7°N 80°E
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a
              href="/bts"
              style={{
                color: "inherit",
                textDecoration: "none",
                transition: "color .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#111317")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(17,19,23,.62)")
              }
            >
              behind the scenes
            </a>
            <a
              href="/inquire"
              style={{
                color: "inherit",
                textDecoration: "none",
                transition: "color .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#111317")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(17,19,23,.62)")
              }
            >
              inquire
            </a>
            <a
              href="https://instagram.com/7n80e"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
                transition: "color .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#111317")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(17,19,23,.62)")
              }
            >
              @7n80e
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://theboatgrp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Development by The Boat Group"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                color: "rgba(17,19,23,.75)",
                textDecoration: "none",
                font: "500 10px/1 'Poppins',sans-serif",
                letterSpacing: ".02em",
                textTransform: "lowercase",
                transition: "color .2s",
                background: "rgba(17,19,23,.03)",
                padding: "6px 12px",
                borderRadius: "99px",
                border: "1px solid rgba(17,19,23,.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#111317";
                e.currentTarget.style.borderColor = "#111317";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(17,19,23,.75)";
                e.currentTarget.style.borderColor = "rgba(17,19,23,.08)";
              }}
            >
              <span>dev by</span>
              <img
                src="/partners/theboat.png"
                alt="The Boat Group"
                style={{
                  height: "13px",
                  width: "auto",
                  display: "inline-block",
                  objectFit: "contain",
                }}
              />
              <span style={{ fontWeight: 600 }}>theboatgrp.com</span>
            </a>

            <span style={{ whiteSpace: "nowrap" }}>
              © 2026 sevenandeighty.com
            </span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
