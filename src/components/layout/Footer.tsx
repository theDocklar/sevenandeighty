import React from "react";

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        padding: "clamp(80px,10vw,140px) clamp(16px,4vw,56px) 32px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "clamp(64px,8vw,112px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "calc(clamp(80px,10vw,140px) + clamp(48px,6vw,90px))",
          height: "1px",
          background: "#E6E7E9",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "1px",
          background: "#E6E7E9",
        }}
      />
      <div
        style={{
          position: "relative",
          background: "#FFFFFF",
          padding: "24px clamp(20px,3vw,40px)",
        }}
      >
        <img
          src="/brand/seven-and-eighty-logo-black.svg"
          alt="7°&80° — North, East"
          style={{
            width: "clamp(200px,32vw,453px)",
            height: "auto",
            display: "block",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "12px 24px",
          background: "#FFFFFF",
          paddingTop: "20px",
          borderTop: "1px solid #E6E7E9",
          font: "600 10px/1.6 'Poppins',sans-serif",
          letterSpacing: ".01em",
          textTransform: "lowercase",
          color: "rgba(17,19,23,.62)",
        }}
      >
        <span style={{ whiteSpace: "nowrap" }}>Seven and Eighty · 7°N 80°E</span>
        <a
          href="https://instagram.com/7n80e"
          target="_blank"
          rel="noopener noreferrer"
        >
          @7n80e
        </a>
        <span style={{ whiteSpace: "nowrap" }}>© 2026 sevenandeighty.com</span>
      </div>
    </footer>
  );
}
