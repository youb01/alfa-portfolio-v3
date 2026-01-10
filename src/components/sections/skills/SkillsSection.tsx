import { motion } from "framer-motion";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { SkillCard } from "./SkillCard";
import { skillsData } from "../data/SkillsData";
import { ChevronRight } from "lucide-react";

export const SkillsSection = () => {
  const { meta, skills } = skillsData;

  return (
    <section
      id={meta.id}
      className="relative min-h-screen flex flex-col justify-center bg-[rgb(var(--bg-primary))] py-20 md:py-28 lg:py-36"
    >
      {/* Background lines for depth */}
      <BackgroundLines />

      {/* Section header - with matching padding */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 mb-12 md:mb-16">
        <div className="flex flex-col items-start">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8"
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
            </div>
          </motion.div>

          {/* Title and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-4">
              {meta.title}
            </h2>
            <p className="text-base md:text-lg text-[rgb(var(--text-secondary))] max-w-2xl">
              {meta.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll container - with matching padding */}
      <div
        className="overflow-x-auto overflow-y-hidden scrollbar-hide px-6 md:px-8 lg:px-12 xl:px-16 pb-8"
        style={{
          overscrollBehaviorX: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              iconSize={skill.iconSize}
              title={skill.title}
              description={skill.description}
              technologies={skill.technologies}
              color={skill.color}
              borderColor={skill.borderColor}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator - with matching padding */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 px-6 md:px-8 lg:px-12 xl:px-16 mt-8"
      >
        <div className="flex items-center gap-3 text-[rgb(var(--text-tertiary))]">
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronRight size={20} />
          </motion.div>
          <span className="text-sm font-medium uppercase tracking-wider">
            Scroll to explore
          </span>
        </div>
      </motion.div>

      {/* Vertical scroll indicator at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex justify-center mt-16 md:mt-20"
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
