"use client";

import { useEffect, useRef } from "react";

export function WebsiteEffects() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const anims: Animation[] = [];
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motion = !reduce;

    if (motion) {
      // Pulse animations
      document.querySelectorAll("[data-pulse]").forEach((el) => {
        anims.push(
          el.animate(
            [{ opacity: 1 }, { opacity: 0.2 }, { opacity: 1 }],
            { duration: 1800, iterations: Infinity }
          )
        );
      });

      // Float animations for hero preview cards
      document.querySelectorAll("[data-float]").forEach((el, i) => {
        anims.push(
          el.animate(
            [
              { transform: "translateY(0)" },
              { transform: "translateY(-10px)" },
              { transform: "translateY(0)" },
            ],
            {
              duration: 6000 + i * 900,
              delay: i * 500,
              iterations: Infinity,
              easing: "ease-in-out",
            }
          )
        );
      });

      // Marquee animation
      document.querySelectorAll("[data-marquee]").forEach((el) => {
        anims.push(
          el.animate(
            [
              { transform: "translateX(0)" },
              { transform: "translateX(-50%)" },
            ],
            { duration: 40000, iterations: Infinity }
          )
        );
      });
    }

    // IntersectionObserver scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          if (motion) {
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

    return () => {
      anims.forEach((a) => a.cancel());
      io.disconnect();
    };
  }, []);

  return null;
}
