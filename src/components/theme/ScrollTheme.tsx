"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type HTMLMotionProps,
  type MotionValue,
} from "motion/react";
import { EASE_OUT_EXPO } from "@/components/motion/primitives";

/* -------------------------------------------------------------------------- */
/*  Theme Tokens & Palettes                                                   */
/* -------------------------------------------------------------------------- */

export type ThemeName = "light" | "dark";

export type TokenKey =
  | "--site-bg"
  | "--site-fg"
  | "--site-muted"
  | "--site-border"
  | "--site-accent"
  | "--site-surface"
  | "--st-bg"
  | "--st-fg"
  | "--st-muted"
  | "--st-border"
  | "--st-accent"
  | "--st-surface";

const CORE_TOKENS = [
  "bg",
  "fg",
  "muted",
  "border",
  "accent",
  "surface",
] as const;

export const THEMES: Record<ThemeName, Record<string, string>> = {
  light: {
    "--site-bg": "rgba(255, 255, 255, 1)",
    "--site-fg": "rgba(17, 19, 23, 1)",
    "--site-muted": "rgba(17, 19, 23, 0.62)",
    "--site-border": "rgba(230, 231, 233, 1)",
    "--site-accent": "rgba(13, 59, 58, 1)",
    "--site-surface": "rgba(244, 244, 245, 1)",
    "--st-bg": "rgba(255, 255, 255, 1)",
    "--st-fg": "rgba(17, 19, 23, 1)",
    "--st-muted": "rgba(17, 19, 23, 0.62)",
    "--st-border": "rgba(230, 231, 233, 1)",
    "--st-accent": "rgba(13, 59, 58, 1)",
    "--st-surface": "rgba(244, 244, 245, 1)",
  },
  dark: {
    "--site-bg": "rgba(17, 19, 23, 1)",
    "--site-fg": "rgba(244, 244, 245, 1)",
    "--site-muted": "rgba(244, 244, 245, 0.6)",
    "--site-border": "rgba(255, 255, 255, 0.12)",
    "--site-accent": "rgba(74, 222, 128, 1)",
    "--site-surface": "rgba(28, 31, 37, 1)",
    "--st-bg": "rgba(17, 19, 23, 1)",
    "--st-fg": "rgba(244, 244, 245, 1)",
    "--st-muted": "rgba(244, 244, 245, 0.6)",
    "--st-border": "rgba(255, 255, 255, 0.12)",
    "--st-accent": "rgba(74, 222, 128, 1)",
    "--st-surface": "rgba(28, 31, 37, 1)",
  },
};

const META_COLOR: Record<ThemeName, string> = {
  light: "#FFFFFF",
  dark: "#111317",
};

const TRANSITION = { duration: 0.75, ease: EASE_OUT_EXPO };

/* -------------------------------------------------------------------------- */
/*  Context                                                                   */
/* -------------------------------------------------------------------------- */

export type ActiveSection = { id: string; theme: ThemeName; label?: string };

type ScrollThemeContextValue = {
  theme: ThemeName;
  activeId: string | null;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
  setActive: (section: ActiveSection) => void;
};

const ScrollThemeContext = createContext<ScrollThemeContextValue | null>(null);

const defaultContext: ScrollThemeContextValue = {
  theme: "light",
  activeId: null,
  setTheme: () => {},
  toggleTheme: () => {},
  setActive: () => {},
};

export function useScrollTheme() {
  const ctx = useContext(ScrollThemeContext);
  return ctx || defaultContext;
}

/* -------------------------------------------------------------------------- */
/*  Provider                                                                  */
/* -------------------------------------------------------------------------- */

