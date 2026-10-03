import React from "react";

const HERO_REELS = [
  { n: "01", w: "28%", i: "0" },
  { n: "02", w: "38%", i: "1" },
  { n: "03", w: "28%", i: "2" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      data-screen-label="01 Hero"
      style={{
        position: "relative",
        padding: "clamp(56px,8vw,120px) clamp(16px,4vw,56px) clamp(56px,7vw,104px)",
        borderBottom: "1px solid #E6E7E9",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "62%",
          height: "1px",
          background: "#E6E7E9",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "64%",
          width: "1px",
          background: "#E6E7E9",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "calc(64% + 14px)",
          top: "calc(62% + 14px)",
          font: "600 10px/1.6 'Poppins',sans-serif",
          letterSpacing: ".01em",
          textTransform: "lowercase",
          color: "rgba(17,19,23,.62)",
          whiteSpace: "nowrap",
        }}
      >
        7.21°N 79.84°E<br />Negombo, Sri Lanka
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px clamp(32px,5vw,80px)",
          alignItems: "flex-end",
        }}
      >
        <div
          data-reveal="1"
          style={{
            flex: "1 1 560px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "clamp(28px,3vw,40px)",
          }}
        >
          <div
            style={{
              font: "500 13px/1 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
              color: "rgba(17,19,23,.62)",
            }}
          >
            Social media &amp; video agency · Sri Lanka
          </div>
          <h1
            style={{
              margin: 0,
              fontFamily: "'Bodoni Moda',serif",
              fontWeight: 500,
              fontOpticalSizing: "auto",
              fontSize: "clamp(46px,7.4vw,124px)",
              lineHeight: 0.98,
              letterSpacing: "-.025em",
              textWrap: "balance",
            }}
          >
            We don&apos;t sell posts.{" "}
            <span style={{ fontStyle: "italic" }}>
              We sell the reason people buy.
            </span>
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px 40px",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                font: "400 clamp(17px,1.4vw,20px)/1.5 'Poppins',sans-serif",
                maxWidth: "400px",
                textWrap: "pretty",
              }}
            >
              Reels, ads and social media for hotels, shops and brands in Colombo, Negombo and Galle.
            </p>
            <a
              href="https://wa.me/94775146688"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "#111317",
                color: "#FFFFFF",
                borderRadius: "99px",
                padding: "18px 28px",
                font: "600 12px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                whiteSpace: "nowrap",
              }}
            >
              Message us on WhatsApp
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
            </a>
          </div>
        </div>

        <div
          style={{
            flex: "0 1 380px",
            display: "flex",
            gap: "14px",
            alignItems: "flex-end",
            justifyContent: "center",
            minWidth: "260px",
          }}
        >
          {HERO_REELS.map((r) => (
            <div
              key={r.n}
              data-float={r.i}
              style={{
                width: r.w,
                aspectRatio: "9/16",
                background: "#FFFFFF",
                border: "1px solid #111317",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "10px",
                font: "600 8px/1.4 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Reel {r.n}</span>
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "99px",
                    border: "1px solid #111317",
                  }}
                />
              </span>
              <span style={{ color: "rgba(17,19,23,.62)" }}>Poster / video</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
