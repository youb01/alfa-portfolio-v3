import { motion } from "framer-motion";

export type AnimKey = "future" | "active" | "past";

interface TimelineDotProps {
  animKey: AnimKey;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const TimelineDot = ({ animKey }: TimelineDotProps) => {
  const isActive = animKey === "active";
  const isPast   = animKey === "past";

  return (
    <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
      {/* Outer glow ring — active only */}
      {isActive && (
        <motion.div
          aria-hidden
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: "-8px",
            border: "1px solid rgb(var(--text-primary))",
          }}
          animate={{ scale: [1, 1.7, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: isActive
            ? "rgb(var(--text-primary))"
            : isPast
            ? "rgb(var(--border-secondary))"
            : "rgb(var(--border-primary))",
          opacity: isActive ? 0.6 : isPast ? 0.35 : 0.2,
        }}
        transition={{ duration: 0.4, ease: EASE }}
      />

      {/* Core */}
      <motion.div
        className="rounded-full"
        animate={{
          width:  isActive ? 10 : isPast ? 7 : 5,
          height: isActive ? 10 : isPast ? 7 : 5,
          backgroundColor: isActive
            ? "rgb(var(--text-primary))"
            : isPast
            ? "rgb(var(--text-tertiary))"
            : "rgb(var(--border-primary))",
          opacity: isActive ? 1 : isPast ? 0.5 : 0.2,
        }}
        transition={{ duration: 0.4, ease: EASE }}
      />
    </div>
  );
};
