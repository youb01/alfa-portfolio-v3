import { motion } from "framer-motion";

const BORDER = "1px solid rgb(var(--border-primary))";

interface TechStackSectionProps {
  techStack: string[];
}

export const TechStackSection = ({ techStack }: TechStackSectionProps) => (
  <section className="py-24 md:py-32" style={{ borderTop: BORDER }}>
    <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))] mb-4">
            Built With
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[rgb(var(--text-primary))]">
            {techStack.length}{" "}
            {techStack.length === 1 ? "Technology" : "Technologies"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              className="flex items-center gap-4 px-5 py-4 rounded-xl border border-[rgb(var(--border-primary))] cursor-default"
              style={{ background: "rgb(var(--bg-primary))" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -2, transition: { duration: 0.18 } }}
            >
              <span className="text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))] shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold text-[rgb(var(--text-primary))]">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
