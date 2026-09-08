import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', "system-ui", "sans-serif"],
        heading: ['"Archivo"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        base: "#081220",
        "base-2": "#0F1D30",
        gold: {
          DEFAULT: "#F59E0B",
          dark: "#B45309",
          light: "#FDE68A",
          glow: "rgba(245, 158, 11, 0.18)",
        },
        acc: {
          DEFAULT: "#0284C7",
          light: "#38BDF8",
          dark: "#0369A1",
        },
        whatsapp: "#22C55E",
        light: "#F8FAFC",
        surface: "#FFFFFF",
        ink: "#0F172A",
        "muted-dark": "#64748B",
        "line-light": "#E2E8F0",
      },
      borderRadius: {
        lg: "14px",
        md: "10px",
        sm: "6px",
      },
    },
  },
  plugins: [],
} satisfies Config;
