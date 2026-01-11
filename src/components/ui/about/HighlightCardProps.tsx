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
      {/* Card background with glassmorphism */}
      <motion.div
        className="relative h-full p-6 md:p-8 rounded-2xl overflow-hidden"
        style={{
          background: "rgba(var(--glass-bg-medium))",
          backdropFilter: "blur(12px) saturate(150%)",
          border: "1px solid rgba(var(--glass-border))",
          boxShadow:
            "0 8px 32px rgba(139, 92, 246, 0.12), 0 4px 16px rgba(59, 130, 246, 0.08)",
        }}
        whileHover={{
          borderColor: "rgba(var(--glass-border-hover))",
          y: -8,
          boxShadow:
            "0 20px 60px rgba(139, 92, 246, 0.2), 0 12px 32px rgba(59, 130, 246, 0.15)",
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Gradient overlay on hover with purple/blue tint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(var(--accent-purple-primary), 0.03), rgba(var(--accent-blue-primary), 0.05))`,
            transform: "translateZ(10px)",
          }}
        />

        {/* Shine effect with purple/blue gradient */}
        <motion.div
          initial={{ x: "-100%", y: "-100%" }}
          whileHover={{ x: "100%", y: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, transparent, rgba(var(--accent-purple-primary), 0.1), rgba(var(--accent-blue-primary), 0.1), transparent)`,
            transform: "translateZ(20px) rotate(45deg)",
          }}
        />

        {/* Top accent line with purple/blue gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 right-0 h-0.5 origin-left"
          style={{
            background: `linear-gradient(to right, rgb(var(--accent-purple-primary)), rgb(var(--accent-blue-primary)), transparent)`,
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center text-center space-y-4"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Icon container with purple/blue glow */}
          <motion.div
            className="relative flex items-center justify-center w-16 h-16 md:w-18 md:h-18 rounded-2xl text-[rgb(var(--text-primary))]"
            style={{
              background: "rgba(var(--glass-bg-strong))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(var(--glass-border))",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
          >
            {/* Icon glow with purple/blue tint */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 0.4, scale: 1.4 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-2xl blur-xl"
              style={{
                background: `radial-gradient(circle, rgba(var(--accent-purple-primary), 0.4), rgba(var(--accent-blue-primary), 0.3))`,
              }}
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

        {/* Corner decoration with purple/blue gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full"
          style={{
            background: `radial-gradient(circle at bottom right, rgba(var(--accent-purple-primary), 0.15), rgba(var(--accent-blue-primary), 0.1), transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};
