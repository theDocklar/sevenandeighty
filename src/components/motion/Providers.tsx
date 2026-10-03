"use client";

import React, { useEffect } from "react";
import { MotionConfig } from "motion/react";
import Lenis from "lenis";

const HEADER_OFFSET = 76;

/** Smooth (inertial) scrolling + smooth anchor navigation. */
function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href") || "";
      e.preventDefault();
      if (hash === "#top" || hash === "#") {
        lenis.scrollTo(0);
      } else {
        const el = document.querySelector<HTMLElement>(hash);
        if (!el) return;
        lenis.scrollTo(el, { offset: -HEADER_OFFSET + 1 });
      }
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
}

export function Providers({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
