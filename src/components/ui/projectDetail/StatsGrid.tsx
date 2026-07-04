import { motion } from "framer-motion";

const BORDER = "1px solid rgb(var(--border-primary))";

interface Stat {
  label: string;
  value: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  if (stats.length === 0) return null;

  return (
    <section className="py-16 md:py-20" style={{ borderTop: BORDER }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: "rgb(var(--border-primary))" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col px-8 py-10"
              style={{ background: "rgb(var(--bg-primary))" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <p className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none text-[rgb(var(--text-primary))] mb-3">
                {stat.value}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[rgb(var(--text-tertiary))]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
