import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../../../hooks/useTheme";
import { getTechIcon } from "./techIconMap";

interface ToolBadgeProps {
  tool: string;
  /** Stagger index — drives the entrance delay */
  index: number;
}

export const ToolBadge: React.FC<ToolBadgeProps> = ({ tool, index }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const IconComp = getTechIcon(tool);

  return (
    <motion.span
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold tracking-wide cursor-default"
      style={{
        color: isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.55)",
        background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
        border: `1px solid ${
          isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"
        }`,
      }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.4,
        delay: 0.12 + index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
        color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.78)",
        transition: { duration: 0.15 },
      }}
    >
      {IconComp && (
        <IconComp size={16} style={{ flexShrink: 0, opacity: 0.7 }} />
      )}
      {tool}
    </motion.span>
  );
};
