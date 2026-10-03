import React from "react";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-screen-label="07 Contact"
      style={{
        display: "flex",
        flexWrap: "wrap",
        borderBottom: "1px solid #E6E7E9",
      }}
    >
      <div
        data-reveal="1"
        style={{
          flex: "1 1 440px",
          padding: "clamp(64px,8vw,112px) clamp(16px,4vw,56px)",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          borderRight: "1px solid #E6E7E9",
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
          05 — Contact
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Bodoni Moda',serif",
            fontWeight: 500,
            fontSize: "clamp(60px,9vw,150px)",
            lineHeight: 0.9,
            letterSpacing: "-.03em",
          }}
        >
          Let&apos;s <span style={{ fontStyle: "italic" }}>talk.</span>
        </h2>
        <p
          style={{
            margin: 0,
            font: "400 clamp(17px,1.4vw,20px)/1.5 'Poppins',sans-serif",
          }}
        >
          Tell us what you&apos;re selling.
        </p>
        <a
          href="https://wa.me/94775146688"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-hero"
          style={{
            alignSelf: "flex-start",
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

      <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column" }}>
        <a
          href="https://wa.me/94775146688"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card-box"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "28px",
            padding: "32px clamp(16px,3vw,48px)",
            borderBottom: "1px solid #E6E7E9",
          }}
        >
          <span
            style={{
              font: "500 12px/1 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
            }}
          >
            WhatsApp · Lashitha
          </span>
          <span
            style={{
              fontFamily: "'Bodoni Moda',serif",
              fontWeight: 500,
              fontSize: "clamp(28px,3vw,42px)",
              lineHeight: 1,
            }}
          >
            +94 77 514 6688
          </span>
        </a>

        <a
          href="tel:+94766901333"
          className="contact-card-box"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "28px",
            padding: "32px clamp(16px,3vw,48px)",
            borderBottom: "1px solid #E6E7E9",
          }}
        >
          <span
            style={{
              font: "500 12px/1 'Poppins',sans-serif",
              letterSpacing: ".01em",
              textTransform: "lowercase",
            }}
          >
            Phone · Sandanu
          </span>
          <span
            style={{
              fontFamily: "'Bodoni Moda',serif",
              fontWeight: 500,
              fontSize: "clamp(28px,3vw,42px)",
              lineHeight: 1,
            }}
          >
            +94 76 690 1333
          </span>
        </a>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "12px",
            padding: "24px clamp(16px,3vw,48px)",
            font: "600 10px/1.6 'Poppins',sans-serif",
            letterSpacing: ".01em",
            textTransform: "lowercase",
          }}
        >
          <span style={{ whiteSpace: "nowrap" }}>Colombo · Negombo · Galle</span>
          <a
            href="https://instagram.com/7n80e"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              whiteSpace: "nowrap",
              textDecoration: "underline",
              textUnderlineOffset: "5px",
            }}
          >
            Instagram @7n80e
          </a>
        </div>
      </div>
    </section>
  );
}
