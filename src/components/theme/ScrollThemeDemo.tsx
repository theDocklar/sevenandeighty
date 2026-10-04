"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  EASE_OUT_EXPO,
  Magnetic,
  Reveal,
  SplitHeading,
  Stagger,
  StaggerItem,
} from "@/components/motion/primitives";
import { AGENCY_INFO, KIT_ITEMS, SERVICES } from "@/lib/constants";
import {
  ScrollThemeProvider,
  ThemeSection,
  useScrollTheme,
  type ThemeName,
} from "./ScrollTheme";

const SECTIONS: { id: string; label: string; theme: ThemeName }[] = [
  { id: "st-hero", label: "Intro", theme: "light" },
  { id: "st-work", label: "Work", theme: "dark" },
  { id: "st-services", label: "Services", theme: "light" },
  { id: "st-kit", label: "Kit", theme: "dark" },
  { id: "st-contact", label: "Contact", theme: "light" },
];

const REELS = [
  { title: "SQALO Ravello", type: "Fashion & Lifestyle", src: "/videos/sqalo-ravello.mp4" },
  { title: "AVVOX", type: "Audio & Commercial", src: "/videos/avvox-website.mp4" },
  { title: "Episode 01", type: "Agency Retainer", src: "/videos/ep01-website.mp4" },
];

const PAD = "clamp(16px,4vw,56px)";

const eyebrow: React.CSSProperties = {
  font: "500 13px/1 'Poppins',sans-serif",
  letterSpacing: ".01em",
  textTransform: "lowercase",
  color: "var(--st-muted)",
};

const display = (size: string): React.CSSProperties => ({
  margin: 0,
  fontFamily: "'Bodoni Moda',serif",
  fontWeight: 500,
  fontSize: size,
  lineHeight: 0.98,
  letterSpacing: "-.025em",
  textWrap: "balance",
});

/* -------------------------------------------------------------------------- */
/*  Chrome                                                                    */
/* -------------------------------------------------------------------------- */

function ThemedHeader() {
  const { theme } = useScrollTheme();
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        minHeight: 72,
        padding: `0 ${PAD}`,
        background: "color-mix(in srgb, var(--st-bg) 86%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--st-border)",
      }}
    >
      <Link href="/" aria-label="Seven & Eighty — home" style={{ display: "flex" }}>
        <img
          src="/brand/seven-and-eighty-horizontal-black-transparent.svg"
          alt="Seven & Eighty"
          style={{
            height: "clamp(20px,2.2vw,26px)",
            width: "auto",
            filter: theme === "dark" ? "invert(1)" : "none",
            transition: "filter .8s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <ThemeBadge />
        <Link href="/inquire" className="st-btn-outline">
          Inquire
        </Link>
      </div>
    </header>
  );
}

/** Small pill that flips between "light" and "dark" with an animated label. */
function ThemeBadge() {
  const { theme } = useScrollTheme();
  return (
    <span
      aria-live="polite"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px",
        borderRadius: 99,
        border: "1px solid var(--st-border)",
        font: "500 12px/1 'Poppins',sans-serif",
        textTransform: "lowercase",
        overflow: "hidden",
      }}
    >
      <span
        data-pulse="1"
        style={{ width: 6, height: 6, borderRadius: 99, background: "var(--st-accent)" }}
      />
      <span style={{ position: "relative", display: "inline-block", width: 34, height: 12 }}>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={theme}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            style={{ position: "absolute", inset: 0 }}
          >
            {theme}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

