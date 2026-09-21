import { motion } from "framer-motion";
import { EASE_SMOOTH } from "../../../constants/animations";
import { BIRTH_YEAR } from "../../../data/about";

interface HeroBioProps {
  isRevealed: boolean;
}

const age = new Date().getFullYear() - BIRTH_YEAR;

const EXPERTISE = [
  "Frontend Development",
  "Backend Engineering",
  "Full-Stack Architecture",
  "UI / UX Design",
];

const vis  = (delay = 0) => ({ opacity: 1, y: 0,  transition: { duration: 0.7, delay, ease: EASE_SMOOTH } });
const hid  = ()           => ({ opacity: 0, y: 16 });
const visO = (delay = 0) => ({ opacity: 1,         transition: { duration: 0.5, delay, ease: EASE_SMOOTH } });
const hidO = ()           => ({ opacity: 0 });

export const HeroBio = ({ isRevealed }: HeroBioProps) => (
  <div className="hidden lg:flex flex-col lg:col-span-3 gap-8 lg:pr-8 xl:pr-12">

    {/* Availability */}
    <motion.div
      initial={hidO()}
      animate={isRevealed ? visO(0.05) : hidO()}
      className="flex items-center gap-2"
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ background: "rgb(var(--text-tertiary))" }}
      />
      <span
        className="text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ color: "rgb(var(--text-tertiary))" }}
      >
        Available for work
      </span>
    </motion.div>

    {/* Divider */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={isRevealed ? { opacity: 1, scaleX: 1, transition: { duration: 0.5, delay: 0.1, ease: EASE_SMOOTH } } : { opacity: 0, scaleX: 0 }}
      className="w-full h-px"
      style={{ background: "rgb(var(--border-primary))", transformOrigin: "left" }}
    />

    {/* Biography */}
    <motion.div
      initial={hid()}
      animate={isRevealed ? vis(0.15) : hid()}
    >
      <h3 className="text-[9px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.2em] mb-3">
        Biography
      </h3>
      <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed font-serif">
        {age}-year-old software engineer from the Netherlands, studying at the
        University of Applied Sciences in The Hague. I care deeply about clean
        code, great UX, and building things that matter.
      </p>
    </motion.div>

    {/* Contact */}
    <motion.div
      initial={hid()}
      animate={isRevealed ? vis(0.22) : hid()}
    >
      <h3 className="text-[9px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.2em] mb-3">
        Contact
      </h3>
      <div className="space-y-1 text-sm font-serif" style={{ color: "rgb(var(--text-secondary))" }}>
        <p>Leiden, the Netherlands</p>
        <a
          href="mailto:lfatmi.ayoub@gmail.com"
          className="block transition-colors duration-200 hover:text-[rgb(var(--text-primary))]"
        >
          lfatmi.ayoub@gmail.com
        </a>
      </div>
    </motion.div>

    {/* Expertise */}
    <motion.div
      initial={hid()}
      animate={isRevealed ? vis(0.3) : hid()}
    >
      <h3 className="text-[9px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.2em] mb-3">
        Expertise
      </h3>
      <ul className="space-y-1.5">
        {EXPERTISE.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span
              className="w-3 h-px flex-shrink-0"
              style={{ background: "rgb(var(--text-tertiary))" }}
            />
            <span className="text-sm font-serif" style={{ color: "rgb(var(--text-secondary))" }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>

  </div>
);
