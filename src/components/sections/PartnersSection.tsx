import React from "react";

const PARTNERS = [
  { name: "theBOAT", src: "/partners/theboat.png", h: 32 },
  { name: "Sound House", src: "/partners/sound-house.png", h: 42 },
  { name: "Modern Space", src: "/partners/modern-space.png", h: 50 },
  { name: "Ayuda Boutique Hotels", src: "/partners/ayuda.png", h: 56 },
  { name: "Amazing Green", src: "/partners/amazing-green.png", h: 42 },
  { name: "Aztec by Ivy & Leo", src: "/partners/aztec.png", h: 28 },
];

export function PartnersSection() {
  return (
    <section
      id="partners"
      data-screen-label="02 Partners"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "stretch",
        borderBottom: "1px solid #E6E7E9",
      }}
    >
      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "28px clamp(16px,4vw,56px)",
          borderRight: "1px solid #E6E7E9",
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

      <div
        style={{
          flex: "1 1 400px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          padding: "28px 0",
          WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
          maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)",
        }}
      >
        <div
          data-marquee="1"
          style={{
            display: "flex",
            width: "max-content",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "64px",
              paddingRight: "64px",
            }}
          >
            {PARTNERS.map((p) => (
              <img
                key={p.name}
                src={p.src}
                alt={p.name}
                style={{
                  height: `${p.h}px`,
                  width: "auto",
                  display: "block",
                  filter: "grayscale(1) brightness(.35)",
                }}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "64px",
              paddingRight: "64px",
            }}
          >
            {PARTNERS.map((p, idx) => (
              <img
                key={`${p.name}-dup-${idx}`}
                src={p.src}
                alt=""
                style={{
                  height: `${p.h}px`,
                  width: "auto",
                  display: "block",
                  filter: "grayscale(1) brightness(.35)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
