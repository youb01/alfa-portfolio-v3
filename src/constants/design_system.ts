/**
 * Design System Constants
 * Centralized design tokens for purple/blue accent colors and glassmorphism effects
 */

export const ACCENT_COLORS = {
  purple: {
    primary: "rgb(139, 92, 246)", // #8B5CF6
    secondary: "rgb(167, 139, 250)", // #A78BFA
    primaryRgba: (alpha: number) => `rgba(139, 92, 246, ${alpha})`,
    secondaryRgba: (alpha: number) => `rgba(167, 139, 250, ${alpha})`,
  },
  blue: {
    primary: "rgb(59, 130, 246)", // #3B82F6
    secondary: "rgb(96, 165, 250)", // #60A5FA
    primaryRgba: (alpha: number) => `rgba(59, 130, 246, ${alpha})`,
    secondaryRgba: (alpha: number) => `rgba(96, 165, 250, ${alpha})`,
  },
  gradient: {
    purpleToBlue: "linear-gradient(135deg, rgb(139, 92, 246), rgb(59, 130, 246))",
    purpleToBlueSoft: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
    purpleToBlueGlow: (alpha: number = 0.2) => 
      `linear-gradient(135deg, rgba(139, 92, 246, ${alpha}), rgba(59, 130, 246, ${alpha}))`,
  },
} as const;

export const GLASSMORPHISM = {
  light: {
    background: "rgba(255, 255, 255, 0.7)",
    backgroundMedium: "rgba(255, 255, 255, 0.8)",
    backgroundHeavy: "rgba(255, 255, 255, 0.85)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderMedium: "1px solid rgba(255, 255, 255, 0.15)",
    borderHeavy: "1px solid rgba(255, 255, 255, 0.2)",
    blur: "blur(12px)",
    blurMedium: "blur(16px)",
    blurHeavy: "blur(20px)",
    saturate: "saturate(150%)",
  },
  dark: {
    background: "rgba(15, 17, 20, 0.7)",
    backgroundMedium: "rgba(15, 17, 20, 0.8)",
    backgroundHeavy: "rgba(15, 17, 20, 0.85)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderMedium: "1px solid rgba(255, 255, 255, 0.15)",
    borderHeavy: "1px solid rgba(255, 255, 255, 0.2)",
    blur: "blur(12px)",
    blurMedium: "blur(16px)",
    blurHeavy: "blur(20px)",
    saturate: "saturate(150%)",
  },
} as const;

export const DEPTH_SHADOWS = {
  level1: {
    base: "0 2px 4px rgba(0, 0, 0, 0.05)",
    accent: "0 0 0 1px rgba(139, 92, 246, 0.05)",
    combined: "0 2px 4px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(139, 92, 246, 0.05)",
  },
  level2: {
    base: "0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    accent: "0 0 0 1px rgba(139, 92, 246, 0.08)",
    combined: "0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(139, 92, 246, 0.08)",
  },
  level3: {
    base: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)",
    accent: "0 0 0 1px rgba(59, 130, 246, 0.1)",
    combined: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.1)",
  },
} as const;

export const GLOW_EFFECTS = {
  purple: "0 0 20px rgba(139, 92, 246, 0.3)",
  blue: "0 0 20px rgba(59, 130, 246, 0.3)",
  accent: "0 0 20px rgba(139, 92, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.15)",
  purpleSoft: "0 0 30px rgba(139, 92, 246, 0.15)",
  blueSoft: "0 0 30px rgba(59, 130, 246, 0.15)",
} as const;

export const ANIMATION_TIMINGS = {
  fast: 0.3,
  medium: 0.6,
  slow: 0.8,
  custom: [0.22, 1, 0.36, 1] as [number, number, number, number],
} as const;

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;
