import { motion } from "framer-motion";
import React from "react";
import type { SkillRow as SkillRowData } from "../../../data/skills";
import { ToolBadge } from "./ToolBadge";

interface SkillRowProps {
  row: SkillRowData;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const SkillRow: React.FC<SkillRowProps> = ({ row }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 md:gap-20 py-12 md:py-16 overflow-hidden">

      {/* Ghost number — decorative background element */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none tabular-nums"
        style={{
          fontSize: "clamp(7rem, 16vw, 13rem)",
          color: "rgb(var(--text-primary))",
          opacity: 0.03,
        }}
      >
        {row.number}
      </div>

      {/* ── Left: category meta ── */}
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {/* Index number */}
        <span
          className="text-[9px] font-bold uppercase tracking-[0.25em] mb-4"
          style={{ color: "rgb(var(--text-tertiary))" }}
        >
          {row.number}
        </span>

        {/* Accent bar */}
        <motion.div
          className="mb-5 h-0.5 w-7"
          style={{ background: "rgb(var(--text-primary))", transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.18, ease: EASE }}
        />

        {/* Category name */}
        <h3
          className="font-extrabold tracking-tight leading-none mb-3"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
            color: "rgb(var(--text-primary))",
          }}
        >
          {row.category}
        </h3>

        {/* Tagline */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "rgb(var(--text-tertiary))", maxWidth: "220px" }}
        >
          {row.tagline}
        </p>

        {/* Tool count badge */}
        <span
          className="self-start inline-flex items-center px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{
            border: "1px solid rgb(var(--border-primary))",
            borderRadius: "4px",
            color: "rgb(var(--text-tertiary))",
          }}
        >
          {row.tools.length}&nbsp;{row.tools.length === 1 ? "Tool" : "Tools"}
        </span>
      </motion.div>

      {/* ── Right: tool badges ── */}
      <div className="flex flex-wrap content-start gap-2 self-center">
        {row.tools.map((tool, j) => (
          <ToolBadge key={tool} tool={tool} index={j} />
        ))}
      </div>

    </div>
  );
};
