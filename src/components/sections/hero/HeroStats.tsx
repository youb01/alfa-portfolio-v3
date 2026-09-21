import { motion } from "framer-motion";
import { EASE_SMOOTH } from "../../../constants/animations";

interface HeroStatsProps {
  isRevealed: boolean;
}

const STATS = [
  { index: "01", label: "Graduating In", value: "7" },
  { index: "02", label: "Completed Projects", value: "12+" },
  { index: "03", label: "Companies Worked For", value: "5" },
] as const;

const vis = (delay = 0) => ({
  opacity: 1,
  y: 0,
  transition: { duration: 0.7, delay, ease: EASE_SMOOTH },
});
const hid = () => ({ opacity: 0, y: 16 });

export const HeroStats = ({ isRevealed }: HeroStatsProps) => (
  <div className="hidden lg:grid lg:col-span-3 lg:grid-cols-1 lg:pl-8 xl:pl-10">
    {STATS.map(({ index, label, value }, i) => (
      <motion.div
        key={label}
        initial={hid()}
        animate={isRevealed ? vis(0.08 + i * 0.1) : hid()}
        className="py-5 lg:py-7 border-t border-[rgb(var(--border-primary))] flex flex-col gap-1.5 text-center lg:text-left"
      >
        <span className="text-[9px] font-mono text-[rgb(var(--text-tertiary))] tracking-[0.08em]">
          {index}
        </span>
        <p
          className="font-display font-extrabold leading-none text-[rgb(var(--text-primary))]"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          {value}
        </p>
        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[rgb(var(--text-tertiary))]">
          {label}
        </p>
      </motion.div>
    ))}
    <div className="hidden lg:block border-t border-[rgb(var(--border-primary))]" />
  </div>
);
