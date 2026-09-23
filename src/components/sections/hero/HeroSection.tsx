import { motion } from "framer-motion";
import type { SocialLink } from "../../../types";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { HeroBio } from "./HeroBio";
import { HeroStats } from "./HeroStats";
import { EASE_SMOOTH } from "../../../constants/animations";
import heroThumbnail from "../../../assets/hero/hero-thumbnail.png";

interface HeroProps {
  socialLinks: SocialLink[];
  isRevealed: boolean;
}

// ─── Ping dot ─────────────────────────────────────────────────────────────────

const PingDot = () => (
  <span className="relative flex items-center justify-center w-3 h-3 flex-shrink-0">
    <span
      className="absolute inline-flex rounded-full animate-ping"
      style={{ width: "10px", height: "10px", background: "rgb(var(--text-tertiary))", opacity: 0.45 }}
    />
    <span
      className="relative inline-flex rounded-full"
      style={{ width: "6px", height: "6px", background: "rgb(var(--text-tertiary))" }}
    />
  </span>
);

// ─── Animation helpers ────────────────────────────────────────────────────────

const vis = (delay = 0) => ({
  opacity: 1,
  y: 0,
  transition: { duration: 0.75, delay, ease: EASE_SMOOTH },
});
const hid = () => ({ opacity: 0, y: 20 });
const visO = (delay = 0) => ({
  opacity: 1,
  transition: { duration: 0.6, delay, ease: EASE_SMOOTH },
});
const hidO = () => ({ opacity: 0 });

export const Hero = ({ socialLinks, isRevealed }: HeroProps) => (
  <section
    id="home"
    className="relative min-h-screen md:h-screen snap-start snap-always flex items-center justify-center overflow-hidden bg-[rgb(var(--bg-primary))] pt-20 pb-10 md:pt-20 md:pb-0"
  >
    <BackgroundLines />

    <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <HeroBio isRevealed={isRevealed} />

        {/* ── Center Column ── */}
        <div className="lg:col-span-6 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.span
            initial={hidO()}
            animate={isRevealed ? visO(0) : hidO()}
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-[rgb(var(--text-tertiary))] mb-4 md:mb-7"
          >
            Full Stack Developer
          </motion.span>

          {/* Portrait */}
          <motion.div
            initial={hid()}
            animate={isRevealed ? vis(0.08) : hid()}
            className="relative w-full max-w-[148px] sm:max-w-[190px] lg:max-w-[250px] mb-4 md:mb-7"
          >
            {/* Depth layers */}
            <div
              className="absolute border border-[rgb(var(--border-secondary))] opacity-30"
              style={{ inset: 0, transform: "translate(8px, 8px)" }}
            />
            <div
              className="absolute border border-[rgb(var(--border-secondary))] opacity-15"
              style={{ inset: 0, transform: "translate(16px, 16px)" }}
            />

            {/* Image */}
            <div
              className="relative overflow-hidden border border-[rgb(var(--border-primary))]"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={heroThumbnail}
                alt="Ayoub Lfatmi"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(100%) contrast(1.08)" }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "10px",
                  border: "1px solid rgb(var(--text-primary) / 0.22)",
                }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={hid()}
            animate={isRevealed ? vis(0.16) : hid()}
            className="mb-3"
          >
            <h1
              className="font-display font-extrabold leading-[0.9] tracking-tight text-[rgb(var(--text-primary))]"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)" }}
            >
              AYOUB
            </h1>
            <h2
              className="font-display font-extrabold leading-[0.9] tracking-tight text-[rgb(var(--text-secondary))]"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)" }}
            >
              LFATMI
            </h2>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={hidO()}
            animate={isRevealed ? visO(0.24) : hidO()}
            className="text-[10px] font-medium tracking-[0.18em] uppercase text-[rgb(var(--text-tertiary))] mb-4 md:mb-7"
          >
            Leiden · the Netherlands
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={hid()}
            animate={isRevealed ? vis(0.3) : hid()}
            className="flex items-center justify-center gap-3 mb-5 md:mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex items-center justify-center border border-[rgb(var(--border-primary))] hover:border-[rgb(var(--border-hover))] hover:bg-[rgb(var(--text-primary))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--bg-primary))] transition-colors duration-200"
                aria-label={link.label}
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile info block */}
          <motion.div
            initial={hidO()}
            animate={isRevealed ? visO(0.38) : hidO()}
            className="flex lg:hidden flex-col items-center gap-5 w-full pt-5 border-t border-[rgb(var(--border-primary))]"
          >
            <div className="flex items-center gap-2">
              <PingDot />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--text-tertiary))]">
                Available for work
              </span>
            </div>

            <div className="grid grid-cols-3 w-full">
              {[
                { value: "7",   label: "Months to\nGraduation" },
                { value: "12+", label: "Completed\nProjects"   },
                { value: "5",   label: "Companies\nWorked For" },
              ].map(({ value, label }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 py-4 border-t border-[rgb(var(--border-primary))]"
                  style={{ borderLeft: i > 0 ? "1px solid rgb(var(--border-primary))" : "none" }}
                >
                  <span
                    className="font-display font-extrabold leading-none text-[rgb(var(--text-primary))]"
                    style={{ fontSize: "clamp(1.5rem, 6vw, 2rem)" }}
                  >
                    {value}
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[rgb(var(--text-tertiary))] text-center whitespace-pre-line leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={hidO()}
            animate={isRevealed ? visO(0.5) : hidO()}
            className="hidden md:flex w-6 h-10 border-2 border-[rgb(var(--border-primary))] rounded-full items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[rgb(var(--text-tertiary))] rounded-full"
            />
          </motion.div>
        </div>

        <HeroStats isRevealed={isRevealed} />
      </div>
    </div>
  </section>
);
