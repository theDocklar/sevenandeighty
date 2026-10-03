import React from "react";

const REELS = [
  { n: "01", type: "Hotel" },
  { n: "02", type: "Retail" },
  { n: "03", type: "Brand" },
  { n: "04", type: "Hotel" },
  { n: "05", type: "Food" },
  { n: "06", type: "Brand" },
  { n: "07", type: "Drone" },
  { n: "08", type: "Retail" },
];

export function WorkSection() {
  return (
    <section
      id="work"
      data-screen-label="03 Work"
      style={{ borderBottom: "1px solid #E6E7E9" }}
    >
      <div
        data-reveal="1"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "20px",
          padding: "clamp(64px,8vw,112px) clamp(16px,4vw,56px) clamp(32px,4vw,48px)",
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
            01 — Work
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
            Reels that <span style={{ fontStyle: "italic" }}>get finished.</span>
          </h2>
        </div>
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
          Autoplay muted · Tap to play
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(min(46%,210px),1fr))",
          gap: "clamp(12px,1.6vw,24px)",
          padding: "0 clamp(16px,4vw,56px) clamp(64px,8vw,112px)",
        }}
      >
        {REELS.map((r) => (
          <div
            key={r.n}
            data-reveal="1"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              className="reel-card-box"
              style={{
                position: "relative",
                aspectRatio: "9/16",
                background: "#F4F4F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  font: "600 9px/1.6 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.62)",
                  textAlign: "center",
                }}
              >
                Reel {r.n}<br />Poster + MP4
              </span>
              <span
                style={{
                  position: "absolute",
                  right: "12px",
                  bottom: "12px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "99px",
                  background: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="9" height="11" viewBox="0 0 10 12" fill="#111317">
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
              <span
                style={{
                  fontFamily: "'Bodoni Moda',serif",
                  fontStyle: "italic",
                  fontSize: "20px",
                }}
              >
                {r.type}
              </span>
              <span
                style={{
                  font: "500 12px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  color: "rgba(17,19,23,.62)",
                }}
              >
                {r.n}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
