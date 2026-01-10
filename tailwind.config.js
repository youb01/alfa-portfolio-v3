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
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-shimmer": "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
