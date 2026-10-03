"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { EASE_OUT_EXPO } from "@/components/motion/primitives";

const NAV = [
  { label: "work", id: "work" },
  { label: "services", id: "services" },
  { label: "process", id: "process" },
  { label: "kit", id: "kit" },
  { label: "contact", id: "contact" },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Hide on scroll down, reveal on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160);
  });

  // Track which section is in the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...NAV.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,.94)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid #E6E7E9",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          padding: "0 clamp(16px,4vw,56px)",
          minHeight: "76px",
        }}
      >
        <a
          href="#top"
          aria-label="Seven & Eighty — back to top"
          style={{ display: "flex", alignItems: "center", flex: "none", padding: "18px 0" }}
        >
          <img
            src="/brand/seven-and-eighty-horizontal-black-transparent.svg"
            alt="Seven & Eighty"
            className="header-logo"
            style={{ height: "clamp(20px,2.2vw,28px)", width: "auto", display: "block" }}
          />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                data-active={isActive}
                aria-current={isActive ? "true" : undefined}
                style={{
                  position: "relative",
                  padding: "28px 0",
                  font: "500 13px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                }}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 20,
                      height: 1,
                      background: "#111317",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href="https://wa.me/94775146688"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-header"
          style={{
            flex: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid #111317",
            borderRadius: "99px",
            padding: "12px 20px",
            font: "500 13px/1 'Poppins',sans-serif",
            letterSpacing: ".01em",
            textTransform: "lowercase",
            whiteSpace: "nowrap",
          }}
        >
          <span
            data-pulse="1"
            style={{ width: 6, height: 6, borderRadius: 99, background: "currentColor" }}
          />
          WhatsApp
        </a>
      </div>

      {/* Scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{
          scaleX: progress,
          transformOrigin: "0% 50%",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -1,
          height: 1,
          background: "#111317",
        }}
      />
    </motion.header>
  );
}
