import { motion } from "framer-motion";

interface BackgroundDecorationsProps {
  dotsCount?: number;
}

export const BackgroundDecorations = ({
  dotsCount = 8,
}: BackgroundDecorationsProps) => {
  return (
    <div className="absolute inset-0 overflow-visible pointer-events-none">
      {/* Gradient fade overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[rgb(var(--bg-primary)/0.5)] to-[rgb(var(--bg-primary))] z-[2]" />

      {/* Top left corner decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[rgb(var(--text-primary))] rounded-full blur-3xl"
      />

      {/* Bottom right corner decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-[rgb(var(--text-primary))] rounded-full blur-3xl"
      />

      {/* Center subtle glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-[rgb(var(--text-primary))] to-transparent rounded-full blur-3xl"
      />

      {/* Enhanced floating particles */}
      {[...Array(dotsCount)].map((_, i) => {
        const positions = [
          { left: "10%", top: "15%" },
          { left: "85%", top: "20%" },
          { left: "15%", top: "70%" },
          { left: "90%", top: "75%" },
          { left: "25%", top: "40%" },
          { left: "75%", top: "45%" },
          { left: "50%", top: "25%" },
          { left: "60%", top: "80%" },
        ];

        const position = positions[i % positions.length];

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.25, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.8 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: position.left,
              top: position.top,
            }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.25, 0.45, 0.25],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="w-full h-full bg-[rgb(var(--text-secondary))] rounded-full"
              style={{
                boxShadow: "0 0 8px rgb(var(--text-secondary) / 0.3)",
              }}
            >
              {/* Inner glow */}
              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[rgb(var(--text-primary))] rounded-full blur-md"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Animated decorative lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.015]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="0"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="rgb(var(--border-hover))"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        <motion.line
          x1="0"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="rgb(var(--border-hover))"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </svg>

      {/* Corner accents with smooth animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 0.12, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute top-8 left-8 md:top-12 md:left-12"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 border-l-2 border-t-2 border-[rgb(var(--border-hover))] rounded-tl-lg" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        whileInView={{ opacity: 0.12, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 border-r-2 border-b-2 border-[rgb(var(--border-hover))] rounded-br-lg" />
      </motion.div>
    </div>
  );
};
