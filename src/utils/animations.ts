/**
 * Shared animation constants and configurations
 * Used across the application for consistent animation behavior
 */

// Easing functions for smooth animations
export const easings = {
  // Standard easing
  easeInOut: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
  
  // Custom smooth easing for organic feel
  smooth: [0.22, 1, 0.36, 1] as const,
  
  // Spring-like easing for bouncy effects
  spring: [0.34, 1.56, 0.64, 1] as const,
  
  // Sharp easing for quick transitions
  sharp: [0.4, 0, 0.6, 1] as const,
} as const;

// Standard animation durations
export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  slower: 1.2,
  slowest: 1.5,
} as const;

// Common animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// Stagger configuration for list animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Viewport configuration for scroll-triggered animations
export const viewportConfig = {
  once: true,
  margin: "-100px",
  amount: 0.3 as const,
};
