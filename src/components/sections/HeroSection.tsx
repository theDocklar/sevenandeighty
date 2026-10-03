"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  EASE_OUT_EXPO,
  Magnetic,
  Reveal,
  SplitHeading,
} from "@/components/motion/primitives";

const HERO_REELS = [
  { n: "01", w: "28%", i: "0", depth: 14, scroll: -60, tilt: -5 },
  { n: "02", w: "38%", i: "1", depth: 26, scroll: -130, tilt: 0 },
  { n: "03", w: "28%", i: "2", depth: 18, scroll: -90, tilt: 5 },
];

function HeroReel({
  reel,
  index,
  mx,
  my,
  progress,
}: {
  reel: (typeof HERO_REELS)[number];
  index: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  progress: MotionValue<number>;
}) {
  const scrollY = useTransform(progress, [0, 1], [0, reel.scroll]);
  const pointerY = useTransform(my, (v) => v * reel.depth);
  const y = useTransform([scrollY, pointerY], ([a, b]) => (a as number) + (b as number));
  const x = useTransform(mx, (v) => v * reel.depth);

  return (
    <motion.div style={{ width: reel.w, x, y }}>
      <motion.div
        initial={{ opacity: 0, y: 80, rotate: reel.tilt }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1.4, ease: EASE_OUT_EXPO, delay: 0.55 + index * 0.12 }}
      >
        <div
          data-float={reel.i}
          className="hero-reel"
          style={{
            aspectRatio: "9/16",
            background: "#FFFFFF",
            border: "1px solid #111317",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px",
            font: "600 8px/1.4 'Poppins',sans-serif",
            letterSpacing: ".01em",
            textTransform: "lowercase",
          }}
        >
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Reel {reel.n}</span>
            <span
              data-pulse="1"
              style={{ width: 7, height: 7, borderRadius: 99, border: "1px solid #111317" }}
            />
          </span>
          <span style={{ color: "rgba(17,19,23,.62)" }}>Poster / video</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.1]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const springCfg = { stiffness: 60, damping: 18, mass: 0.6 };
  const mx = useSpring(0, springCfg);
  const my = useSpring(0, springCfg);

  return (
    <section
      ref={ref}
      id="top"
      data-screen-label="01 Hero"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{
        position: "relative",
        padding: "clamp(56px,8vw,120px) clamp(16px,4vw,56px) clamp(56px,7vw,104px)",
        borderBottom: "1px solid #E6E7E9",
        overflow: "hidden",
      }}
    >
      {/* 7°N / 80°E crosshair — draws in on load */}
      <motion.div aria-hidden="true" style={{ position: "absolute", inset: 0, y: gridY }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "62%",
            height: 1,
            background: "#E6E7E9",
            transformOrigin: "0% 50%",
          }}
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.8, ease: EASE_OUT_EXPO, delay: 0.35 }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "64%",
            width: 1,
            background: "#E6E7E9",
            transformOrigin: "50% 0%",
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 1.3 }}
          style={{
            position: "absolute",
            left: "calc(64% + 14px)",
            top: "calc(62% + 14px)",
            font: "600 10px/1.6 'Poppins',sans-serif",
            letterSpacing: ".01em",
            textTransform: "lowercase",
            color: "rgba(17,19,23,.62)",
            whiteSpace: "nowrap",
          }}
        >
          7.21°N 79.84°E
          <br />
          Negombo, Sri Lanka
        </motion.div>
      </motion.div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px clamp(32px,5vw,80px)",
          alignItems: "flex-end",
        }}
      >
        <motion.div
          style={{
            flex: "1 1 560px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "clamp(28px,3vw,40px)",
            y: copyY,
            opacity: copyOpacity,
          }}
        >
          <Reveal delay={0.1}>
            <div
              style={{
                font: "500 13px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "rgba(17,19,23,.62)",
              }}
            >
              Social media &amp; video agency · Sri Lanka
            </div>
          </Reveal>

          <SplitHeading
            as="h1"
            delay={0.2}
            stagger={0.07}
            parts={[
              { text: "We don't sell posts." },
              { text: "We sell the reason people buy.", italic: true },
            ]}
            style={{
              margin: 0,
              fontFamily: "'Bodoni Moda',serif",
              fontWeight: 500,
              fontOpticalSizing: "auto",
              fontSize: "clamp(46px,7.4vw,124px)",
              lineHeight: 0.98,
              letterSpacing: "-.025em",
              textWrap: "balance",
            }}
          />

          <Reveal delay={0.85}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "24px 40px",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  font: "400 clamp(17px,1.4vw,20px)/1.5 'Poppins',sans-serif",
                  maxWidth: "400px",
                  textWrap: "pretty",
                }}
              >
                Reels, ads and social media for hotels, shops and brands in Colombo, Negombo and Galle.
              </p>
              <Magnetic>
                <a
                  href="https://wa.me/94775146688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-hero"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    background: "#111317",
                    color: "#FFFFFF",
                    borderRadius: "99px",
                    padding: "18px 28px",
                    font: "600 12px/1 'Poppins',sans-serif",
                    letterSpacing: ".01em",
                    textTransform: "lowercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Message us on WhatsApp
                  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </motion.div>

        <div
          style={{
            flex: "0 1 380px",
            display: "flex",
            gap: "14px",
            alignItems: "flex-end",
            justifyContent: "center",
            minWidth: "260px",
          }}
        >
          {HERO_REELS.map((r, i) => (
            <HeroReel key={r.n} reel={r} index={i} mx={mx} my={my} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
