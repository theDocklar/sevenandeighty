"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { EASE_OUT_EXPO } from "@/components/motion/primitives";
import { useScrollTheme } from "@/components/theme/ScrollTheme";

const NAV_ITEMS = [
  { label: "work", href: "/#work", sectionId: "work" },
  { label: "services", href: "/#services", sectionId: "services" },
  { label: "process", href: "/#process", sectionId: "process" },
  { label: "kit", href: "/#kit", sectionId: "kit" },
  { label: "behind the scenes", href: "/bts", sectionId: "bts" },
  { label: "contact", href: "/#contact", sectionId: "contact" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useScrollTheme();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
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

  // Track which section is in view on the home page.
  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/bts")) {
        setActiveSection("bts");
      } else if (pathname.startsWith("/inquire")) {
        setActiveSection("inquire");
      } else {
        setActiveSection("");
      }
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ["top", "work", "services", "process", "kit", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "color-mix(in srgb, var(--site-bg) 94%, transparent)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--site-border)",
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
        <Link
          href="/"
          aria-label="Seven & Eighty — back to top"
          style={{
            display: "flex",
            alignItems: "center",
            flex: "none",
            padding: "18px 0",
          }}
        >
          <img
            src="/brand/seven-and-eighty-horizontal-black-transparent.svg"
            alt="Seven & Eighty"
            className="header-logo"
            style={{
              height: "clamp(20px,2.2vw,28px)",
              width: "auto",
              display: "block",
            }}
          />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link"
                data-active={isActive}
                aria-current={isActive ? "true" : undefined}
                style={{
                  position: "relative",
                  padding: "28px 0",
                  font: "500 13px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  textDecoration: "none",
                  color: "inherit",
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
                      background: "var(--site-fg)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            type="button"
            onClick={toggleTheme}
            title={`Current theme: ${theme}. Click to toggle.`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 15px",
              borderRadius: 99,
              border: "1px solid var(--site-border)",
              background: "color-mix(in srgb, var(--site-fg) 4%, transparent)",
              color: "var(--site-fg)",
              font: "500 12px/1 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
              cursor: "pointer",
              transition: "border-color 0.3s ease, background-color 0.3s ease",
            }}
          >
            <span
              data-pulse="1"
              style={{
                width: 6,
                height: 6,
                borderRadius: 99,
                background: theme === "dark" ? "#4ADE80" : "var(--site-accent)",
                transition: "background-color 0.3s ease",
              }}
            />
            <span style={{ position: "relative", display: "inline-block", width: 34, height: 12, overflow: "hidden" }}>
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={theme}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  {theme}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>

          <Link
            href="/inquire"
            className="btn-whatsapp-header"
            style={{
              flex: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid var(--site-fg)",
              background: pathname === "/inquire" ? "var(--site-fg)" : "transparent",
              color: pathname === "/inquire" ? "var(--site-bg)" : "var(--site-fg)",
              borderRadius: "99px",
              padding: "12px 22px",
              font: "500 13px/1 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
              whiteSpace: "nowrap",
              textDecoration: "none",
              transition: "all .2s",
            }}
          >
            <span
              data-pulse="1"
              style={{
                width: 6,
                height: 6,
                borderRadius: 99,
                background: pathname === "/inquire" ? "var(--site-bg)" : "var(--site-accent)",
              }}
            />
            Inquire
          </Link>
        </div>
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
          background: "var(--site-fg)",
        }}
      />
    </motion.header>
  );
}
