import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";

interface HighlightCardProps {
  icon: LucideIcon;
  iconSize: number;
  title: string;
  description: string;
  index: number;
}

export const HighlightCard = ({
  icon: Icon,
  iconSize,
  title,
  description,
  index,
}: HighlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.08,
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
      className="group relative cursor-hover"
    >
      {/* Card background */}
      <motion.div
        className="relative h-full p-6 md:p-8 rounded-2xl glass hover-glow border border-[rgb(var(--border-primary))] overflow-hidden shadow-elevation-low"
        whileHover={{
          borderColor: "rgb(var(--border-hover))",
          y: -8,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--text-primary)/0.03)] via-transparent to-[rgb(var(--text-primary)/0.05)]"
          style={{ transform: "translateZ(10px)" }}
        />

        {/* Shine effect */}
        <motion.div
          initial={{ x: "-100%", y: "-100%" }}
          whileHover={{ x: "100%", y: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgb(var(--text-primary)/0.1)] to-transparent opacity-0 group-hover:opacity-100"
          style={{
            transform: "translateZ(20px) rotate(45deg)",
          }}
        />

        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[rgb(var(--border-hover))] via-[rgb(var(--border-hover)/0.5)] to-transparent origin-left"
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center text-center space-y-4"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Icon container */}
          <motion.div
            className="relative flex items-center justify-center w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--text-primary))]"
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
          >
            {/* Icon glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 0.4, scale: 1.4 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-2xl bg-[rgb(var(--text-primary))] blur-xl"
            />

            {/* Rotating icon */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Icon size={iconSize} strokeWidth={2} className="relative z-10" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-lg md:text-xl font-semibold text-[rgb(var(--text-primary))]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-sm md:text-base text-[rgb(var(--text-secondary))] font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Corner decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[rgb(var(--text-primary))] to-transparent rounded-tl-full"
        />
      </motion.div>
    </motion.div>
  );
};
