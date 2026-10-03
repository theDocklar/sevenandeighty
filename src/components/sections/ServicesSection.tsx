"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  EASE_OUT_EXPO,
  Reveal,
  SplitHeading,
} from "@/components/motion/primitives";

const SVC: [string, string][] = [
  ["Social media management", "Your page run like a storefront: posted, replied to and watched every day."],
  ["Content creation", "Reels, graphics and TikToks built to be finished, not scrolled past."],
  ["Paid advertising", "Meta, TikTok and Google. We chase cost per result, not vanity likes."],
  ["Influencer marketing", "We borrow the trust you haven't had time to build yet."],
  ["Web design and development", "A site that closes the sale your content opened."],
  ["Photo and video", "Cameras, gimbals and drones. Owned by us, not rented by the hour."],
  ["Branding and identity", "Look like the most expensive option in your category."],
  ["Copywriting and strategy", "Words that keep selling when nobody's in the room."],
];

export function ServicesSection() {
  const [activeSvc, setActiveSvc] = useState(0);
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <section
      id="services"
      data-screen-label="04 What we do"
      style={{
        display: "flex",
        flexWrap: "wrap",
        borderBottom: "1px solid #E6E7E9",
      }}
    >
      <div
        style={{
          flex: "1 1 380px",
          padding: "clamp(64px,8vw,112px) clamp(16px,4vw,56px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "40px",
          borderRight: "1px solid #E6E7E9",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <Reveal>
            <div
              style={{
                font: "500 13px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "rgba(17,19,23,.62)",
              }}
            >
              02 — What we do
            </div>
          </Reveal>
          <SplitHeading
            parts={[
              { text: "Eight ways" },
              { text: "to move the number that matters.", italic: true },
            ]}
            style={{
              margin: 0,
              fontFamily: "'Bodoni Moda',serif",
              fontWeight: 500,
              fontSize: "clamp(38px,5vw,76px)",
              lineHeight: 1,
              letterSpacing: "-.02em",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            minHeight: "130px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSvc}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <div
                style={{
                  font: "600 10px/1.6 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.62)",
                }}
              >
                {pad(activeSvc + 1)}° OF 08
              </div>
              <div
                style={{
                  font: "400 18px/1.5 'Poppins',sans-serif",
                  textWrap: "pretty",
                }}
              >
                {SVC[activeSvc][1]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div
        style={{
          flex: "1.2 1 460px",
          display: "flex",
          flexDirection: "column",
          padding: "clamp(24px,3vw,48px) 0",
        }}
      >
        {SVC.map((x, i) => {
          const isActive = activeSvc === i;
          return (
            <button
              key={x[0]}
              onMouseEnter={() => setActiveSvc(i)}
              onClick={() => setActiveSvc(i)}
              style={{
                textAlign: "left",
                display: "flex",
                alignItems: "baseline",
                gap: "22px",
                padding: "20px clamp(16px,3vw,48px)",
                borderBottom: "1px solid #E6E7E9",
                opacity: isActive ? 1 : 0.42,
                transition: "opacity .3s cubic-bezier(0.16, 1, 0.3, 1), transform .3s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: isActive ? "translateX(4px)" : "translateX(0)",
              }}
            >
              <span
                style={{
                  font: "500 12px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  width: "22px",
                  flex: "none",
                }}
              >
                {pad(i + 1)}
              </span>
              <span
                style={{
                  flex: 1,
                  minWidth: 0,
                  fontFamily: "'Bodoni Moda',serif",
                  fontWeight: 500,
                  fontSize: "clamp(22px,2.2vw,32px)",
                  lineHeight: 1.15,
                  fontStyle: isActive ? "italic" : "normal",
                  transition: "font-style .2s ease",
                }}
              >
                {x[0]}
              </span>
              <motion.svg
                animate={{ x: isActive ? 4 : 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                style={{ flex: "none" }}
              >
                <path d="M3 9L9 3M4 3h5v5" />
              </motion.svg>
            </button>
          );
        })}
      </div>
    </section>
  );
}
