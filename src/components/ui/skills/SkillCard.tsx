import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import type { Skill } from "../../sections/data/SkillsData";
import { Tag } from "./Tag";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

// Monochrome color schemes with subtle accents
const getCardColors = (colorIndex: number, isDark: boolean) => {
  if (isDark) {
    const darkSchemes = [
      {
        bg: "rgba(18, 18, 18, 0.8)",
        border: "rgba(60, 60, 60, 0.5)",
        glow: "rgba(255, 255, 255, 0.03)",
        accent: "rgba(255, 255, 255, 0.1)",
        text: "rgb(255, 255, 255)",
      },
      {
        bg: "rgba(22, 22, 22, 0.8)",
        border: "rgba(70, 70, 70, 0.5)",
        glow: "rgba(255, 255, 255, 0.04)",
        accent: "rgba(255, 255, 255, 0.12)",
        text: "rgb(250, 250, 250)",
      },
      {
        bg: "rgba(16, 16, 16, 0.8)",
        border: "rgba(55, 55, 55, 0.5)",
        glow: "rgba(255, 255, 255, 0.035)",
        accent: "rgba(255, 255, 255, 0.08)",
        text: "rgb(245, 245, 245)",
      },
      {
        bg: "rgba(20, 20, 20, 0.8)",
        border: "rgba(65, 65, 65, 0.5)",
        glow: "rgba(255, 255, 255, 0.045)",
        accent: "rgba(255, 255, 255, 0.11)",
        text: "rgb(240, 240, 240)",
      },
      {
        bg: "rgba(24, 24, 24, 0.8)",
        border: "rgba(75, 75, 75, 0.5)",
        glow: "rgba(255, 255, 255, 0.05)",
        accent: "rgba(255, 255, 255, 0.13)",
        text: "rgb(235, 235, 235)",
      },
      {
        bg: "rgba(14, 14, 14, 0.8)",
        border: "rgba(50, 50, 50, 0.5)",
        glow: "rgba(255, 255, 255, 0.025)",
        accent: "rgba(255, 255, 255, 0.09)",
        text: "rgb(230, 230, 230)",
      },
    ];
    return darkSchemes[colorIndex % darkSchemes.length];
  } else {
    const lightSchemes = [
      {
        bg: "rgba(255, 255, 255, 0.8)",
        border: "rgba(0, 0, 0, 0.08)",
        glow: "rgba(0, 0, 0, 0.03)",
        accent: "rgba(0, 0, 0, 0.05)",
        text: "rgb(17, 17, 17)",
      },
      {
        bg: "rgba(252, 252, 252, 0.8)",
        border: "rgba(0, 0, 0, 0.1)",
        glow: "rgba(0, 0, 0, 0.04)",
        accent: "rgba(0, 0, 0, 0.06)",
        text: "rgb(20, 20, 20)",
      },
      {
        bg: "rgba(250, 250, 250, 0.8)",
        border: "rgba(0, 0, 0, 0.07)",
        glow: "rgba(0, 0, 0, 0.035)",
        accent: "rgba(0, 0, 0, 0.045)",
        text: "rgb(25, 25, 25)",
      },
      {
        bg: "rgba(248, 248, 248, 0.8)",
        border: "rgba(0, 0, 0, 0.09)",
        glow: "rgba(0, 0, 0, 0.045)",
        accent: "rgba(0, 0, 0, 0.055)",
        text: "rgb(30, 30, 30)",
      },
      {
        bg: "rgba(254, 254, 254, 0.8)",
        border: "rgba(0, 0, 0, 0.11)",
        glow: "rgba(0, 0, 0, 0.05)",
        accent: "rgba(0, 0, 0, 0.065)",
        text: "rgb(35, 35, 35)",
      },
      {
        bg: "rgba(246, 246, 246, 0.8)",
        border: "rgba(0, 0, 0, 0.06)",
        glow: "rgba(0, 0, 0, 0.025)",
        accent: "rgba(0, 0, 0, 0.04)",
        text: "rgb(40, 40, 40)",
      },
    ];
    return lightSchemes[colorIndex % lightSchemes.length];
  }
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains("dark")
  );

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const colors = getCardColors(skill.colorIndex, isDark);

  return (
    <motion.div
      className="flex-shrink-0 w-[500px] h-[620px] lg:w-[550px] lg:h-[680px] relative group"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Subtle glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
        style={{ background: colors.glow }}
      />

      {/* Main card with glassmorphism */}
      <motion.div
        className="relative w-full h-full flex flex-col p-10 lg:p-12 rounded-3xl overflow-hidden backdrop-blur-xl"
        style={{
          background: colors.bg,
          color: colors.text,
          border: `1px solid ${colors.border}`,
          boxShadow: isDark
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        {/* Glass reflection effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-40 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${colors.accent} 0%, transparent 50%)`,
          }}
        />

        {/* Skill number badge - minimal */}
        <motion.div
          className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center font-black text-xl backdrop-blur-xl"
          style={{
            background: colors.bg,
            color: colors.text,
            border: `1px solid ${colors.border}`,
            boxShadow: isDark
              ? "0 10px 30px rgba(0, 0, 0, 0.5)"
              : "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
          initial={{ rotate: -180, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            delay: index * 0.12 + 0.3,
            duration: 0.7,
            type: "spring",
            bounce: 0.4,
          }}
          viewport={{ once: true }}
        >
          {skill.number}
        </motion.div>

        {/* Tags Container */}
        <div className="relative z-10 flex flex-wrap gap-2 mb-auto">
          {skill.tags.map((tag, tagIndex) => (
            <Tag key={tag} label={tag} index={tagIndex} />
          ))}
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex flex-col gap-6 mt-12">
          {/* Large Number Background - very subtle */}
          <motion.div
            className="absolute -right-8 -bottom-12 text-[14rem] lg:text-[16rem] font-black leading-none select-none pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: isDark ? 0.02 : 0.015, scale: 1 }}
            transition={{
              delay: index * 0.12 + 0.2,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            style={{ color: colors.text }}
          >
            {skill.number}
          </motion.div>

          {/* Title and Description */}
          <div className="relative space-y-6">
            {/* Minimal decorative line */}
            <motion.div
              className="h-[2px] w-12 rounded-full"
              style={{ background: colors.accent }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                delay: index * 0.12 + 0.4,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            />

            <motion.h3
              className="text-3xl lg:text-4xl font-black leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12 + 0.5,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              style={{ color: colors.text }}
            >
              {skill.title}
            </motion.h3>

            <motion.p
              className="text-base lg:text-lg leading-relaxed max-w-lg"
              style={{
                opacity: isDark ? 0.7 : 0.65,
                color: colors.text,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: isDark ? 0.7 : 0.65, y: 0 }}
              transition={{
                delay: index * 0.12 + 0.6,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              {skill.description}
            </motion.p>

            {/* Minimal decorative dots */}
            <motion.div
              className="flex gap-2 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index * 0.12 + 0.7,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1. 5 h-1.5 rounded-full"
                  style={{ background: colors.accent }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Subtle hover shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            transform: "translateX(-100%) rotate(45deg)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
