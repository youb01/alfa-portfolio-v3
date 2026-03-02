import React from "react";
import { SectionHeader } from "../../ui/SectionHeader";
import { SkillsGrid } from "../../ui/skills/SkillsGrid";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-[rgb(var(--bg-primary))]"
      style={{ overflowX: "clip" }}
    >
      <BackgroundLines />

      <div className="relative z-20 pt-20 md:pt-28 lg:pt-36 pb-10 md:pb-14">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            number="02"
            title="Skills"
            titleMuted="and Experience"
            subtitle="Technical expertise meets human-centred thinking — from pixels to production, and everything in between."
          />
        </div>
      </div>

      <SkillsGrid />
    </section>
  );
};
