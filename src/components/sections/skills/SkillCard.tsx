import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  iconSize: number;
  title: string;
  description: string;
  technologies: readonly string[];
  color: string;
  borderColor: string;
  index: number;
}

export const SkillCard = ({
  icon: Icon,
  iconSize,
  title,
  description,
  technologies,
  color,
  borderColor,
  index,
}: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`h-full glass rounded-2xl border ${borderColor} p-6 md:p-8 bg-gradient-to-br ${color} backdrop-blur-sm hover:shadow-xl transition-shadow duration-300`}
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="w-16 h-16 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-primary))] flex items-center justify-center">
            <Icon
              size={iconSize}
              className="text-[rgb(var(--text-primary))]"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-[rgb(var(--text-primary))] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-[rgb(var(--text-secondary))] mb-6 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.3 + techIndex * 0.05,
              }}
              viewport={{ once: true }}
              className="px-3 py-1.5 text-xs md:text-sm font-medium text-[rgb(var(--text-tertiary))] bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-secondary))] rounded-lg hover:border-[rgb(var(--border-hover))] transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
