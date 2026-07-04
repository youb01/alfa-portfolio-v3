import { motion } from "framer-motion";
import type { SocialLink } from "../../../types";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";
import { HeroBio } from "./HeroBio";
import { HeroStats } from "./HeroStats";
import { EASE_SMOOTH } from "../../../constants/animations";
import heroThumbnail from "../../../assets/hero/hero-thumbnail.png";

interface HeroProps {
  socialLinks: SocialLink[];
}

export const Hero = ({ socialLinks }: HeroProps) => (
  <section
    id="home"
    className="relative h-screen snap-start snap-always flex items-center justify-center overflow-hidden bg-[rgb(var(--bg-primary))] pt-16 md:pt-20"
  >
    <BackgroundLines />

    <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <HeroBio />

        {/* ── Center Column ── */}
        <div className="lg:col-span-6 flex flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH }}
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-[rgb(var(--text-tertiary))] mb-7"
          >
            Software Engineer · Web Developer
          </motion.span>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.1, ease: EASE_SMOOTH }}
            className="relative w-full max-w-[190px] sm:max-w-[210px] md:max-w-[220px] mb-7"
          >
            {/* Depth layers behind the image */}
            <div
              className="absolute border border-[rgb(var(--border-primary))] opacity-40"
              style={{ inset: 0, transform: "translate(10px, 10px)" }}
            />
            <div
              className="absolute border border-[rgb(var(--border-primary))] opacity-20"
              style={{ inset: 0, transform: "translate(20px, 20px)" }}
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
                style={{ filter: "grayscale(100%) contrast(1.1)" }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_SMOOTH }}
            className="mb-2"
          >
            <h1 className="text-4xl sm:text-5xl font-black font-serif text-[rgb(var(--text-primary))] leading-none tracking-tight">
              AYOUB
            </h1>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-[rgb(var(--text-secondary))] leading-none tracking-tight mt-1">
              LFATMI
            </h2>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE_SMOOTH }}
            className="text-xs font-medium tracking-[0.12em] text-[rgb(var(--text-tertiary))] mb-7"
          >
            Based in the Netherlands
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE_SMOOTH }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.07, duration: 0.3 }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgb(var(--border-primary))] hover:border-[rgb(var(--border-hover))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors duration-200"
                aria-label={link.label}
              >
                <span className="w-4 h-4 flex items-center justify-center">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-[rgb(var(--border-primary))] rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-[rgb(var(--text-tertiary))] rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        <HeroStats />
      </div>
    </div>
  </section>
);
