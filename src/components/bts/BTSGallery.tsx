"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Magnetic,
  Reveal,
  SplitHeading,
  Stagger,
  StaggerItem,
} from "@/components/motion/primitives";

const GALLERY_ITEMS = [
  {
    title: "Sony A7 III & Studio Rig",
    category: "Optics & Camera",
    aspect: "9/16",
    videoSrc: "/videos/sqalo-ravello.mp4",
    caption: "Live footage captured on set for SQALO Ravello with wide prime optics and cinema picture profiles.",
  },
  {
    title: "AVVOX Commercial Production",
    category: "Commercial Film",
    aspect: "9/16",
    videoSrc: "/videos/avvox-website.mp4",
    caption: "High-contrast commercial lighting, fast-paced macro cuts, and precision sound design for AVVOX.",
  },
  {
    title: "Master Hospitality & Villa Reel",
    category: "Resort & Architectural",
    aspect: "9/16",
    videoSrc: "/videos/whatsapp-reel.mp4",
    caption: "Fluid architectural walkthroughs, natural sunset light tracking, and luxury hospitality grading.",
  },
  {
    title: "Episode 01 — Pipeline & Ingest",
    category: "Production Pipeline",
    aspect: "9/16",
    videoSrc: "/videos/ep01-website.mp4",
    caption: "Same-night proxy ingest, multi-cam timeline assembly, and 48-hour delivery workflow.",
  },
  {
    title: "On-Set Raw Field Cam",
    category: "BTS & Crew Dynamics",
    aspect: "9/16",
    videoSrc: "/videos/bts-onset.mov",
    caption: "Raw behind-the-scenes takes tracking directors, lighting positioning, and gimbal passes.",
  },
  {
    title: "DJI Avata 2 Indoor Flight",
    category: "FPV Flythrough",
    aspect: "16/9",
    caption: "Custom ducted propellers allowing safe indoor flight within millimeters of people and decor.",
  },
];

export function BTSGallery() {
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
              03 — Visual archive & gear in action
            </div>
          </Reveal>
          <SplitHeading
            parts={[
              { text: "On set," },
              { text: "in the field.", italic: true },
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
            Raw Ingest & Production Sets
          </div>
        </Reveal>
      </div>

      {/* Grid */}
      <Stagger
        stagger={0.06}
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          borderTop: "1px solid #E6E7E9",
        }}
      >
        {GALLERY_ITEMS.map((item) => (
          <StaggerItem key={item.title}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              style={{
                padding: "clamp(24px,3vw,36px)",
                borderRight: "1px solid #E6E7E9",
                borderBottom: "1px solid #E6E7E9",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                height: "100%",
                background: "#FFFFFF",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  font: "500 12px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.6)",
                }}
              >
                <span>{item.category}</span>
                <span>7°N 80°E</span>
              </div>

              {/* Photo / Video Box */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: item.aspect,
                  background: "rgba(13, 59, 58, 0.05)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: item.videoSrc
                    ? "1px solid #111317"
                    : "1px dashed rgba(13, 59, 58, 0.2)",
                }}
              >
                {item.videoSrc ? (
                  <>
                    <video
                      src={item.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 60%, rgba(0,0,0,0.6) 100%)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        zIndex: 2,
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(4px)",
                        color: "#FFFFFF",
                        padding: "3px 8px",
                        borderRadius: "2px",
                        font: "600 8px/1 'Poppins',sans-serif",
                        letterSpacing: ".04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Live Footage
                    </div>
                  </>
                ) : (
                  <span
                    style={{
                      font: "600 10px/1 'Poppins',sans-serif",
                      letterSpacing: ".06em",
                      color: "#0D3B3A",
                    }}
                  >
                    ON-SET PHOTO ARCHIVE
                  </span>
                )}
              </div>

              <div>
                <h4
                  style={{
                    margin: "0 0 8px 0",
                    fontFamily: "'Bodoni Moda',serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: 1.2,
                    color: "#111317",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    font: "400 13px/1.5 'Poppins',sans-serif",
                    color: "rgba(17,19,23,.7)",
                  }}
                >
                  {item.caption}
                </p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* CTA Box */}
      <div
        style={{
          padding:
            "clamp(64px,8vw,112px) clamp(16px,4vw,56px)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "32px",
          background: "rgba(17,19,23,.02)",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <Reveal>
            <div
              style={{
                font: "500 13px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "rgba(17,19,23,.62)",
                marginBottom: "16px",
              }}
            >
              04 — Work with us
            </div>
            <h3
              style={{
                margin: "0 0 16px 0",
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "clamp(32px,4vw,54px)",
                lineHeight: 1.05,
                color: "#111317",
              }}
            >
              Ready to see your brand <span style={{ fontStyle: "italic" }}>behind our lens?</span>
            </h3>
            <p
              style={{
                margin: 0,
                font: "400 15px/1.6 'Poppins',sans-serif",
                color: "rgba(17,19,23,.7)",
              }}
            >
              Tell us what you sell and we&apos;ll build the visual strategy,
              deliver your NDA in 48 hours, and start shooting.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <Magnetic strength={0.3}>
            <Link
              href="/inquire"
              className="btn-whatsapp-hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                background: "#111317",
                color: "#FFFFFF",
                borderRadius: "99px",
                padding: "20px 36px",
                font: "600 13px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                textDecoration: "none",
              }}
            >
              <span>Start an inquiry</span>
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
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
