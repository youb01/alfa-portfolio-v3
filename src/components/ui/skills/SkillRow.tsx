import { motion } from "framer-motion";
import React from "react";
import type { SkillRow as SkillRowData } from "../../../data/skills";
import { ToolBadge } from "./ToolBadge";

interface SkillRowProps {
  row: SkillRowData;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const SkillRow: React.FC<SkillRowProps> = ({ row }) => (
  <div className="relative grid grid-cols-1 md:grid-cols-[4rem_220px_1fr] py-8 md:py-10 gap-5 md:gap-0 overflow-hidden">

    {/* ── Col 1: Index ── */}
    <motion.span
      className="text-[9px] font-bold uppercase tracking-[0.28em] self-start md:pt-1.5"
      style={{ color: "rgb(var(--text-tertiary))" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {row.number}
    </motion.span>

    {/* ── Col 2: Category + tagline ── */}
    <motion.div
      className="md:pr-10"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <h3
        className="font-extrabold uppercase leading-none mb-2.5"
        style={{
          fontSize:      "clamp(1.1rem, 2.2vw, 1.6rem)",
          letterSpacing: "-0.01em",
          color:         "rgb(var(--text-primary))",
        }}
      >
        {row.category}
      </h3>
      <p
        className="text-[11px] font-medium leading-snug"
        style={{ color: "rgb(var(--text-tertiary))", maxWidth: "180px" }}
      >
        {row.tagline}
      </p>
    </motion.div>

    {/* ── Col 3: Tool badges ── */}
    <div className="flex flex-wrap content-start gap-2">
      {row.tools.map((tool, j) => (
        <ToolBadge key={tool} tool={tool} index={j} />
      ))}
    </div>

  </div>
);
