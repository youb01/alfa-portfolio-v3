import { motion } from "framer-motion";

export type SpaceIntensity = "subtle" | "medium" | "prominent";

interface SpaceBackgroundProps {
  /**
   * Intensity level of the space effect
   * - subtle: Light particles, minimal glows (e.g., Hero section)
   * - medium: Moderate particles and glows (default)
   * - prominent: More visible effects (e.g., About section)
   */
  intensity?: SpaceIntensity;
  
  /**
   * Number of floating particles
   */
  particleCount?: number;
  
  /**
   * Show gradient glow effects
   */
  showGlows?: boolean;
  
  /**
   * Show orbital animated elements
   */
  showOrbits?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const SpaceBackground = ({
  intensity = "medium",
  particleCount = 8,
  showGlows = true,
  showOrbits = true,
  className = "",
}: SpaceBackgroundProps) => {
  // Opacity multipliers based on intensity
  const intensityConfig = {
    subtle: { particle: 0.15, glow: 0.02, line: 0.01, corner: 0.08 },
    medium: { particle: 0.25, glow: 0.04, line: 0.015, corner: 0.12 },
    prominent: { particle: 0.35, glow: 0.06, line: 0.02, corner: 0.15 },
  };

  const config = intensityConfig[intensity];

  // Particle positions - distributed across the viewport
  const particlePositions = [
    { left: "10%", top: "15%" },
    { left: "85%", top: "20%" },
    { left: "15%", top: "70%" },
    { left: "90%", top: "75%" },
    { left: "25%", top: "40%" },
    { left: "75%", top: "45%" },
    { left: "50%", top: "25%" },
    { left: "60%", top: "80%" },
    { left: "5%", top: "50%" },
    { left: "95%", top: "55%" },
    { left: "30%", top: "10%" },
    { left: "70%", top: "90%" },
  ];

  return (
    <div className={`absolute inset-0 overflow-visible pointer-events-none ${className}`}>
      {/* Gradient glows */}
      {showGlows && (
        <>
          {/* Top corner glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: config.glow, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[rgb(var(--text-primary))] rounded-full blur-3xl"
            style={{ willChange: "opacity, transform" }}
          />

          {/* Bottom corner glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: config.glow * 0.75, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-[rgb(var(--text-primary))] rounded-full blur-3xl"
            style={{ willChange: "opacity, transform" }}
          />

          {/* Center subtle glow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: config.glow * 0.5 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-[rgb(var(--text-primary))] to-transparent rounded-full blur-3xl"
            style={{ willChange: "opacity" }}
          />
        </>
      )}

      {/* Floating particles */}
      {[...Array(Math.min(particleCount, particlePositions.length))].map((_, i) => {
        const position = particlePositions[i];
        const animationDuration = 3 + (i % 3);
        const animationDelay = i * 0.2;

        return (
          <motion.div
            key={`particle-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: config.particle, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.8 + animationDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: position.left,
              top: position.top,
              willChange: "opacity, transform",
            }}
          >
            {/* Particle core */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [config.particle, config.particle * 1.8, config.particle],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: animationDelay,
              }}
              className="w-full h-full bg-[rgb(var(--text-secondary))] rounded-full"
              style={{
                boxShadow: `0 0 8px rgb(var(--text-secondary) / ${config.particle * 0.6})`,
              }}
            >
              {/* Inner glow */}
              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [config.particle * 0.6, config.particle * 1.4, config.particle * 0.6],
                }}
                transition={{
                  duration: animationDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: animationDelay + 0.5,
                }}
                className="w-full h-full bg-[rgb(var(--text-secondary))] rounded-full blur-sm"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Orbital rings */}
      {showOrbits && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: config.corner, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="absolute top-8 left-8 md:top-12 md:left-12"
            style={{ willChange: "opacity, transform" }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 border border-[rgb(var(--border-primary))] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: config.corner, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
            style={{ willChange: "opacity, transform" }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 border border-[rgb(var(--border-primary))] rounded-full" />
          </motion.div>
        </>
      )}

      {/* Decorative animated lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: config.line }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="10%"
          y1="20%"
          x2="90%"
          y2="80%"
          stroke="rgb(var(--text-tertiary))"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        <motion.line
          x1="90%"
          y1="20%"
          x2="10%"
          y2="80%"
          stroke="rgb(var(--text-tertiary))"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </svg>

      {/* Bottom fade for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[rgb(var(--bg-primary))] z-[2] pointer-events-none" />
    </div>
  );
};
