import React from "react";

const NAV = [
  { label: "work", href: "#work" },
  { label: "services", href: "#services" },
  { label: "process", href: "#process" },
  { label: "kit", href: "#kit" },
  { label: "contact", href: "#contact" },
];

export function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,.94)",
        backdropFilter: "blur(8px)",
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
        <a
          href="#top"
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
            style={{
              height: "clamp(20px,2.2vw,28px)",
              width: "auto",
              display: "block",
            }}
          />
        </a>
        <nav
          style={{
            display: "flex",
            gap: "clamp(16px,2.4vw,36px)",
            overflowX: "auto",
            whiteSpace: "nowrap",
            flex: "0 1 auto",
            minWidth: 0,
            scrollbarWidth: "none",
          }}
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:underline"
              style={{
                padding: "28px 0",
                font: "500 13px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                textUnderlineOffset: "8px",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/94775146688"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#111317] hover:text-white"
          style={{
            flex: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid #111317",
            borderRadius: "99px",
            padding: "12px 20px",
            font: "500 13px/1 'Poppins',sans-serif",
            letterSpacing: ".01em",
            textTransform: "lowercase",
            whiteSpace: "nowrap",
            transition: "background .25s,color .25s",
          }}
        >
          <span
            data-pulse="1"
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "99px",
              background: "currentColor",
            }}
          />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