/** Fixed side rail: one dot per section, active one expands with its label. */
function SectionRail() {
  const { activeId } = useScrollTheme();
  return (
    <nav
      aria-label="Sections"
      className="st-rail"
      style={{
        position: "fixed",
        right: PAD,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 14,
      }}
    >
      {SECTIONS.map((s) => {
        const active = s.id === activeId;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={active ? "true" : undefined}
            style={{ display: "flex", alignItems: "center", gap: 10, color: "inherit" }}
          >
            <AnimatePresence>
              {active && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  style={{
                    font: "500 11px/1 'Poppins',sans-serif",
                    textTransform: "lowercase",
                    color: "var(--st-muted)",
                  }}
                >
                  {s.label}
                </motion.span>
              )}
            </AnimatePresence>
            <motion.span
              animate={{ height: active ? 22 : 6, opacity: active ? 1 : 0.4 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              style={{ width: 6, borderRadius: 99, background: "var(--st-fg)" }}
            />
          </a>
        );
      })}
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sections                                                                  */
/* -------------------------------------------------------------------------- */

function SectionHead({
  index,
  kicker,
  parts,
  aside,
}: {
  index: string;
  kicker: string;
  parts: { text: string; italic?: boolean }[];
  aside?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 20,
        marginBottom: "clamp(40px,5vw,72px)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <Reveal>
          <div style={eyebrow}>
            {index} — {kicker}
          </div>
        </Reveal>
        <SplitHeading parts={parts} style={display("clamp(38px,5vw,76px)")} />
      </div>
      {aside && (
        <Reveal delay={0.15}>
          <div style={{ ...eyebrow, fontSize: 10, fontWeight: 600 }}>{aside}</div>
        </Reveal>
      )}
    </div>
  );
}

const sectionPad: React.CSSProperties = {
  minHeight: "100vh",
  padding: `clamp(112px,12vw,160px) ${PAD} clamp(64px,8vw,112px)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

function HeroBlock() {
  return (
    <ThemeSection id="st-hero" theme="light" label="Intro" style={sectionPad}>
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,3vw,40px)", maxWidth: 1100 }}>
        <Reveal>
          <div style={eyebrow}>
            {AGENCY_INFO.tagline} · scroll to shift the light
          </div>
        </Reveal>
        <SplitHeading
          as="h1"
          delay={0.1}
          parts={[
            { text: "From golden hour" },
            { text: "to blue hour.", italic: true },
          ]}
          style={display("clamp(48px,8vw,132px)")}
        />
        <Reveal delay={0.5}>
          <p
            style={{
              margin: 0,
              maxWidth: 480,
              font: "400 clamp(17px,1.4vw,20px)/1.5 'Poppins',sans-serif",
              color: "var(--st-muted)",
            }}
          >
            Every section on this page sets its own mood. Scroll down and the
            palette follows: background, type, borders and accents all move together.
          </p>
        </Reveal>
        <Reveal delay={0.7}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ ...eyebrow, display: "flex", alignItems: "center", gap: 10 }}
          >
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 1v14M1 10l5 5 5-5" />
            </svg>
            scroll
          </motion.div>
        </Reveal>
      </div>
    </ThemeSection>
  );
}

function WorkBlock() {
  return (
    <ThemeSection id="st-work" theme="dark" label="Work" style={sectionPad}>
      <SectionHead
        index="01"
        kicker="Work"
        parts={[{ text: "Reels that" }, { text: "own the night.", italic: true }]}
        aside="Shot in-house · 4K"
      />
      <Stagger
        stagger={0.08}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,220px),1fr))",
          gap: "clamp(16px,2vw,28px)",
        }}
      >
        {REELS.map((r) => (
          <StaggerItem key={r.title}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "9/16",
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "var(--st-surface)",
                  border: "1px solid var(--st-border)",
                }}
              >
                <video
                  src={r.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "'Bodoni Moda',serif", fontSize: 20 }}>{r.title}</span>
                <span style={{ font: "400 12px/1.3 'Poppins',sans-serif", color: "var(--st-muted)" }}>
                  {r.type}
                </span>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </ThemeSection>
  );
}

function ServicesBlock() {
  return (
    <ThemeSection id="st-services" theme="light" label="Services" style={sectionPad}>
      <SectionHead
        index="02"
        kicker="Services"
        parts={[{ text: "Eight ways" }, { text: "we sell for you.", italic: true }]}
      />
      <Stagger
        stagger={0.05}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
          borderTop: "1px solid var(--st-border)",
        }}
      >
        {SERVICES.map((s) => (
          <StaggerItem key={s.id}>
            <div
              className="st-card"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                padding: "28px 24px 28px 0",
                borderBottom: "1px solid var(--st-border)",
              }}
            >
              <span style={{ fontFamily: "'Bodoni Moda',serif", fontSize: 28, color: "var(--st-accent)" }}>
                {s.number}
              </span>
              <span style={{ fontFamily: "'Bodoni Moda',serif", fontSize: 22, lineHeight: 1.15 }}>{s.title}</span>
              <span style={{ font: "400 14px/1.55 'Poppins',sans-serif", color: "var(--st-muted)" }}>
                {s.description}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </ThemeSection>
  );
}

function KitBlock() {
  return (
    <ThemeSection id="st-kit" theme="dark" label="Kit" style={sectionPad}>
      <SectionHead
        index="03"
        kicker="Our kit"
        parts={[{ text: "We own our kit," }, { text: "so we shoot tonight.", italic: true }]}
        aside="Owned, not rented"
      />
      <Stagger
        stagger={0.06}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))",
          gap: 1,
          background: "var(--st-border)",
          border: "1px solid var(--st-border)",
        }}
      >
        {KIT_ITEMS.map((k) => (
          <StaggerItem key={k.name} style={{ background: "var(--st-bg)" }}>
            <div
              className="st-kit-card"
              style={{
                minHeight: 220,
                padding: "24px clamp(16px,2vw,28px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  font: "500 12px/1 'Poppins',sans-serif",
                  textTransform: "lowercase",
                  color: "var(--st-muted)",
                }}
              >
                <span>{k.category}</span>
                <span>{k.number}</span>
              </div>
              <span style={{ fontFamily: "'Bodoni Moda',serif", fontSize: 26, lineHeight: 1.1 }}>{k.name}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </ThemeSection>
  );
}

function ContactBlock() {
  const { whatsapp, phone } = AGENCY_INFO.contacts;
  return (
    <ThemeSection id="st-contact" theme="light" label="Contact" style={sectionPad}>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <Reveal>
          <div style={eyebrow}>04 — Contact</div>
        </Reveal>
        <SplitHeading parts={[{ text: "Let's" }, { text: "talk.", italic: true }]} style={display("clamp(64px,10vw,160px)")} />
        <Reveal delay={0.15}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px 40px" }}>
            <Magnetic strength={0.25}>
              <a href={whatsapp.url} target="_blank" rel="noopener noreferrer" className="st-btn">
                Message {whatsapp.name} on WhatsApp
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </a>
            </Magnetic>
            <a href={phone.url} className="st-link">
              {phone.name} · {phone.number}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div style={{ ...eyebrow, fontSize: 11 }}>
            {AGENCY_INFO.operatingAreas} · {AGENCY_INFO.instagram}
          </div>
        </Reveal>
      </div>
    </ThemeSection>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export function ScrollThemeDemo() {
  return (
    <ScrollThemeProvider initialTheme="light">
      <ThemedHeader />
      <SectionRail />
      <main>
        <HeroBlock />
        <WorkBlock />
        <ServicesBlock />
        <KitBlock />
        <ContactBlock />
      </main>
    </ScrollThemeProvider>
  );
}
