import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { SkillCategory } from "../../../types";
import { SkillTag } from "./SkillTag";

interface SkillCardProps {
  skill: SkillCategory;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D tilt effect
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize to -0.5 to 0.5
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15, // 150ms stagger
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[600px] lg:w-[650px] xl:w-[700px]
        h-[500px] sm:h-[550px] md:h-[600px]
        rounded-2xl overflow-hidden
        transition-all duration-500"
    >
      {/* Card background with glassmorphism */}
      <div
        className="absolute inset-0 rounded-2xl border border-border-primary 
        group-hover:border-border-hover
        backdrop-blur-md
        transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, 
            rgb(var(--bg-secondary) / 0.8) 0%, 
            rgb(var(--bg-tertiary) / 0.6) 100%)`,
        }}
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient glow on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, 
              rgb(var(--border-hover) / 0.1) 0%, 
              transparent 70%)`,
          }}
        />
      </div>

      {/* Shadow elevation on hover */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl"
        animate={{
          boxShadow: isHovered
            ? "0 20px 60px rgb(var(--shadow-color) / 0.2)"
            : "0 8px 24px rgb(var(--shadow-color) / 0.08)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col p-8 md:p-10 lg:p-12">
        {/* Large background number */}
        <div
          className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 
          text-[180px] sm:text-[200px] md:text-[220px] font-black 
          text-text-tertiary pointer-events-none select-none
          leading-none"
          style={{
            opacity: 0.08,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {skill.number}
        </div>

        {/* Tags at top */}
        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {skill.tags.map((tag, idx) => (
            <SkillTag key={tag.name} tag={tag} index={idx} />
          ))}
        </div>

        {/* Title and Description */}
        <div className="mt-auto relative z-10">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif 
            text-text-primary mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15 + 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            {skill.title}
          </motion.h3>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-text-secondary font-serif 
            leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15 + 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            {skill.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
