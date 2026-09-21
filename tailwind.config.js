/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary":   "rgb(var(--bg-primary) / <alpha-value>)",
        "bg-secondary": "rgb(var(--bg-secondary) / <alpha-value>)",
        "bg-tertiary":  "rgb(var(--bg-tertiary) / <alpha-value>)",
        "bg-elevated":  "rgb(var(--bg-elevated) / <alpha-value>)",

        "text-primary":   "rgb(var(--text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "text-tertiary":  "rgb(var(--text-tertiary) / <alpha-value>)",
        "text-disabled":  "rgb(var(--text-disabled) / <alpha-value>)",
        "text-inverse":   "rgb(var(--text-inverse) / <alpha-value>)",

        "border-primary":   "rgb(var(--border-primary) / <alpha-value>)",
        "border-secondary": "rgb(var(--border-secondary) / <alpha-value>)",
        "border-hover":     "rgb(var(--border-hover) / <alpha-value>)",

        "interactive-default": "rgb(var(--interactive-default) / <alpha-value>)",
        "interactive-hover":   "rgb(var(--interactive-hover) / <alpha-value>)",
        "interactive-active":  "rgb(var(--interactive-active) / <alpha-value>)",
      },
      fontFamily: {
        sans:    ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Syne", "-apple-system", "sans-serif"],
        serif:   ["Lora", "Georgia", "serif"],
        mono:    ["JetBrains Mono", "Menlo", "Monaco", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
