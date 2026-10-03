import React from "react";

const KIT: [string, string][] = [
  ["Camera", "Sony A7 III"],
  ["Drone", "DJI Avata 2"],
  ["Drone", "DJI Neo 2"],
  ["Phone", "iPhone 17 Pro Max"],
  ["Gimbal", "Zhiyun Smooth Q3"],
];

export function KitSection() {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <section
      id="kit"
      data-screen-label="06 Our kit"
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
            04 — Our kit
          </div>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Bodoni Moda',serif",
              fontWeight: 500,
              fontSize: "clamp(38px,5vw,76px)",
              lineHeight: 1,
              letterSpacing: "-.02em",
              maxWidth: "900px",
              textWrap: "balance",
            }}
          >
            We own our kit,{" "}
            <span style={{ fontStyle: "italic" }}>
              so we can shoot tonight.
            </span>
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
          Owned, not rented by the hour
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))",
          borderTop: "1px solid #E6E7E9",
        }}
      >
        {KIT.map((k, i) => (
          <div
            key={k[1]}
            data-reveal="1"
            className="hover:bg-[#111317] hover:text-[#FFFFFF]"
            style={{
              minHeight: "280px",
              padding: "24px clamp(16px,2vw,28px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
              borderRight: "1px solid #E6E7E9",
              transition: "background .35s,color .35s",
              cursor: "default",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                font: "500 12px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
              }}
            >
              <span>{k[0]}</span>
              <span>{pad(i + 1)}</span>
            </div>
            <div
              style={{
                aspectRatio: "4/3",
                background: "rgba(128,128,128,.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: "600 9px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                opacity: 0.8,
              }}
            >
              GEAR PHOTO
            </div>
            <span
              style={{
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "26px",
                lineHeight: 1.1,
              }}
            >
              {k[1]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