export function ScrollThemeProvider({
  initialTheme = "light",
  children,
  style,
  ...rest
}: Omit<HTMLMotionProps<"div">, "children"> & {
  initialTheme?: ThemeName;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const [theme, setThemeState] = useState<ThemeName>(initialTheme);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Motion values for site tokens
  const bg = useMotionValue(THEMES[initialTheme]["--site-bg"]);
  const fg = useMotionValue(THEMES[initialTheme]["--site-fg"]);
  const muted = useMotionValue(THEMES[initialTheme]["--site-muted"]);
  const border = useMotionValue(THEMES[initialTheme]["--site-border"]);
  const accent = useMotionValue(THEMES[initialTheme]["--site-accent"]);
  const surface = useMotionValue(THEMES[initialTheme]["--site-surface"]);

  const values = useMemo<Record<string, MotionValue<string>>>(
    () => ({
      "--site-bg": bg,
      "--site-fg": fg,
      "--site-muted": muted,
      "--site-border": border,
      "--site-accent": accent,
      "--site-surface": surface,
      "--st-bg": bg,
      "--st-fg": fg,
      "--st-muted": muted,
      "--st-border": border,
      "--st-accent": accent,
      "--st-surface": surface,
    }),
    [bg, fg, muted, border, accent, surface]
  );

  const setTheme = useCallback((nextTheme: ThemeName) => {
    setThemeState((prev) => (prev !== nextTheme ? nextTheme : prev));
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const setActive = useCallback((section: ActiveSection) => {
    setActiveId(section.id);
    setThemeState(section.theme);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  // Animate CSS variables when theme changes
  useEffect(() => {
    const target = THEMES[theme];
    const controls = CORE_TOKENS.flatMap((key) => {
      const siteVal = values[`--site-${key}`];
      const targetVal = target[`--site-${key}`];
      if (reduceMotion) {
        siteVal.jump(targetVal);
        if (containerRef.current) {
          containerRef.current.style.setProperty(`--site-${key}`, targetVal);
          containerRef.current.style.setProperty(`--st-${key}`, targetVal);
        }
        return [];
      }
      return [
        animate(siteVal, targetVal, {
          ...TRANSITION,
          onUpdate: (latest) => {
            if (containerRef.current) {
              containerRef.current.style.setProperty(`--site-${key}`, latest);
              containerRef.current.style.setProperty(`--st-${key}`, latest);
            }
          },
        }),
      ];
    });

    // Update root dataset and mobile theme-color
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-active-theme", theme);
      document.body.setAttribute("data-active-theme", theme);
      document.documentElement.style.colorScheme = theme;

      const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
      if (meta) meta.content = META_COLOR[theme];
    }

    return () => controls.forEach((c) => c?.stop());
  }, [theme, reduceMotion, values]);

  // Robust real-time scroll spy: checks which trigger element is crossing focal point
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number | null = null;

    const evaluateScrollTheme = () => {
      const triggers = Array.from(
        document.querySelectorAll<HTMLElement>(
          "[data-theme-trigger], [data-theme]"
        )
      );

      if (triggers.length === 0) return;

      const focalY = window.innerHeight * 0.45;

      // At top edge of the page
      if (window.scrollY < 50) {
        const first = triggers[0];
        const t = (first.dataset.themeTrigger || first.dataset.theme) as ThemeName;
        if (t) {
          setTheme(t);
          setActiveId(first.id || first.dataset.themeId || null);
        }
        return;
      }

      // Check which section intersects focal point
      for (const el of triggers) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= focalY && rect.bottom > focalY) {
          const t = (el.dataset.themeTrigger || el.dataset.theme) as ThemeName;
          if (t) {
            setTheme(t);
            setActiveId(el.id || el.dataset.themeId || null);
          }
          return;
        }
      }
    };

    const onScrollOrResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(evaluateScrollTheme);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    // Initial check on mount
    evaluateScrollTheme();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [setTheme]);

  const ctx = useMemo(
    () => ({ theme, activeId, setTheme, toggleTheme, setActive }),
    [theme, activeId, setTheme, toggleTheme, setActive]
  );

  return (
    <ScrollThemeContext.Provider value={ctx}>
      <motion.div
        ref={containerRef}
        data-active-theme={theme}
        {...rest}
        style={{
          ...values,
          background: "var(--site-bg)",
          color: "var(--site-fg)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          ...style,
        }}
      >
        {children}
      </motion.div>
    </ScrollThemeContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section Trigger                                                           */
/* -------------------------------------------------------------------------- */

export function ThemeSection({
  id,
  theme,
  label,
  children,
  style,
  as: Component = "div",
  ...rest
}: {
  id?: string;
  theme: ThemeName;
  label?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Component
      id={id}
      data-theme={theme}
      data-theme-trigger={theme}
      data-theme-id={id}
      data-theme-label={label}
      style={{
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
