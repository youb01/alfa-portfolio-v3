import { motion } from "framer-motion";
import { EASE_SMOOTH } from "../../../constants/animations";
import { BIRTH_YEAR } from "../../../data/about";
import { projectsData } from "../../../data/projects";

const age = new Date().getFullYear() - BIRTH_YEAR;

export const HeroBio = () => (
  <div className="hidden lg:block lg:col-span-3 space-y-10 lg:pr-8 xl:pr-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE_SMOOTH }}
    >
      <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-3">
        Biography
      </h3>
      <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed max-w-[240px] font-serif">
        I'm a {age}-year-old guy from the Netherlands, currently studying
        Software Engineering at the University of Applied Sciences in
        The Hague.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: EASE_SMOOTH }}
    >
      <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-3">
        Contact
      </h3>
      <div className="space-y-1 text-sm text-[rgb(var(--text-secondary))] font-serif">
        <p>Leiden, the Netherlands</p>
        <a
          href="mailto:lfatmi.ayoub@gmail.com"
          className="block hover:text-[rgb(var(--text-primary))] transition-colors"
        >
          lfatmi.ayoub@gmail.com
        </a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: EASE_SMOOTH }}
    >
      <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-3">
        Projects
      </h3>
      <div className="space-y-1 text-sm text-[rgb(var(--text-secondary))] font-serif">
        {projectsData.map((p) => (
          <p key={p.id}>
            {p.title} | {p.year}
          </p>
        ))}
      </div>
    </motion.div>
  </div>
);
