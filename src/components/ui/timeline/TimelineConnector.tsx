import { motion } from "framer-motion";
import type { AnimKey } from "./TimelineDot";

interface TimelineConnectorProps {
  side: "left" | "right";
  animKey: AnimKey;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const TimelineConnector = ({ side, animKey }: TimelineConnectorProps) => (
  <motion.div
    aria-hidden
    className={`absolute top-[1.35rem] h-px w-10 ${
      side === "left" ? "right-0" : "left-0"
    }`}
    style={{
      background: "rgb(var(--border-secondary))",
      transformOrigin: side === "left" ? "right" : "left",
    }}
    animate={{
      opacity: animKey === "future" ? 0 : animKey === "active" ? 0.9 : 0.3,
      scaleX:  animKey === "future" ? 0 : 1,
    }}
    transition={{ duration: 0.7, ease: EASE }}
  />
);
