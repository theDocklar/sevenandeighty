import React from "react";

const PARTNERS = [
  { name: "theBOAT", src: "/partners/theboat.png", h: 32 },
  { name: "Sound House", src: "/partners/sound-house.png", h: 42 },
  { name: "Modern Space", src: "/partners/modern-space.png", h: 50 },
  { name: "Ayuda Boutique Hotels", src: "/partners/ayuda.png", h: 56 },
  { name: "Amazing Green", src: "/partners/amazing-green.png", h: 42 },
  { name: "Aztec by Ivy & Leo", src: "/partners/aztec.png", h: 28 },
];

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {PARTNERS.map((p) => (
        <img
          key={p.name}
          src={p.src}
          alt={hidden ? "" : p.name}
          className="marquee-logo"
          style={{ height: `${p.h}px` }}
          draggable={false}
        />
      ))}
    </div>
  );
}

export function PartnersSection() {
  return (
    <section
      id="partners"
      data-screen-label="02 Partners"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "stretch",
        borderBottom: "1px solid var(--site-border)",
      }}
    >
      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "28px clamp(16px,4vw,56px)",
          borderRight: "1px solid var(--site-border)",
        }}
      >
        <span
          style={{
            fontFamily: "'Bodoni Moda',serif",
            fontWeight: 500,
            fontSize: "56px",
            lineHeight: 0.9,
          }}
        >
          06
        </span>
        <span
          style={{
            font: "600 10px/1.6 'Poppins',sans-serif",
            letterSpacing: ".01em",
            textTransform: "lowercase",
            whiteSpace: "nowrap",
          }}
        >
          Brands<br />we work with
        </span>
      </div>

      <div className="marquee-viewport">
        <div className="marquee-track">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
