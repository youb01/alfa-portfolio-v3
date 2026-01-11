/**
 * Design System Constants
 * Centralized design tokens for the portfolio
 */

// Purple/Blue Accent Color System
export const accentColors = {
  purple: {
    primary: "#8B5CF6", // violet-500
    secondary: "#A78BFA", // violet-400
    dark: "#7C3AED", // violet-600
    light: "#C4B5FD", // violet-300
  },
  blue: {
    primary: "#3B82F6", // blue-500
    secondary: "#60A5FA", // blue-400
    dark: "#2563EB", // blue-600
    light: "#93C5FD", // blue-300
  },
  // Gradient definitions
  gradients: {
    purpleBlue: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
    purpleBlueDiagonal: "linear-gradient(120deg, #8B5CF6 0%, #3B82F6 100%)",
    accentGlow: "radial-gradient(circle, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.05))",
    accentGlowStrong: "radial-gradient(circle, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.1))",
  },
} as const;

// Glassmorphism Effect Constants
export const glassmorphism = {
  // Background alphas for glass effect
  background: {
    light: {
      subtle: "rgba(255, 255, 255, 0.7)",
      medium: "rgba(255, 255, 255, 0.8)",
      strong: "rgba(255, 255, 255, 0.85)",
    },
    dark: {
      subtle: "rgba(15, 20, 25, 0.05)",
      medium: "rgba(15, 20, 25, 0.08)",
      strong: "rgba(15, 20, 25, 0.12)",
    },
  },
  // Backdrop filter values
  blur: {
    subtle: "blur(8px) saturate(130%)",
    medium: "blur(12px) saturate(150%)",
    strong: "blur(16px) saturate(180%)",
  },
  // Border styles with purple/blue tints
  border: {
    light: {
      default: "1px solid rgba(139, 92, 246, 0.1)",
      hover: "1px solid rgba(139, 92, 246, 0.2)",
      gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))",
    },
    dark: {
      default: "1px solid rgba(139, 92, 246, 0.15)",
      hover: "1px solid rgba(139, 92, 246, 0.25)",
      gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.4))",
    },
  },
} as const;

// Depth/Elevation System with Purple/Blue Tints
export const depth = {
  // Level 1: Subtle shadow, minimal blur, slight purple tint
  level1: {
    light: "0 2px 8px rgba(139, 92, 246, 0.08), 0 1px 4px rgba(59, 130, 246, 0.06)",
    dark: "0 2px 8px rgba(139, 92, 246, 0.15), 0 1px 4px rgba(59, 130, 246, 0.1)",
  },
  // Level 2: Medium shadow, 12px blur, visible purple/blue tint
  level2: {
    light: "0 8px 32px rgba(139, 92, 246, 0.12), 0 4px 16px rgba(59, 130, 246, 0.08), 0 0 0 1px rgba(139, 92, 246, 0.05)",
    dark: "0 8px 32px rgba(139, 92, 246, 0.25), 0 4px 16px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.1)",
  },
  // Level 3: Deep shadow, 20px blur, strong purple/blue glow
  level3: {
    light: "0 16px 48px rgba(139, 92, 246, 0.15), 0 8px 24px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(139, 92, 246, 0.08)",
    dark: "0 16px 48px rgba(139, 92, 246, 0.35), 0 8px 24px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.15)",
  },
  // Hover states with enhanced glow
  hover: {
    light: "0 20px 60px rgba(139, 92, 246, 0.2), 0 12px 32px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.1)",
    dark: "0 20px 60px rgba(139, 92, 246, 0.4), 0 12px 32px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.2)",
  },
} as const;

// Animation & Transition Constants
export const animations = {
  duration: {
    fast: "0.2s",
    base: "0.4s",
    slow: "0.6s",
    slower: "0.8s",
  },
  easing: {
    smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  },
  // Framer Motion variants
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
    imageReveal: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
  },
} as const;

// Export type definitions
export type AccentColor = typeof accentColors;
export type GlassmorphismEffect = typeof glassmorphism;
export type DepthLevel = typeof depth;
export type AnimationConfig = typeof animations;
