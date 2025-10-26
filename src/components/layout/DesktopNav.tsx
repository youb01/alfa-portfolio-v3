import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";
import type { NavItem } from "../../types";

interface DesktopNavbarProps {
  isVisible: boolean;
  navItems: NavItem[];
}

export const DesktopNavbar = ({ isVisible, navItems }: DesktopNavbarProps) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.nav
          key="desktop-nav"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block fixed top-0 left-0 right-0 z-[1025] bg-[rgb(var(--bg-primary)/0.98)] backdrop-blur-xl border-b border-[rgb(var(--border-primary))] shadow-sm"
        >
          <div className="max-w-[1600px] mx-auto px-8 lg:px-12 xl:px-16">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.a
                href="#home"
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-2xl font-bold font-serif tracking-tight text-[rgb(var(--text-primary))]"
              >
                ALFA
              </motion.a>

              {/* Desktop Navigation */}
              <div className="flex items-center gap-10">
                {navItems.slice(0, 3).map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 1 }}
                    whileHover={{ y: -2 }}
                    className="relative text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] font-medium font-sans transition-colors duration-200 text-sm tracking-wide group"
                  >
                    {item.label}
                    {/* Underline effect */}
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[rgb(var(--text-primary))] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </motion.a>
                ))}
                <ThemeToggle />
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
