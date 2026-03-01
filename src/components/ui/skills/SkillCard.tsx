import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import type { Skill } from "../../sections/data/SkillsData";
import { Tag } from "./Tag";
import { getTechIcon } from "./techIconMap";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

// Monochrome color schemes with subtle accents
const getCardColors = (colorIndex: number, isDark: boolean) => {
  if (isDark) {
    const darkSchemes = [
      {
        bg: "rgba(18, 18, 18, 0.85)",
        border: "rgba(60, 60, 60, 0.5)",
        glow: "rgba(255, 255, 255, 0.04)",
        accent: "rgba(255, 255, 255, 0.12)",
        text: "rgb(255, 255, 255)",
      },
      {
        bg: "rgba(22, 22, 22, 0.85)",
        border: "rgba(70, 70, 70, 0.5)",
        glow: "rgba(255, 255, 255, 0.05)",
        accent: "rgba(255, 255, 255, 0.14)",
        text: "rgb(250, 250, 250)",
      },
      {
        bg: "rgba(16, 16, 16, 0.85)",
        border: "rgba(55, 55, 55, 0.5)",
        glow: "rgba(255, 255, 255, 0.04)",
        accent: "rgba(255, 255, 255, 0.10)",
        text: "rgb(245, 245, 245)",
      },
      {
        bg: "rgba(20, 20, 20, 0.85)",
        border: "rgba(65, 65, 65, 0.5)",
        glow: "rgba(255, 255, 255, 0.05)",
        accent: "rgba(255, 255, 255, 0.13)",
        text: "rgb(240, 240, 240)",
      },
      {
        bg: "rgba(24, 24, 24, 0.85)",
        border: "rgba(75, 75, 75, 0.5)",
        glow: "rgba(255, 255, 255, 0.06)",
        accent: "rgba(255, 255, 255, 0.15)",
        text: "rgb(235, 235, 235)",
      },
      {
        bg: "rgba(14, 14, 14, 0.85)",
        border: "rgba(50, 50, 50, 0.5)",
        glow: "rgba(255, 255, 255, 0.03)",
        accent: "rgba(255, 255, 255, 0.11)",
        text: "rgb(230, 230, 230)",
      },
    ];
    return darkSchemes[colorIndex % darkSchemes.length];
  } else {
    const lightSchemes = [
      {
        bg: "rgba(255, 255, 255, 0.85)",
        border: "rgba(0, 0, 0, 0.08)",
        glow: "rgba(0, 0, 0, 0.04)",
        accent: "rgba(0, 0, 0, 0.06)",
        text: "rgb(17, 17, 17)",
      },
      {
        bg: "rgba(252, 252, 252, 0.85)",
        border: "rgba(0, 0, 0, 0.10)",
        glow: "rgba(0, 0, 0, 0.05)",
        accent: "rgba(0, 0, 0, 0.07)",
        text: "rgb(20, 20, 20)",
      },
      {
        bg: "rgba(250, 250, 250, 0.85)",
        border: "rgba(0, 0, 0, 0.07)",
        glow: "rgba(0, 0, 0, 0.04)",
        accent: "rgba(0, 0, 0, 0.05)",
        text: "rgb(25, 25, 25)",
      },
      {
        bg: "rgba(248, 248, 248, 0.85)",
        border: "rgba(0, 0, 0, 0.09)",
        glow: "rgba(0, 0, 0, 0.05)",
        accent: "rgba(0, 0, 0, 0.065)",
        text: "rgb(30, 30, 30)",
      },
      {
        bg: "rgba(254, 254, 254, 0.85)",
        border: "rgba(0, 0, 0, 0.11)",
        glow: "rgba(0, 0, 0, 0.06)",
        accent: "rgba(0, 0, 0, 0.075)",
        text: "rgb(35, 35, 35)",
      },
      {
        bg: "rgba(246, 246, 246, 0.85)",
        border: "rgba(0, 0, 0, 0.06)",
        glow: "rgba(0, 0, 0, 0.03)",
        accent: "rgba(0, 0, 0, 0.045)",
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

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

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
    // Outer wrapper: provides 3D tilt only — AnimatePresence handles entry/exit
    <motion.div
      className="w-full h-full relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow halo — outside the card, no overflow clip needed */}
      <motion.div
        className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl pointer-events-none transition-opacity duration-700"
        style={{ background: colors.glow }}
      />

      {/* Main card — overflow-hidden clips the decorative bg number */}
      <motion.div
        className="relative w-full h-full flex flex-col p-8 lg:p-10 rounded-3xl overflow-hidden backdrop-blur-xl"
        style={{
          background: colors.bg,
          color: colors.text,
          border: `1px solid ${colors.border}`,
          boxShadow: isDark
            ? "0 20px 60px -15px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)"
            : "0 20px 60px -15px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
        }}
        whileHover={{
          scale: 1.015,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        {/* Glass sheen — top-left gradient reflection */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${colors.accent} 0%, transparent 55%)`,
          }}
        />

        {/* Number badge — top-right corner, inside card bounds */}
        <motion.div
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full flex items-center justify-center font-black text-base backdrop-blur-xl"
          style={{
            background: colors.bg,
            color: colors.text,
            border: `1px solid ${colors.border}`,
            boxShadow: isDark
              ? "0 8px 24px rgba(0,0,0,0.5)"
              : "0 8px 24px rgba(0,0,0,0.08)",
          }}
          initial={{ rotate: -180, scale: 0, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{
            delay: index * 0.08 + 0.25,
            duration: 0.6,
            type: "spring",
            bounce: 0.35,
          }}
          viewport={{ once: true }}
        >
          {skill.number}
        </motion.div>

        {/* Tags — top area, right-padded to clear the badge */}
        <div className="relative z-10 flex flex-wrap gap-2 mb-auto pr-14">
          {skill.tags.map((tag, tagIndex) => {
            const IconComp = getTechIcon(tag);
            return (
              <Tag
                key={tag}
                label={tag}
                index={tagIndex}
                icon={
                  IconComp ? (
                    <IconComp
                      size={11}
                      style={{ flexShrink: 0, opacity: 0.75 }}
                    />
                  ) : undefined
                }
              />
            );
          })}
        </div>

        {/* Large decorative number — very subtle, clipped by overflow-hidden */}
        <motion.div
          className="absolute -right-4 -bottom-8 text-[9rem] lg:text-[11rem] font-black leading-none select-none pointer-events-none"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: isDark ? 0.025 : 0.018, scale: 1 }}
          transition={{
            delay: index * 0.08 + 0.15,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          style={{ color: colors.text }}
        >
          {skill.number}
        </motion.div>

        {/* Bottom content */}
        <div className="relative z-10 flex flex-col gap-5 mt-10">
          {/* Decorative accent line */}
          <motion.div
            className="h-[2px] w-10 rounded-full"
            style={{ background: colors.accent }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              delay: index * 0.08 + 0.35,
              duration: 0.5,
            }}
            viewport={{ once: true }}
          />

          <motion.h3
            className="text-2xl lg:text-3xl font-black leading-tight tracking-tight"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08 + 0.4,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            style={{ color: colors.text }}
          >
            {skill.title}
          </motion.h3>

          <motion.p
            className="text-sm lg:text-base leading-relaxed"
            style={{ opacity: isDark ? 0.65 : 0.6, color: colors.text }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: isDark ? 0.65 : 0.6, y: 0 }}
            transition={{
              delay: index * 0.08 + 0.5,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            {skill.description}
          </motion.p>

          {/* Decorative dots */}
          <motion.div
            className="flex gap-1.5 pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.6, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: colors.accent }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Hover shine sweep */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
