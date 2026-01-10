import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  technologies: readonly string[];
  icon: string;
  color: string;
  index: number;
}

export const SkillCard = ({
  category,
  technologies,
  icon,
  color,
  index,
}: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[600px] lg:w-[650px] xl:w-[700px]"
    >
      <div className="h-full glass rounded-2xl border border-[rgb(var(--border-primary))] hover:border-[rgb(var(--border-hover))] transition-all duration-500 p-8 md:p-10 hover:shadow-lg hover-glow">
        {/* Icon and Category */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className={`text-4xl md:text-5xl flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${color} bg-opacity-10`}
          >
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] font-serif">
            {category}
          </h3>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15 + techIndex * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-lg glass border border-[rgb(var(--border-secondary))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:border-[rgb(var(--border-hover))] transition-all duration-300 text-sm md:text-base font-medium cursor-hover"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
