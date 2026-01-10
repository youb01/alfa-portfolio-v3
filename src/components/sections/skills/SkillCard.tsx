import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { SkillCategory } from "../../../types";
import { SkillTag } from "./SkillTag";
import { useState } from "react";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export const SkillCard = ({ category, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[600px] lg:w-[650px] xl:w-[700px]
        h-[500px] sm:h-[520px] md:h-[550px] lg:h-[580px] xl:h-[600px]
        relative group cursor-hover"
    >
      {/* Main card */}
      <motion.div
        className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden
          bg-gradient-to-br from-[rgb(var(--bg-secondary))] to-[rgb(var(--bg-tertiary))]
          border border-[rgb(var(--border-primary))]
          backdrop-blur-xl shadow-xl
          transition-all duration-500"
        style={{
          transform: "translateZ(20px)",
        }}
        whileHover={{
          borderColor: "rgb(var(--border-hover))",
          boxShadow: `0 25px 50px -12px rgba(var(--shadow-color), 0.25),
                      0 0 40px -10px rgba(var(--border-hover), 0.15)`,
        }}
      >
        {/* Gradient glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100
            bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10
            transition-opacity duration-500 pointer-events-none"
          style={{ transform: "translateZ(10px)" }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Background number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true }}
            className="text-[180px] sm:text-[200px] md:text-[220px] font-black text-[rgb(var(--text-primary))]
              select-none leading-none"
            style={{ transform: "translateZ(0px)" }}
          >
            {category.number}
          </motion.span>
        </div>

        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col p-8 md:p-10 lg:p-12">
          {/* Tags at the top */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-auto">
            {category.tags.map((tag, tagIndex) => (
              <SkillTag key={tag.name} tag={tag} index={tagIndex} />
            ))}
          </div>

          {/* Title and description at the bottom */}
          <div className="space-y-3 md:space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15 + 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif
                text-[rgb(var(--text-primary))] leading-tight"
            >
              {category.title}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15 + 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-base md:text-lg lg:text-xl font-serif
                text-[rgb(var(--text-secondary))] leading-relaxed"
            >
              {category.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
