"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { EASE_OUT_EXPO } from "@/components/motion/primitives";

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
                      background: "#111317",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/inquire"
            className="btn-whatsapp-header"
            style={{
              flex: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #111317",
              background: pathname === "/inquire" ? "#111317" : "transparent",
              color: pathname === "/inquire" ? "#FFFFFF" : "#111317",
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
                background: pathname === "/inquire" ? "#FFFFFF" : "#0D3B3A",
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
          background: "#111317",
        }}
      />
    </motion.header>
  );
}
