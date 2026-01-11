import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import type { Skill } from "../../sections/data/SkillsData";
import { Tag } from "./Tag";
import { ACCENT_COLORS, ANIMATION_TIMINGS } from "../../../constants/design_system";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

// Purple/Blue gradient color schemes with glassmorphism
const getCardColors = (colorIndex: number, isDark: boolean) => {
  const purpleBlueGradients = [
    {
      gradient: ACCENT_COLORS.purple.primaryRgba(0.15),
      glowPrimary: ACCENT_COLORS.purple.primaryRgba(0.2),
      glowSecondary: ACCENT_COLORS.blue.primaryRgba(0.15),
    },
    {
      gradient: ACCENT_COLORS.blue.primaryRgba(0.15),
      glowPrimary: ACCENT_COLORS.blue.primaryRgba(0.2),
      glowSecondary: ACCENT_COLORS.purple.primaryRgba(0.15),
    },
    {
      gradient: `linear-gradient(135deg, ${ACCENT_COLORS.purple.primaryRgba(0.1)}, ${ACCENT_COLORS.blue.primaryRgba(0.1)})`,
      glowPrimary: ACCENT_COLORS.purple.primaryRgba(0.18),
      glowSecondary: ACCENT_COLORS.blue.primaryRgba(0.18),
    },
    {
      gradient: ACCENT_COLORS.purple.secondaryRgba(0.15),
      glowPrimary: ACCENT_COLORS.purple.secondaryRgba(0.2),
      glowSecondary: ACCENT_COLORS.blue.secondaryRgba(0.15),
    },
    {
      gradient: ACCENT_COLORS.blue.secondaryRgba(0.15),
      glowPrimary: ACCENT_COLORS.blue.secondaryRgba(0.2),
      glowSecondary: ACCENT_COLORS.purple.secondaryRgba(0.15),
    },
    {
      gradient: `linear-gradient(135deg, ${ACCENT_COLORS.purple.secondaryRgba(0.12)}, ${ACCENT_COLORS.blue.secondaryRgba(0.12)})`,
      glowPrimary: ACCENT_COLORS.purple.primaryRgba(0.15),
      glowSecondary: ACCENT_COLORS.blue.primaryRgba(0.15),
    },
  ];

  const colorScheme = purpleBlueGradients[colorIndex % purpleBlueGradients.length];

  if (isDark) {
    return {
      bg: "rgba(15, 17, 20, 0.7)",
      border: `1px solid ${ACCENT_COLORS.purple.primaryRgba(0.2)}`,
      borderGradient: `linear-gradient(135deg, ${ACCENT_COLORS.purple.primaryRgba(0.3)}, ${ACCENT_COLORS.blue.primaryRgba(0.3)})`,
      glow: colorScheme.glowPrimary,
      glowSecondary: colorScheme.glowSecondary,
      accent: colorScheme.gradient,
      text: "rgb(255, 255, 255)",
    };
  } else {
    return {
      bg: "rgba(255, 255, 255, 0.7)",
      border: `1px solid ${ACCENT_COLORS.purple.primaryRgba(0.15)}`,
      borderGradient: `linear-gradient(135deg, ${ACCENT_COLORS.purple.primaryRgba(0.25)}, ${ACCENT_COLORS.blue.primaryRgba(0.25)})`,
      glow: colorScheme.glowPrimary,
      glowSecondary: colorScheme.glowSecondary,
      accent: colorScheme.gradient,
      text: "rgb(17, 17, 17)",
    };
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
        ease: ANIMATION_TIMINGS.custom,
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
      {/* Purple/Blue glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.glow}, ${colors.glowSecondary}, transparent)`,
        }}
      />

      {/* Main card with glassmorphism */}
      <motion.div
        className="relative w-full h-full flex flex-col p-10 lg:p-12 rounded-3xl overflow-hidden"
        style={{
          background: colors.bg,
          color: colors.text,
          border: colors.border,
          backdropFilter: "blur(16px) saturate(160%)",
          boxShadow: isDark
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px ${ACCENT_COLORS.purple.primaryRgba(0.1)}`
            : `0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px ${ACCENT_COLORS.purple.primaryRgba(0.08)}`,
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: ANIMATION_TIMINGS.fast, ease: "easeOut" },
        }}
      >
        {/* Purple/Blue gradient reflection effect */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: colors.accent,
          }}
        />

        {/* Skill number badge - with purple/blue gradient */}
        <motion.div
          className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center font-black text-xl"
          style={{
            background: colors.bg,
            color: colors.text,
            border: colors.border,
            backdropFilter: "blur(16px) saturate(160%)",
            boxShadow: `0 10px 30px ${colors.glow}, 0 0 0 2px ${ACCENT_COLORS.purple.primaryRgba(0.2)}`,
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
          <span
            style={{
              background: ACCENT_COLORS.gradient.purpleToBlue,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {skill.number}
          </span>
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
            {/* Purple/Blue gradient decorative line */}
            <motion.div
              className="h-[2px] w-12 rounded-full"
              style={{
                background: ACCENT_COLORS.gradient.purpleToBlue,
              }}
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

            {/* Purple/Blue gradient decorative dots */}
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
              {[
                ACCENT_COLORS.purple.primary,
                ACCENT_COLORS.blue.primary,
                ACCENT_COLORS.purple.secondary,
              ].map((color, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: color }}
                  animate={{
                    opacity: [0.4, 0.9, 0.4],
                    scale: [1, 1.2, 1],
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

        {/* Purple/Blue hover shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_COLORS.purple.primaryRgba(0.1)}, ${ACCENT_COLORS.blue.primaryRgba(0.1)}, transparent)`,
            transform: "translateX(-100%) rotate(45deg)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
