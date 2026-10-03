"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Reveal,
  SplitHeading,
  Stagger,
  StaggerItem,
} from "@/components/motion/primitives";

const REELS = [
  {
    n: "01",
    title: "SQALO Ravello",
    type: "Fashion & Lifestyle",
    videoSrc: "/videos/sqalo-ravello.mp4",
    tag: "Featured Production",
  },
  {
    n: "02",
    title: "AVVOX",
    type: "Audio & Commercial Film",
    videoSrc: "/videos/avvox-website.mp4",
    tag: "Brand Campaign",
  },
  {
    n: "03",
    title: "Master Hospitality Reel",
    type: "Resort & Luxury Villa",
    videoSrc: "/videos/whatsapp-reel.mp4",
    tag: "Master Deliverable",
  },
  {
    n: "04",
    title: "Episode 01 — The Strategy",
    type: "Agency & Social Retainer",
    videoSrc: "/videos/ep01-website.mp4",
    tag: "Original Series",
  },
  {
    n: "05",
    title: "On-Set Field Cam",
    type: "Production & Raw Takes",
    videoSrc: "/videos/bts-onset.mov",
    tag: "Behind The Scenes",
  },
  {
    n: "06",
    title: "Villa Mirissa",
    type: "Luxury Stay",
    tag: "Architectural",
  },
  { n: "07", title: "Tropic Co.", type: "Beverage & Bar", tag: "High Speed" },
  { n: "08", title: "Southern Coastline", type: "FPV Flythrough", tag: "Avata 2 Flight" },
];

export function WorkSection() {
  const [activeModalReel, setActiveModalReel] = useState<(typeof REELS)[number] | null>(null);

  return (
    <section
      id="work"
      data-screen-label="03 Work"
      style={{ borderBottom: "1px solid #E6E7E9" }}
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
          <Reveal>
            <div
              style={{
                font: "500 13px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "rgba(17,19,23,.62)",
              }}
            >
              01 — Work
            </div>
          </Reveal>
          <SplitHeading
            parts={[
              { text: "Reels that" },
              { text: "get finished.", italic: true },
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
        <Reveal delay={0.2}>
          <div
            style={{
              font: "600 10px/1.8 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
              textAlign: "right",
              color: "rgba(17,19,23,.62)",
              whiteSpace: "nowrap",
            }}
          >
            Autoplay muted · Click card to play
          </div>
        </Reveal>
      </div>

      <Stagger
        stagger={0.07}
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(min(46%,240px),1fr))",
          gap: "clamp(16px,2vw,28px)",
          padding: "0 clamp(16px,4vw,56px) clamp(64px,8vw,112px)",
        }}
      >
        {REELS.map((r) => {
          const hasVideo = !!r.videoSrc;
          return (
            <StaggerItem key={r.n}>
              <motion.div
                onClick={() => setActiveModalReel(r)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  cursor: "pointer",
                }}
              >
                <div
                  className="reel-card-box"
                  style={{
                    position: "relative",
                    aspectRatio: "9/16",
                    background: hasVideo ? "#111317" : "#F4F4F5",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    border: "1px solid #E6E7E9",
                  }}
                >
                  {hasVideo ? (
                    <>
                      <video
                        src={r.videoSrc}
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
                            "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.8) 100%)",
                          pointerEvents: "none",
                        }}
                      />
                    </>
                  ) : (
                    <span
                      style={{
                        font: "600 9px/1.6 'Poppins',sans-serif",
                        letterSpacing: ".01em",
                        textTransform: "lowercase",
                        color: "rgba(17,19,23,.62)",
                        textAlign: "center",
                      }}
                    >
                      {r.title}
                      <br />
                      4K · In-House
                    </span>
                  )}

                  {/* Badge top left */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      zIndex: 2,
                      font: "600 9px/1 'Poppins',sans-serif",
                      letterSpacing: ".04em",
                      textTransform: "uppercase",
                      color: hasVideo ? "#FFFFFF" : "#111317",
                      background: hasVideo
                        ? "rgba(0,0,0,0.6)"
                        : "rgba(255,255,255,0.8)",
                      backdropFilter: "blur(4px)",
                      padding: "4px 8px",
                      borderRadius: "2px",
                    }}
                  >
                    {r.tag}
                  </div>

                  {/* Play circle */}
                  <span
                    className="play-icon-btn"
                    style={{
                      position: "absolute",
                      right: "12px",
                      bottom: "12px",
                      zIndex: 2,
                      width: "36px",
                      height: "36px",
                      borderRadius: "99px",
                      background: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <svg
                      width="9"
                      height="11"
                      viewBox="0 0 10 12"
                      fill="#111317"
                    >
                      <path d="M0 0l10 6-10 6z" />
                    </svg>
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontFamily: "'Bodoni Moda',serif",
                        fontSize: "20px",
                        lineHeight: 1.2,
                        color: "#111317",
                      }}
                    >
                      {r.title}
                    </span>
                    <span
                      style={{
                        font: "400 12px/1.3 'Poppins',sans-serif",
                        color: "rgba(17,19,23,.6)",
                      }}
                    >
                      {r.type}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "'Bodoni Moda',serif",
                      fontSize: "18px",
                      color: "rgba(17,19,23,.5)",
                    }}
                  >
                    {r.n}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Lightbox / Video Player Modal */}
      <AnimatePresence>
        {activeModalReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalReel(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(17, 19, 23, 0.88)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(92vw, 420px)",
                aspectRatio: "9/16",
                background: "#000000",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
              }}
            >
              {activeModalReel.videoSrc ? (
                <video
                  src={activeModalReel.videoSrc}
                  autoPlay
                  controls
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    gap: "12px",
                    padding: "24px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bodoni Moda',serif",
                      fontSize: "28px",
                    }}
                  >
                    {activeModalReel.title}
                  </span>
                  <span style={{ font: "400 13px/1.4 'Poppins',sans-serif", opacity: 0.7 }}>
                    Full video master available upon inquiry or review link.
                  </span>
                </div>
              )}

              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveModalReel(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  zIndex: 10,
                  width: "36px",
                  height: "36px",
                  borderRadius: "99px",
                  background: "rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(6px)",
                }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

