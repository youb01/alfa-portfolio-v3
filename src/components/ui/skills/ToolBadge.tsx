import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../../../hooks/useTheme";
import { getTechIcon } from "./techIconMap";

interface ToolBadgeProps {
  tool: string;
  index: number;
}

export const ToolBadge: React.FC<ToolBadgeProps> = ({ tool, index }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const IconComp = getTechIcon(tool);

  return (
    <motion.span
      className="inline-flex items-center gap-2 px-3.5 py-2 text-[12px] font-semibold tracking-wide cursor-default select-none"
      style={{
        border: "1px solid rgb(var(--border-primary))",
        borderRadius: "6px",
        color: "rgb(var(--text-secondary))",
        background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)",
        willChange: "transform",
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        delay: 0.08 + index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
        borderColor: "rgb(var(--text-primary))",
        color: "rgb(var(--text-primary))",
        background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
        transition: { duration: 0.15 },
      }}
    >
      {IconComp && (
        <IconComp size={13} style={{ flexShrink: 0, opacity: 0.75 }} />
      )}
      {tool}
    </motion.span>
  );
};
