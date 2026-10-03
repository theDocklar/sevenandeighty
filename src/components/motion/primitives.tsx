"use client";

import React, { useRef } from "react";
import {
  motion,
  useSpring,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";

/** Original site easing + a softer "expo out" for larger moves. */
export const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE_OUT_EXPO },
  },
};

type DivProps = HTMLMotionProps<"div">;

/** Fades + lifts + un-blurs its content the first time it scrolls into view. */
export function Reveal({
  delay = 0,
  amount = 0.25,
  y = 28,
  children,
  ...rest
}: DivProps & { delay?: number; amount?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1, ease: EASE_OUT_EXPO, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its <StaggerItem> children into view. */
export function Stagger({
  stagger = 0.08,
  delay = 0,
  amount = 0.15,
  children,
  ...rest
}: DivProps & { stagger?: number; delay?: number; amount?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...rest }: DivProps) {
  return (
    <motion.div variants={fadeUp} {...rest}>
      {children}
    </motion.div>
  );
}

const wordVariants: Variants = {
  hidden: { y: "110%", rotate: 4 },
  show: {
    y: "0%",
    rotate: 0,
    transition: { duration: 1.1, ease: EASE_OUT_EXPO },
  },
};

export type HeadingPart = { text: string; italic?: boolean };

/** Headline that slides each word up out of a mask, word by word. */
export function SplitHeading({
  as = "h2",
  parts,
  style,
  delay = 0,
  stagger = 0.06,
}: {
  as?: "h1" | "h2";
  parts: HeadingPart[];
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
}) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const label = parts.map((p) => p.text).join(" ");

  return (
    <Tag
      aria-label={label}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {parts.map((p, pi) => {
        const words = p.text.split(" ").filter(Boolean);
        return (
          <span
            key={pi}
            aria-hidden="true"
            style={p.italic ? { fontStyle: "italic" } : undefined}
          >
            {words.map((w, wi) => (
              <React.Fragment key={wi}>
                <span className="word-mask">
                  <motion.span className="word-inner" variants={wordVariants}>
                    {w}
                  </motion.span>
                </span>
                {wi < words.length - 1 || pi < parts.length - 1 ? " " : null}
              </React.Fragment>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}

/** Gently pulls its child toward the cursor (mouse only). */
export function Magnetic({
  children,
  strength = 0.3,
  style,
}: {
  children: React.ReactNode;
  strength?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const spring = { stiffness: 220, damping: 16, mass: 0.4 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  return (
    <motion.div
      ref={ref}
      style={{ display: "inline-flex", x, y, ...style }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
