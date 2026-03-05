import { motion } from "framer-motion";
import React from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;

/**
 * Minimal site-wide footer.
 * Drop at the bottom of any page — it adapts to the page background.
 *
 * Layout:
 *   desktop → [© year · Ayoub Lfatmi]   [ALFA]   [Home · Projects · Contact]
 *   mobile  → [ALFA] stacked above [nav row] stacked above [copyright]
 */
export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[rgb(var(--bg-primary))]"
      style={{ borderTop: "1px solid rgb(var(--border-primary))" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-7 md:py-9">
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-5 sm:gap-0 sm:justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-20px" }}
        >
          {/* ── Copyright (left on desktop, bottom on mobile) ── */}
          <p className="order-3 sm:order-1 text-[11px] font-medium tracking-[0.05em] text-[rgb(var(--text-tertiary))] select-none">
            © {year} · Ayoub Lfatmi
          </p>

          {/* ── Brand mark (center) ── */}
          <motion.a
            href="/"
            className="order-1 sm:order-2 text-[13px] font-bold font-serif tracking-[0.28em] uppercase text-[rgb(var(--text-primary))]"
            whileHover={{ opacity: 0.5 }}
            transition={{ duration: 0.18 }}
            aria-label="Back to home"
          >
            ALFA
          </motion.a>

          {/* ── Nav links (right on desktop, middle on mobile) ── */}
          <nav
            className="order-2 sm:order-3 flex items-center"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map((link, i) => (
              <React.Fragment key={link.label}>
                {i > 0 && (
                  <span
                    className="mx-3 text-[rgb(var(--border-primary))] select-none text-[11px]"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
                <motion.a
                  href={link.href}
                  className="text-[11px] font-semibold tracking-[0.05em] text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  {link.label}
                </motion.a>
              </React.Fragment>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};
