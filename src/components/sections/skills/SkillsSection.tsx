import { motion } from "framer-motion";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { SkillCard } from "../../ui/skills/SkillCard";
import { skillsData } from "../data/SkillsData";
import { ChevronRight } from "lucide-react";

export const SkillsSection = () => {
  const { meta, heading, skills } = skillsData;

  return (
    <section
      id={meta.id}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[rgb(var(--bg-primary))] py-20 md:py-28 lg:py-36"
    >
      {/* Background lines for depth */}
      <BackgroundLines />

      {/* Section header */}
      <div className="relative z-10 px-4 md:px-6 lg:px-8 xl:px-12 mb-12 md:mb-16">
        <div className="max-w-[1600px] mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8 md:mb-10 flex items-center justify-center"
          >
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[rgb(var(--border-hover))] origin-right"
              />
              <span className="text-xs md:text-sm font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.3em]">
                {meta.label}
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[rgb(var(--border-hover))] origin-left"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-4 font-serif">
              {heading.title}
            </h2>
            <p className="text-lg md:text-xl text-[rgb(var(--text-secondary))] font-serif">
              {heading.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative z-10">
        <div
          className="overflow-x-auto overflow-y-hidden scrollbar-hide px-4 md:px-6 lg:px-8 xl:px-12 pb-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                category={skill.category}
                technologies={skill.technologies}
                icon={skill.icon}
                color={skill.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 px-4 md:px-6 lg:px-8 xl:px-12 mt-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-[rgb(var(--text-tertiary))] text-sm"
          >
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Scroll horizontally
            </motion.span>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronRight size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 md:mt-20 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-[rgb(var(--border-secondary))] rounded-full flex items-start justify-center p-2 cursor-hover"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-[rgb(var(--text-tertiary))] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
