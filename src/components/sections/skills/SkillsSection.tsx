import { motion } from "framer-motion";
import React from "react";
import { HorizontalScrollContainer } from "../../ui/skills/SkillsCarousel";
import { SectionHeader } from "../../ui/section/SectionHeader";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative bg-[rgb(var(--bg-primary))]">
      {/* Ambient purple/blue gradient background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: `radial-gradient(circle, rgba(var(--accent-purple-primary), 0.3), transparent)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{
            background: `radial-gradient(circle, rgba(var(--accent-blue-primary), 0.3), transparent)`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Section Header - Fixed */}
      <div className="relative z-20 bg-[rgb(var(--bg-primary))] pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <SectionHeader
            sectionNumber="02"
            title="Skills"
            titleAccent="and Tools"
            showDivider={true}
          />
        </div>

        {/* Scroll Indicator - Only on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:flex absolute bottom-4 right-6 md:right-8 lg:right-12 xl:right-16 items-center gap-3 text-[rgb(var(--text-tertiary))] text-sm font-medium"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-5 h-8 border-2 border-current rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-current rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <HorizontalScrollContainer />
    </section>
  );
};
