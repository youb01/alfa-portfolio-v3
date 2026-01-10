import { motion } from "framer-motion";
import type { SocialLink } from "../../../types";
import { BackgroundLines } from "../../ui/backgrounds/BackgroundLines";

interface HeroProps {
  socialLinks: SocialLink[];
}

export const Hero = ({ socialLinks }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative h-screen snap-start snap-always flex items-center justify-center overflow-hidden bg-[rgb(var(--bg-primary))] pt-16 md:pt-20"
    >
      {/* Background lines for depth */}
      <BackgroundLines />

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start lg:items-center">
          {/* Left Column - Info (Desktop only) */}
          <div className="hidden lg:block lg:col-span-3 space-y-10">
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-3">
                Biography
              </h3>
              <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed max-w-[240px] font-serif">
                I'm an 21-year-old guy from the Netherlands, currently studying
                Computer Science at the University of Applied Sciences in The
                Hague.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-3">
                Contact
              </h3>
              <div className="space-y-1 text-sm text-[rgb(var(--text-secondary))] font-serif">
                <p>Leiden, the Netherlands</p>
                <a
                  href="mailto:alfa@gmail.com"
                  className="block hover:text-[rgb(var(--text-primary))] transition-colors"
                >
                  alfa@gmail.com
                </a>
                <a
                  href="tel:+31612345678"
                  className="block hover:text-[rgb(var(--text-primary))] transition-colors"
                >
                  +31612345678
                </a>
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-3">
                Projects
              </h3>
              <div className="space-y-1 text-sm text-[rgb(var(--text-secondary))] font-serif">
                <p>Portfolio v1 - 2022</p>
                <p>Oak - 2022</p>
                <p>Portfolio v2 - 2023</p>
                <p>Stichting Accessibility - 2024</p>
                <p>GetMore Systems (Internship) - 2024</p>
              </div>
            </motion.div>
          </div>

          {/* Center Column - Main Content */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[rgb(var(--text-primary))] leading-[1.15] tracking-tight mb-2">
                Hi, I'm A
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[rgb(var(--text-primary))] leading-[1.15] tracking-tight mb-2">
                Software Engineer
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[rgb(var(--text-primary))] leading-[1.15] tracking-tight mb-4">
                and Web developer
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-serif text-[rgb(var(--text-secondary))] leading-relaxed">
                Based in the Netherlands
              </p>
            </motion.div>

            {/* Image with oval frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] mb-6 md:mb-8"
            >
              {/* Oval frame */}
              <div className="relative aspect-[5/6] rounded-[50%] overflow-hidden border-[3px] border-[rgb(var(--border-primary))] bg-[rgb(var(--bg-secondary))] shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 dark:from-gray-800 dark:via-gray-900 dark:to-black flex items-center justify-center relative">
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="grid"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 20 0 L 0 0 0 20"
                            fill="none"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  <img
                    src="https://i.pinimg.com/736x/b0/20/a4/b020a4bfad3576bac831fc283b5c9f83.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.08, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgb(var(--bg-tertiary))] hover:bg-[rgb(var(--bg-elevated))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] border border-[rgb(var(--border-primary))] hover:border-[rgb(var(--border-hover))] transition-all duration-200"
                  aria-label={link.label}
                >
                  <span className="w-5 h-5">{link.icon}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll indicator - High z-index ensures visibility above background lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="relative z-20"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-6 h-10 border-2 border-[rgb(var(--border-primary))] rounded-full flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 bg-[rgb(var(--text-tertiary))] rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-12">
            {/* Graduating In */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-2">
                Graduating In
              </h3>
              <p className="text-4xl md:text-5xl lg:text-4xl font-black text-[rgb(var(--text-primary))] leading-none">
                2026
              </p>
            </motion.div>

            {/* Completed Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-2">
                Completed Projects
              </h3>
              <p className="text-4xl md:text-5xl lg:text-4xl font-black text-[rgb(var(--text-primary))] leading-none">
                10+
              </p>
            </motion.div>

            {/* Companies Worked For */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-[10px] font-bold text-[rgb(var(--text-tertiary))] uppercase tracking-[0.15em] mb-2">
                Companies Worked For
              </h3>
              <p className="text-4xl md:text-5xl lg:text-4xl font-black text-[rgb(var(--text-primary))] leading-none">
                3
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
