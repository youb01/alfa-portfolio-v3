import { motion } from "framer-motion";
import type { SkillTag as SkillTagType } from "../../../types";

interface SkillTagProps {
  tag: SkillTagType;
  index: number;
}

export const SkillTag = ({ tag, index }: SkillTagProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05, // 50ms stagger
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      viewport={{ once: true }}
      className="group relative inline-block px-3 py-1.5 text-xs md:text-sm font-medium 
        bg-bg-tertiary border border-border-primary rounded-full
        hover:border-border-hover
        transition-colors duration-300 cursor-pointer"
      style={{
        backgroundColor: tag.color
          ? `${tag.color}20`
          : "rgb(var(--bg-tertiary))",
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at center, rgb(var(--border-hover) / 0.15) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Tag text */}
      <span className="relative z-10 text-text-primary">{tag.name}</span>
    </motion.span>
  );
};
