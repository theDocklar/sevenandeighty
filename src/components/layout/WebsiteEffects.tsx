"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal controller, mirroring the original DCLogic IntersectionObserver.
 * Marquee, pulse and float animations are handled in CSS (globals.css).
 */
export function WebsiteEffects() {
  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          if (!reduce) {
            e.target.animate(
              [
                { opacity: 0, transform: "translateY(20px)" },
                { opacity: 1, transform: "none" },
              ],
              {
                duration: 900,
                easing: "cubic-bezier(.2,.7,.2,1)",
                fill: "backwards",
              }
            );
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
