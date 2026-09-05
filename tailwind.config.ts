import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        surface: {
          DEFAULT: "#121414",
          dim: "#121414",
          bright: "#383939",
          lowest: "#0D0E0F",
          low: "#1B1C1C",
          container: "#1F2020",
          high: "#292A2A",
          highest: "#343535",
        },
        "on-surface": {
          DEFAULT: "#E3E2E2",
          variant: "#C4C7C7",
          muted: "#888888",
        },
        primary: {
          DEFAULT: "#F5F5F5",
          container: "#0F0F0F",
          dim: "#C8C6C5",
        },
        secondary: {
          DEFAULT: "#C6C6C7",
          container: "#454747",
        },
        tertiary: {
          DEFAULT: "#E2FF31", // Acid Lime
          fixed: "#D4F01C",
          dim: "#B9D300",
        },
        "acid-lime": "#E2FF31",
        outline: {
          DEFAULT: "#8E9192",
          variant: "#444748",
          technical: "rgba(136, 136, 136, 0.2)",
        },
      },
      fontFamily: {
        serif: ["var(--font-ibm-plex-serif)", "IBM Plex Serif", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      spacing: {
        "gutter": "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar": "radar 4s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        radar: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
