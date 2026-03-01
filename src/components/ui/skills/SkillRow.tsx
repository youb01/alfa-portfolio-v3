import { motion } from "framer-motion";
import React from "react";
import type { SkillRow as SkillRowData } from "../../sections/data/SkillsData";
import { ToolBadge } from "./ToolBadge";

interface SkillRowProps {
  row: SkillRowData;
}

export const SkillRow: React.FC<SkillRowProps> = ({ row }) => {
  return (
    /*
     * Two-column grid on md+:
     *   left  — fixed 280 px: number · category · tagline
     *   right — flexible: wrapping ToolBadge pills
     */
    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-16 py-10 md:py-14">
      {/* ── Left: meta ─────────────────────────────────────────────────── */}
      <motion.div
        className="flex flex-col gap-1"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] opacity-60">
          {row.number}
        </span>

        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none mt-2 text-[rgb(var(--text-primary))]">
          {row.category}
        </h3>

        <p className="text-sm leading-snug mt-2 text-[rgb(var(--text-tertiary))]">
          {row.tagline}
        </p>
      </motion.div>

      {/* ── Right: tool badges ──────────────────────────────────────────── */}
      <div className="flex flex-wrap content-center gap-2.5">
        {row.tools.map((tool, j) => (
          <ToolBadge key={tool} tool={tool} index={j} />
        ))}
      </div>
    </div>
  );
};
