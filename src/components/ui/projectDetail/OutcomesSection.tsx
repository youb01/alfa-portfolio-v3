import { motion } from "framer-motion";

const BORDER = "1px solid rgb(var(--border-primary))";

interface OutcomesSectionProps {
  outcomes: string[];
}

export const OutcomesSection = ({ outcomes }: OutcomesSectionProps) => {
  if (outcomes.length === 0) return null;

  return (
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
              Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[rgb(var(--text-primary))]">
              What was achieved
            </h2>
          </motion.div>

          <ul className="divide-y divide-[rgb(var(--border-primary))]">
            {outcomes.map((outcome, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-6 py-5 first:pt-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <span className="text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))] mt-1 shrink-0 w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-[rgb(var(--text-secondary))]">
                  {outcome}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
