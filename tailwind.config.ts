import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: {
          DEFAULT: "#111317",
          light: "#2B2E35",
          muted: "#686D76",
        },
        lagoon: {
          DEFAULT: "#0D3B3A",
          dark: "#082524",
          light: "#165856",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8F9FA",
          border: "#E6E7E9",
        }
      },
      fontFamily: {
        serif: ["var(--font-bodoni)", "Didot", "Bodoni 72", "Georgia", "serif"],
        sans: ["var(--font-familjen)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
