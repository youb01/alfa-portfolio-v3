import { motion } from "framer-motion";
import { EASE_SMOOTH } from "../../../constants/animations";

const STATS = [
  { label: "Graduating In",       value: "2026" },
  { label: "Completed Projects",  value: "10+" },
  { label: "Companies Worked For", value: "3" },
] as const;

export const HeroStats = () => (
  <div className="lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-12 lg:pl-8 xl:pl-10">
    {STATS.map(({ label, value }, i) => (
      <motion.div
        key={label}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: EASE_SMOOTH }}
        className="text-center lg:text-left"
      >
        <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-2">
          {label}
        </h3>
        <p className="text-4xl md:text-5xl lg:text-4xl font-black text-[rgb(var(--text-primary))] leading-none">
          {value}
        </p>
      </motion.div>
    ))}
  </div>
);
