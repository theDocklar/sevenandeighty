"use client";

import React, { useState } from "react";

const STEPS = [
  "Message us and tell us what you sell.",
  "We meet in person and agree what success looks like.",
  "An NDA reaches you within 48 hours.",
  "We build the content calendar and the plan behind it.",
  "We start posting and run every platform for you.",
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <section
      id="process"
      data-screen-label="05 How we work"
      style={{
        borderBottom: "1px solid #E6E7E9",
        padding: "clamp(64px,8vw,112px) clamp(16px,4vw,56px)",
      }}
    >
      <div
        data-reveal="1"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "20px",
          marginBottom: "clamp(40px,5vw,72px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              font: "500 13px/1 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
              color: "rgba(17,19,23,.62)",
            }}
          >
            03 — How we work
          </div>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Bodoni Moda',serif",
              fontWeight: 500,
              fontSize: "clamp(38px,5vw,76px)",
              lineHeight: 1,
              letterSpacing: "-.02em",
            }}
          >
            Five steps <span style={{ fontStyle: "italic" }}>and you&apos;re live.</span>
          </h2>
        </div>
        <div
          style={{
            font: "600 10px/1.8 'Poppins',sans-serif",
            letterSpacing: ".01em",
            textTransform: "lowercase",
            color: "rgba(17,19,23,.62)",
            whiteSpace: "nowrap",
          }}
        >
          NDA within 48 hours
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))",
          borderTop: "1px solid #111317",
        }}
      >
        {STEPS.map((l, i) => (
          <button
            key={l}
            onMouseEnter={() => setActiveStep(i)}
            onClick={() => setActiveStep(i)}
            data-reveal="1"
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              padding: "28px 24px 28px 0",
              opacity: i <= activeStep ? 1 : 0.38,
              transition: "opacity .25s",
            }}
          >
            <span
              style={{
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "64px",
                lineHeight: 0.9,
              }}
            >
              {pad(i + 1)}
            </span>
            <span
              style={{
                font: "400 17px/1.45 'Poppins',sans-serif",
                textWrap: "pretty",
                maxWidth: "240px",
              }}
            >
              {l}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
