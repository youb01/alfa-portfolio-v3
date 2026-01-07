import { motion } from "framer-motion";
import { easings, durations } from "../../../utils/animations";

export type TransitionType = "gradient-fade" | "wave" | "curve";
export type TransitionPosition = "top" | "bottom";

interface SectionTransitionProps {
  /**
   * Type of transition effect
   * - gradient-fade: Smooth gradient overlay
   * - wave: Wavy SVG path animation
   * - curve: Curved SVG overlay
   */
  type?: TransitionType;
  
  /**
   * Position of the transition (top or bottom of section)
   */
  position?: TransitionPosition;
  
  /**
   * Starting color (from section)
   * Use CSS variable format: rgb(var(--bg-primary))
   */
  fromColor?: string;
  
  /**
   * Ending color (to next section)
   * Use CSS variable format: rgb(var(--bg-secondary))
   */
  toColor?: string;
  
  /**
   * Height of the transition in pixels
   */
  height?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const SectionTransition = ({
  type = "gradient-fade",
  position = "bottom",
  fromColor = "rgb(var(--bg-primary))",
  toColor = "rgb(var(--bg-primary))",
  height = 120,
  className = "",
}: SectionTransitionProps) => {
  const isTop = position === "top";
  
  // Gradient fade transition
  if (type === "gradient-fade") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: durations.slow, ease: easings.smooth }}
        viewport={{ once: true }}
        className={`absolute ${isTop ? "top-0" : "bottom-0"} left-0 right-0 pointer-events-none ${className}`}
        style={{
          height: `${height}px`,
          background: isTop
            ? `linear-gradient(to bottom, ${fromColor}, transparent)`
            : `linear-gradient(to bottom, transparent, ${toColor})`,
          willChange: "opacity",
        }}
      />
    );
  }
  
  // Wave transition with animated SVG
  if (type === "wave") {
    return (
      <motion.div
        initial={{ opacity: 0, y: isTop ? -20 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.slower, ease: easings.smooth }}
        viewport={{ once: true }}
        className={`absolute ${isTop ? "top-0" : "bottom-0"} left-0 right-0 w-full pointer-events-none ${className}`}
        style={{
          height: `${height}px`,
          willChange: "opacity, transform",
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{
            transform: isTop ? "scaleY(-1)" : "scaleY(1)",
          }}
        >
          <motion.path
            d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
            fill={toColor}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: durations.slowest, ease: easings.smooth }}
            viewport={{ once: true }}
          />
          {/* Gradient overlay for smooth blending */}
          <defs>
            <linearGradient id={`wave-gradient-${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={toColor} stopOpacity="0" />
              <stop offset="100%" stopColor={toColor} stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            width="1440"
            height="120"
            fill={`url(#wave-gradient-${position})`}
            opacity="0.5"
          />
        </svg>
      </motion.div>
    );
  }
  
  // Curve transition with smooth bezier curves
  if (type === "curve") {
    return (
      <motion.div
        initial={{ opacity: 0, y: isTop ? -20 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.slower, ease: easings.smooth }}
        viewport={{ once: true }}
        className={`absolute ${isTop ? "top-0" : "bottom-0"} left-0 right-0 w-full pointer-events-none ${className}`}
        style={{
          height: `${height}px`,
          willChange: "opacity, transform",
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{
            transform: isTop ? "scaleY(-1)" : "scaleY(1)",
          }}
        >
          {/* Main curve shape */}
          <motion.path
            d="M0,120 L0,40 Q360,0 720,40 T1440,40 L1440,120 Z"
            fill={toColor}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: durations.slow, ease: easings.smooth }}
            viewport={{ once: true }}
          />
          
          {/* Subtle gradient overlay for depth */}
          <defs>
            <linearGradient id={`curve-gradient-${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={fromColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor={toColor} stopOpacity="1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,120 L0,50 Q360,10 720,50 T1440,50 L1440,120 Z"
            fill={`url(#curve-gradient-${position})`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: durations.slower, delay: 0.2, ease: easings.smooth }}
            viewport={{ once: true }}
          />
        </svg>
      </motion.div>
    );
  }
  
  return null;
};
