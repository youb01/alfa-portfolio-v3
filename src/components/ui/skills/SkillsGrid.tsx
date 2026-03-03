import { motion } from "framer-motion";
import React from "react";
import { skillRows } from "../../sections/data/SkillsData";
import { SkillRow } from "./SkillRow";

export const SkillsGrid: React.FC = () => {
  return (
    <div className="pb-24 lg:pb-40 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
      {skillRows.map((row) => (
        <React.Fragment key={row.id}>
          <Separator />
          <SkillRow row={row} />
        </React.Fragment>
      ))}
      <Separator />
    </div>
  );
};

const Separator: React.FC = () => (
  <motion.div
    className="h-[1px] origin-left bg-[rgb(var(--border-primary))]"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
  />
);
