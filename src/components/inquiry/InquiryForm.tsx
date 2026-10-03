"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Magnetic,
  Reveal,
  SplitHeading,
  Stagger,
  StaggerItem,
} from "@/components/motion/primitives";

const SERVICE_OPTIONS = [
  "Full Social Media Retainer",
  "Reels & Short-Form Video",
  "Commercial & Brand Film",
  "FPV & Drone Cinematography",
  "Hospitality & Villa Showcase",
  "Menu / Culinary Production",
  "Event & Launch Coverage",
  "Custom Production",
];

const TIMELINE_OPTIONS = [
  "Immediate (Next 48–72 hrs)",
  "Within 2 Weeks",
  "This Month",
  "Next Quarter",
  "Just Planning / Exploring",
];

const BUDGET_OPTIONS = [
  "Standard Retainer",
  "Project-Based (Single Shoot)",
  "Flagship Multi-Day Campaign",
  "Let's Discuss",
];

export function InquiryForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Full Social Media Retainer",
  ]);
  const [timeline, setTimeline] = useState<string>("Within 2 Weeks");
  const [budget, setBudget] = useState<string>("Standard Retainer");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [brief, setBrief] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const constructWhatsAppMessage = () => {
    const lines = [
      `*New Project Inquiry — Seven & Eighty*`,
      ``,
      `*Name:* ${name || "Not specified"}`,
      `*Brand/Company:* ${brand || "Not specified"}`,
      `*WhatsApp / Phone:* ${phone || "Not specified"}`,
      email ? `*Email:* ${email}` : null,
      instagram ? `*Instagram / Web:* ${instagram}` : null,
      ``,
      `*Services Needed:* ${selectedServices.join(", ")}`,
      `*Timeline:* ${timeline}`,
      `*Budget Range:* ${budget}`,
      ``,
      brief ? `*Project Brief / Vision:*\n${brief}` : null,
      ``,
      `_Sent via sevenandeighty.com/inquire_`,
    ].filter(Boolean);

    return encodeURIComponent(lines.join("\n"));
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = constructWhatsAppMessage();
    const url = `https://wa.me/94775146688?text=${encoded}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div
      style={{
        borderBottom: "1px solid #E6E7E9",
      }}
    >
      <form onSubmit={handleSendWhatsApp}>
        {/* Step 1: Services */}
        <div
          style={{
            padding: "clamp(48px,6vw,80px) clamp(16px,4vw,56px)",
            borderBottom: "1px solid #E6E7E9",
          }}
        >
          <Reveal>
            <div
              style={{
                font: "500 13px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "rgba(17,19,23,.62)",
                marginBottom: "20px",
              }}
            >
              01 — Select services needed
            </div>
            <h3
              style={{
                margin: "0 0 32px 0",
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "clamp(26px,3.5vw,44px)",
                lineHeight: 1.1,
                letterSpacing: "-.02em",
                color: "#111317",
              }}
            >
              What can we shoot <span style={{ fontStyle: "italic" }}>for you?</span>
            </h3>
          </Reveal>

          <Stagger
            stagger={0.04}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {SERVICE_OPTIONS.map((srv) => {
              const active = selectedServices.includes(srv);
              return (
                <StaggerItem key={srv}>
                  <motion.button
                    type="button"
                    onClick={() => toggleService(srv)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      border: active ? "1px solid #111317" : "1px solid #E6E7E9",
                      background: active ? "#111317" : "#FFFFFF",
                      color: active ? "#FFFFFF" : "#111317",
                      borderRadius: "99px",
                      padding: "12px 22px",
                      font: "500 13px/1 'Poppins',sans-serif",
                      letterSpacing: ".01em",
                      textTransform: "lowercase",
                      cursor: "pointer",
                      transition: "all .2s cubic-bezier(0.2,0.7,0.2,1)",
                    }}
                  >
                    {active && <span style={{ marginRight: 6 }}>✓</span>}
                    {srv}
                  </motion.button>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        {/* Step 2: Timeline & Budget Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            borderBottom: "1px solid #E6E7E9",
          }}
        >
          {/* Timeline */}
          <div
            style={{
              padding: "clamp(48px,6vw,80px) clamp(16px,4vw,56px)",
              borderRight: "1px solid #E6E7E9",
            }}
          >
            <Reveal>
              <div
                style={{
                  font: "500 13px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.62)",
                  marginBottom: "20px",
                }}
              >
                02 — Target timeline
              </div>
              <h3
                style={{
                  margin: "0 0 28px 0",
                  fontFamily: "'Bodoni Moda',serif",
                  fontWeight: 500,
                  fontSize: "clamp(22px,2.8vw,36px)",
                  lineHeight: 1.1,
                  letterSpacing: "-.02em",
                  color: "#111317",
                }}
              >
                When do you need <span style={{ fontStyle: "italic" }}>to go live?</span>
              </h3>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {TIMELINE_OPTIONS.map((t) => {
                const active = timeline === t;
                return (
                  <motion.button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    whileHover={{ x: 4 }}
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      borderRadius: "6px",
                      border: active ? "1px solid #111317" : "1px solid #E6E7E9",
                      background: active ? "rgba(17,19,23,.04)" : "#FFFFFF",
                      color: "#111317",
                      font: "500 13px/1.2 'Poppins',sans-serif",
                      cursor: "pointer",
                      transition: "border .2s",
                    }}
                  >
                    <span>{t}</span>
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: 99,
                        border: active ? "5px solid #111317" : "1px solid #C4C4C4",
                        transition: "all .2s",
                      }}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Budget */}
          <div
            style={{
              padding: "clamp(48px,6vw,80px) clamp(16px,4vw,56px)",
            }}
          >
            <Reveal>
              <div
                style={{
                  font: "500 13px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.62)",
                  marginBottom: "20px",
                }}
              >
                03 — Scope / Budget
              </div>
              <h3
                style={{
                  margin: "0 0 28px 0",
                  fontFamily: "'Bodoni Moda',serif",
                  fontWeight: 500,
                  fontSize: "clamp(22px,2.8vw,36px)",
                  lineHeight: 1.1,
                  letterSpacing: "-.02em",
                  color: "#111317",
                }}
              >
                Project scale <span style={{ fontStyle: "italic" }}>and investment.</span>
              </h3>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {BUDGET_OPTIONS.map((b) => {
                const active = budget === b;
                return (
                  <motion.button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    whileHover={{ x: 4 }}
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      borderRadius: "6px",
                      border: active ? "1px solid #111317" : "1px solid #E6E7E9",
                      background: active ? "rgba(17,19,23,.04)" : "#FFFFFF",
                      color: "#111317",
                      font: "500 13px/1.2 'Poppins',sans-serif",
                      cursor: "pointer",
                      transition: "border .2s",
                    }}
                  >
                    <span>{b}</span>
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: 99,
                        border: active ? "5px solid #111317" : "1px solid #C4C4C4",
                        transition: "all .2s",
                      }}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step 3: Client Details & Brief */}
        <div
          style={{
            padding: "clamp(48px,6vw,80px) clamp(16px,4vw,56px)",
          }}
        >
          <Reveal>
            <div
              style={{
                font: "500 13px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "rgba(17,19,23,.62)",
                marginBottom: "20px",
              }}
            >
              04 — Contact & project details
            </div>
            <h3
              style={{
                margin: "0 0 36px 0",
                fontFamily: "'Bodoni Moda',serif",
                fontWeight: 500,
                fontSize: "clamp(26px,3.5vw,44px)",
                lineHeight: 1.1,
                letterSpacing: "-.02em",
                color: "#111317",
              }}
            >
              Tell us what <span style={{ fontStyle: "italic" }}>you sell.</span>
            </h3>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  font: "500 12px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.7)",
                  marginBottom: "8px",
                }}
              >
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Johnathan Silva"
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "4px",
                  border: "1px solid #E6E7E9",
                  font: "400 14px/1.4 'Poppins',sans-serif",
                  color: "#111317",
                  outline: "none",
                  background: "#FAFAFA",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#111317")}
                onBlur={(e) => (e.target.style.borderColor = "#E6E7E9")}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  font: "500 12px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.7)",
                  marginBottom: "8px",
                }}
              >
                Brand / Business Name *
              </label>
              <input
                type="text"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. Villa Mirissa / Aura Restaurant"
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "4px",
                  border: "1px solid #E6E7E9",
                  font: "400 14px/1.4 'Poppins',sans-serif",
                  color: "#111317",
                  outline: "none",
                  background: "#FAFAFA",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#111317")}
                onBlur={(e) => (e.target.style.borderColor = "#E6E7E9")}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  font: "500 12px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.7)",
                  marginBottom: "8px",
                }}
              >
                WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+94 77 123 4567"
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "4px",
                  border: "1px solid #E6E7E9",
                  font: "400 14px/1.4 'Poppins',sans-serif",
                  color: "#111317",
                  outline: "none",
                  background: "#FAFAFA",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#111317")}
                onBlur={(e) => (e.target.style.borderColor = "#E6E7E9")}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  font: "500 12px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.7)",
                  marginBottom: "8px",
                }}
              >
                Instagram Handle / Website
              </label>
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="@yourbrand / brand.com"
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "4px",
                  border: "1px solid #E6E7E9",
                  font: "400 14px/1.4 'Poppins',sans-serif",
                  color: "#111317",
                  outline: "none",
                  background: "#FAFAFA",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#111317")}
                onBlur={(e) => (e.target.style.borderColor = "#E6E7E9")}
              />
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <label
              style={{
                display: "block",
                font: "500 12px/1 'Poppins',sans-serif",
                letterSpacing: ".01em",
                textTransform: "lowercase",
                color: "rgba(17,19,23,.7)",
                marginBottom: "8px",
              }}
            >
              Project Vision / Brief & Goals
            </label>
            <textarea
              rows={4}
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              placeholder="Tell us what you sell, what aesthetic you want to capture, or paste links to reels you love..."
              style={{
                width: "100%",
                padding: "18px 20px",
                borderRadius: "4px",
                border: "1px solid #E6E7E9",
                font: "400 14px/1.6 'Poppins',sans-serif",
                color: "#111317",
                outline: "none",
                background: "#FAFAFA",
                resize: "vertical",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#111317")}
              onBlur={(e) => (e.target.style.borderColor = "#E6E7E9")}
            />
          </div>

          {/* Action Row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                data-pulse="1"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 99,
                  background: "#0D3B3A",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  font: "500 12px/1.4 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  color: "rgba(17,19,23,.62)",
                }}
              >
                NDA reaches you within 48 hours · Direct founder contact
              </span>
            </div>

            <Magnetic strength={0.3}>
              <motion.button
                type="submit"
                className="btn-whatsapp-hero"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "#111317",
                  color: "#FFFFFF",
                  borderRadius: "99px",
                  padding: "18px 36px",
                  font: "600 13px/1 'Poppins',sans-serif",
                  letterSpacing: ".01em",
                  textTransform: "lowercase",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span>Send via WhatsApp</span>
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
              </motion.button>
            </Magnetic>
          </div>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  background: "rgba(13, 59, 58, 0.08)",
                  borderRadius: "4px",
                  font: "500 13px/1.4 'Poppins',sans-serif",
                  color: "#0D3B3A",
                }}
              >
                ✓ WhatsApp tab opened with your project brief! If it did not open automatically, message us directly at +94 77 514 6688.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
