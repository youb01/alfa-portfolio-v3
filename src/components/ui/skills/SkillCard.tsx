import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";
import type { Skill } from "../../sections/data/SkillsData";
import { Tag } from "./Tag";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

// Purple/Blue glassmorphism color schemes
const getCardColors = (colorIndex: number, isDark: boolean) => {
  if (isDark) {
    const darkSchemes = [
      {
        bg: "rgba(15, 20, 25, 0.08)",
        border: "rgba(139, 92, 246, 0.15)",
        borderHover: "rgba(139, 92, 246, 0.3)",
        glow: "rgba(139, 92, 246, 0.15)",
        accent: "rgba(139, 92, 246, 0.1)",
        text: "rgb(255, 255, 255)",
      },
      {
        bg: "rgba(15, 20, 25, 0.08)",
        border: "rgba(59, 130, 246, 0.15)",
        borderHover: "rgba(59, 130, 246, 0.3)",
        glow: "rgba(59, 130, 246, 0.15)",
        accent: "rgba(59, 130, 246, 0.1)",
        text: "rgb(250, 250, 250)",
      },
      {
        bg: "rgba(15, 20, 25, 0.08)",
        border: "rgba(167, 139, 250, 0.15)",
        borderHover: "rgba(167, 139, 250, 0.3)",
        glow: "rgba(167, 139, 250, 0.15)",
        accent: "rgba(167, 139, 250, 0.1)",
        text: "rgb(245, 245, 245)",
      },
      {
        bg: "rgba(15, 20, 25, 0.08)",
        border: "rgba(96, 165, 250, 0.15)",
        borderHover: "rgba(96, 165, 250, 0.3)",
        glow: "rgba(96, 165, 250, 0.15)",
        accent: "rgba(96, 165, 250, 0.1)",
        text: "rgb(240, 240, 240)",
      },
      {
        bg: "rgba(15, 20, 25, 0.08)",
        border: "rgba(124, 58, 237, 0.15)",
        borderHover: "rgba(124, 58, 237, 0.3)",
        glow: "rgba(124, 58, 237, 0.15)",
        accent: "rgba(124, 58, 237, 0.1)",
        text: "rgb(235, 235, 235)",
      },
      {
        bg: "rgba(15, 20, 25, 0.08)",
        border: "rgba(37, 99, 235, 0.15)",
        borderHover: "rgba(37, 99, 235, 0.3)",
        glow: "rgba(37, 99, 235, 0.15)",
        accent: "rgba(37, 99, 235, 0.1)",
        text: "rgb(230, 230, 230)",
      },
    ];
    return darkSchemes[colorIndex % darkSchemes.length];
  } else {
    const lightSchemes = [
      {
        bg: "rgba(255, 255, 255, 0.8)",
        border: "rgba(139, 92, 246, 0.1)",
        borderHover: "rgba(139, 92, 246, 0.25)",
        glow: "rgba(139, 92, 246, 0.12)",
        accent: "rgba(139, 92, 246, 0.05)",
        text: "rgb(17, 17, 17)",
      },
      {
        bg: "rgba(255, 255, 255, 0.8)",
        border: "rgba(59, 130, 246, 0.1)",
        borderHover: "rgba(59, 130, 246, 0.25)",
        glow: "rgba(59, 130, 246, 0.12)",
        accent: "rgba(59, 130, 246, 0.05)",
        text: "rgb(20, 20, 20)",
      },
      {
        bg: "rgba(255, 255, 255, 0.8)",
        border: "rgba(167, 139, 250, 0.1)",
        borderHover: "rgba(167, 139, 250, 0.25)",
        glow: "rgba(167, 139, 250, 0.12)",
        accent: "rgba(167, 139, 250, 0.05)",
        text: "rgb(25, 25, 25)",
      },
      {
        bg: "rgba(255, 255, 255, 0.8)",
        border: "rgba(96, 165, 250, 0.1)",
        borderHover: "rgba(96, 165, 250, 0.25)",
        glow: "rgba(96, 165, 250, 0.12)",
        accent: "rgba(96, 165, 250, 0.05)",
        text: "rgb(30, 30, 30)",
      },
      {
        bg: "rgba(255, 255, 255, 0.8)",
        border: "rgba(124, 58, 237, 0.1)",
        borderHover: "rgba(124, 58, 237, 0.25)",
        glow: "rgba(124, 58, 237, 0.12)",
        accent: "rgba(124, 58, 237, 0.05)",
        text: "rgb(35, 35, 35)",
      },
      {
        bg: "rgba(255, 255, 255, 0.8)",
        border: "rgba(37, 99, 235, 0.1)",
        borderHover: "rgba(37, 99, 235, 0.25)",
        glow: "rgba(37, 99, 235, 0.12)",
        accent: "rgba(37, 99, 235, 0.05)",
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
  const [isHovered, setIsHovered] = useState(false);

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
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
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
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow effect with purple/blue tint */}
      <motion.div
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
        style={{ background: colors.glow }}
      />

      {/* Main card with glassmorphism */}
      <motion.div
        className="relative w-full h-full flex flex-col p-10 lg:p-12 rounded-3xl overflow-hidden"
        style={{
          background: colors.bg,
          color: colors.text,
          border: `1px solid ${colors.border}`,
          backdropFilter: "blur(12px) saturate(150%)",
          boxShadow: isDark
            ? `0 8px 32px rgba(139, 92, 246, 0.25), 0 4px 16px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.1)`
            : `0 8px 32px rgba(139, 92, 246, 0.12), 0 4px 16px rgba(59, 130, 246, 0.08), 0 0 0 1px rgba(139, 92, 246, 0.05)`,
        }}
        whileHover={{
          scale: 1.02,
          borderColor: colors.borderHover,
          boxShadow: isDark
            ? `0 20px 60px rgba(139, 92, 246, 0.4), 0 12px 32px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.2)`
            : `0 20px 60px rgba(139, 92, 246, 0.2), 0 12px 32px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.1)`,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        {/* Hover image reveal effect */}
        {skill.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.95,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 z-0 rounded-3xl overflow-hidden"
          >
            <img
              src={skill.image}
              alt={skill.imageAlt}
              className="w-full h-full object-cover"
            />
            {/* Glassmorphism overlay to maintain text readability */}
            <div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? "linear-gradient(to top, rgba(15, 20, 25, 0.95) 0%, rgba(15, 20, 25, 0.75) 40%, rgba(15, 20, 25, 0.5) 70%, transparent 100%)"
                  : "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 40%, rgba(255, 255, 255, 0.5) 70%, transparent 100%)",
                backdropFilter: "blur(4px)",
              }}
            />
          </motion.div>
        )}

        {/* Glass reflection effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-40 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${colors.accent} 0%, transparent 50%)`,
          }}
        />

        {/* Skill number badge with purple/blue gradient */}
        <motion.div
          className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center font-black text-xl"
          style={{
            background: `linear-gradient(135deg, rgba(var(--accent-purple-primary), 0.15), rgba(var(--accent-blue-primary), 0.15))`,
            color: colors.text,
            border: `2px solid ${colors.border}`,
            backdropFilter: "blur(12px)",
            boxShadow: isDark
              ? "0 10px 30px rgba(139, 92, 246, 0.3)"
              : "0 10px 30px rgba(139, 92, 246, 0.15)",
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
            {/* Decorative line with purple/blue gradient */}
            <motion.div
              className="h-[2px] w-12 rounded-full"
              style={{
                background: `linear-gradient(to right, rgb(var(--accent-purple-primary)), rgb(var(--accent-blue-primary)))`,
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

            {/* Decorative dots with purple/blue glow */}
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
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background:
                      i === 0
                        ? "rgb(var(--accent-purple-primary))"
                        : i === 1
                        ? "rgb(var(--accent-blue-primary))"
                        : "rgb(var(--accent-purple-secondary))",
                  }}
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
