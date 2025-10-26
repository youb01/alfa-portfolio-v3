export const designSystem = {
  colors: {
    light: {
      // Backgrounds
      background: {
        primary: "#FFFFFF",
        secondary: "#F9FAFB",
        tertiary: "#F3F4F6",
        elevated: "#FFFFFF",
      },
      // Text colors
      text: {
        primary: "#111827",
        secondary: "#4B5563",
        tertiary: "#6B7280",
        disabled: "#9CA3AF",
        inverse: "#FFFFFF",
      },
      // Borders
      border: {
        primary: "#E5E7EB",
        secondary: "#D1D5DB",
        hover: "#9CA3AF",
      },
      // Interactive states
      interactive: {
        default: "#111827",
        hover: "#374151",
        active: "#1F2937",
      },
    },
    dark: {
      // Backgrounds
      background: {
        primary: "#0F1419",
        secondary: "#1A1F2E",
        tertiary: "#252B3D",
        elevated: "#2D3548",
      },
      // Text colors
      text: {
        primary: "#FFFFFF",
        secondary: "#D1D5DB",
        tertiary: "#9CA3AF",
        disabled: "#6B7280",
        inverse: "#111827",
      },
      // Borders
      border: {
        primary: "#374151",
        secondary: "#4B5563",
        hover: "#6B7280",
      },
      // Interactive states
      interactive: {
        default: "#FFFFFF",
        hover: "#E5E7EB",
        active: "#D1D5DB",
      },
    },
  },

  // Typography system
  typography: {
    fontFamily: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
      "8xl": "6rem", // 96px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
      mega: "0.3em",
    },
  },

  // Spacing scale (used for padding, margin, gap, etc.)
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
  },

  // Border radius scale
  borderRadius: {
    none: "0",
    sm: "0.25rem", // 4px
    base: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Shadow scale
  shadows: {
    none: "none",
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  },

  // Animation & Transition system
  transitions: {
    duration: {
      fast: "150ms",
      base: "300ms",
      slow: "500ms",
      slower: "700ms",
    },
    timing: {
      linear: "linear",
      ease: "ease",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Z-index scale for layering
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    notification: 1080,
  },
} as const;

export type ColorMode = "light" | "dark";
export type ColorToken = keyof typeof designSystem.colors.light;
export type SpacingToken = keyof typeof designSystem.spacing;
export type FontSizeToken = keyof typeof designSystem.typography.fontSize;
export type FontWeightToken = keyof typeof designSystem.typography.fontWeight;
