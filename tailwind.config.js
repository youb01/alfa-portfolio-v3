import { designSystem } from "./src/styles/designSystem.ts";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary": "rgb(var(--bg-primary) / <alpha-value>)",
        "bg-secondary": "rgb(var(--bg-secondary) / <alpha-value>)",
        "bg-tertiary": "rgb(var(--bg-tertiary) / <alpha-value>)",
        "bg-elevated": "rgb(var(--bg-elevated) / <alpha-value>)",

        "text-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "text-tertiary": "rgb(var(--text-tertiary) / <alpha-value>)",
        "text-disabled": "rgb(var(--text-disabled) / <alpha-value>)",
        "text-inverse": "rgb(var(--text-inverse) / <alpha-value>)",

        "border-primary": "rgb(var(--border-primary) / <alpha-value>)",
        "border-secondary": "rgb(var(--border-secondary) / <alpha-value>)",
        "border-hover": "rgb(var(--border-hover) / <alpha-value>)",

        "interactive-default":
          "rgb(var(--interactive-default) / <alpha-value>)",
        "interactive-hover": "rgb(var(--interactive-hover) / <alpha-value>)",
        "interactive-active": "rgb(var(--interactive-active) / <alpha-value>)",
      },
      fontFamily: {
        sans: designSystem.typography.fontFamily.sans.split(", "),
        serif: ["Lora", "Georgia", "serif"],
        mono: designSystem.typography.fontFamily.mono.split(", "),
      },
      fontSize: designSystem.typography.fontSize,
      fontWeight: designSystem.typography.fontWeight,
      lineHeight: designSystem.typography.lineHeight,
      letterSpacing: designSystem.typography.letterSpacing,
      spacing: designSystem.spacing,
      borderRadius: designSystem.borderRadius,
      boxShadow: {
        ...designSystem.shadows,
        "elevation-low": "0 2px 8px rgb(var(--shadow-color) / 0.08)",
        "elevation-medium": "0 4px 16px rgb(var(--shadow-color) / 0.12)",
        "elevation-high": "0 8px 32px rgb(var(--shadow-color) / 0.16)",
      },
      transitionDuration: designSystem.transitions.duration,
      transitionTimingFunction: designSystem.transitions.timing,
      screens: designSystem.breakpoints,
      zIndex: designSystem.zIndex,
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
  plugins: [],
};
