import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { NavItem, SocialLink } from "../../types";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const SideNav = ({ isOpen, onClose, navItems, socialLinks }: SideNavProps) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 z-[1040]"
          style={{ background: "rgba(0,0,0,0.5)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        />

        {/* Panel */}
        <motion.aside
          className="fixed top-0 right-0 h-full z-[1050] flex flex-col"
          style={{
            width: "min(420px, 100vw)",
            background: "rgb(var(--bg-primary))",
            borderLeft: "1px solid rgb(var(--border-primary))",
          }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-8 h-16 shrink-0"
            style={{ borderBottom: "1px solid rgb(var(--border-primary))" }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[rgb(var(--text-tertiary))]">
              Navigation
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex items-center justify-center w-9 h-9 border border-[rgb(var(--border-primary))] text-[rgb(var(--text-primary))] hover:border-[rgb(var(--text-primary))] transition-colors duration-150"
            >
              <X size={16} strokeWidth={2} />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 flex flex-col justify-center px-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-baseline gap-5 border-t border-[rgb(var(--border-primary))] py-6 group"
                style={i === navItems.length - 1 ? { borderBottom: "1px solid rgb(var(--border-primary))" } : {}}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: EASE }}
              >
                <span className="text-[10px] font-bold tabular-nums text-[rgb(var(--text-tertiary))] w-6">
                  {item.number}
                </span>
                <span
                  className="text-3xl font-extrabold uppercase leading-none text-[rgb(var(--text-primary))] group-hover:opacity-50 transition-opacity duration-150"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {item.label}
                </span>
              </motion.a>
            ))}
          </nav>

          {/* Footer: social links */}
          <motion.div
            className="px-8 py-8 flex items-center gap-3 flex-wrap shrink-0"
            style={{ borderTop: "1px solid rgb(var(--border-primary))" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-2 border border-[rgb(var(--border-primary))] text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] hover:border-[rgb(var(--text-primary))] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.aside>
      </>
    )}
  </AnimatePresence>
);
