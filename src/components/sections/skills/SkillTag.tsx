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
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      className="inline-block px-3 py-1.5 text-xs md:text-sm font-medium rounded-full
        bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--text-secondary))]
        border border-[rgb(var(--border-primary))]
        hover:bg-[rgb(var(--bg-elevated))] hover:text-[rgb(var(--text-primary))]
        hover:border-[rgb(var(--border-hover))] hover:shadow-lg
        transition-all duration-300 cursor-hover"
    >
      {tag.name}
    </motion.span>
  );
};
