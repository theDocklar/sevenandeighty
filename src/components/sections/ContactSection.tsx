"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Magnetic,
  Reveal,
  SplitHeading,
} from "@/components/motion/primitives";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-screen-label="07 Contact"
      style={{
        display: "flex",
        flexWrap: "wrap",
        borderBottom: "1px solid var(--site-border)",
      }}
    >
      <div
        style={{
          flex: "1 1 440px",
          padding: "clamp(64px,8vw,112px) clamp(16px,4vw,56px)",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          borderRight: "1px solid var(--site-border)",
        }}
      >
        <Reveal delay={0}>
          <div
            style={{
              font: "500 13px/1 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
              color: "color-mix(in srgb, var(--site-fg) 62%, transparent)",
            }}
          >
            05 — Contact
          </div>
        </Reveal>
        <SplitHeading
          parts={[{ text: "Let's" }, { text: "talk.", italic: true }]}
          style={{
            margin: 0,
            fontFamily: "'Bodoni Moda',serif",
            fontWeight: 500,
            fontSize: "clamp(60px,9vw,150px)",
            lineHeight: 0.9,
            letterSpacing: "-.03em",
          }}
        />
        <Reveal delay={0.1}>
          <p
            style={{
              margin: 0,
              font: "400 clamp(17px,1.4vw,20px)/1.5 'Poppins',sans-serif",
              color: "var(--site-fg)",
            }}
          >
            Tell us what you&apos;re selling.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <Magnetic strength={0.25}>
            <motion.a
              href="https://wa.me/94775146688"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-hero"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                background: "var(--site-fg)",
                color: "var(--site-bg)",
                borderRadius: "99px",
                padding: "18px 28px",
                font: "600 12px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                textDecoration: "none",
              }}
            >
              Message us on WhatsApp
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </motion.a>
          </Magnetic>
        </Reveal>
      </div>

      <div
        style={{
          flex: "1 1 380px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Reveal delay={0.1} style={{ flex: 1, display: "flex" }}>
          <motion.a
            href="https://wa.me/94775146688"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-box"
            whileHover={{ x: 6, backgroundColor: "rgba(13, 59, 58, 0.03)" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "28px",
              padding: "32px clamp(16px,3vw,48px)",
              borderBottom: "1px solid var(--site-border)",
              textDecoration: "none",
              color: "inherit",
              background: "var(--site-bg)",
            }}
          >
            <span
              style={{
                font: "500 12px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "color-mix(in srgb, var(--site-fg) 62%, transparent)",
              }}
            >
              WhatsApp · Lashitha
            </span>
            <span
              style={{
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "clamp(28px,3vw,42px)",
                lineHeight: 1,
                color: "var(--site-fg)",
              }}
            >
              +94 77 514 6688
            </span>
          </motion.a>
        </Reveal>

        <Reveal delay={0.2} style={{ flex: 1, display: "flex" }}>
          <motion.a
            href="tel:+94766901333"
            className="contact-card-box"
            whileHover={{ x: 6, backgroundColor: "rgba(13, 59, 58, 0.03)" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "28px",
              padding: "32px clamp(16px,3vw,48px)",
              borderBottom: "1px solid var(--site-border)",
              textDecoration: "none",
              color: "inherit",
              background: "var(--site-bg)",
            }}
          >
            <span
              style={{
                font: "500 12px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "color-mix(in srgb, var(--site-fg) 62%, transparent)",
              }}
            >
              Phone · Sandanu
            </span>
            <span
              style={{
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "clamp(28px,3vw,42px)",
                lineHeight: 1,
                color: "var(--site-fg)",
              }}
            >
              +94 76 690 1333
            </span>
          </motion.a>
        </Reveal>

        <Reveal delay={0.25}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "12px",
              padding: "24px clamp(16px,3vw,48px)",
              font: "600 10px/1.6 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
              color: "color-mix(in srgb, var(--site-fg) 62%, transparent)",
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>
              Colombo · Negombo · Galle
            </span>
            <a
              href="https://instagram.com/7n80e"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                whiteSpace: "nowrap",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                color: "inherit",
              }}
            >
              Instagram @7n80e
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
