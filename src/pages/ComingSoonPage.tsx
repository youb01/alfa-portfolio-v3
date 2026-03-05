import { motion } from "framer-motion";

export function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-primary text-primary flex flex-col items-center justify-center relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(var(--text-primary)) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgb(var(--bg-primary)) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">

        {/* Logo */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-lora text-sm font-medium tracking-[0.3em] uppercase text-tertiary mb-16 select-none"
        >
          ALFA
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-lora text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.1] tracking-tight text-balance mb-6"
        >
          Coming Soon
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-px bg-primary mb-8 origin-center"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-secondary text-base sm:text-lg leading-relaxed text-balance max-w-sm"
        >
          A portfolio worth the wait. <br className="hidden sm:block" />
          Check back soon.
        </motion.p>
      </div>

      {/* Bottom label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-10 text-disabled text-xs tracking-widest uppercase select-none"
      >
        In development
      </motion.div>
    </div>
  );
}
