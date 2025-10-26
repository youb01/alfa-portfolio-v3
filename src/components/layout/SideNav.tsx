import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X } from "lucide-react";
import type { NavItem, SocialLink } from "../../types";
import { SocialLinks } from "../ui/SocialLink";
import { useState } from "react";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

export const SideNav = ({
  isOpen,
  onClose,
  navItems,
  socialLinks,
}: SideNavProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<{
    [key: number]: { x: number; y: number };
  }>({});
  const [isCloseHovered, setIsCloseHovered] = useState(false);

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sideNavVariants: Variants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const handleNavItemMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    setMousePosition((prev) => ({ ...prev, [index]: { x, y } }));
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1040] no-transition"
          />

          {/* Side Panel */}
          <motion.aside
            variants={sideNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 w-full sm:w-[85vw] md:w-[520px] h-full bg-[rgb(var(--bg-secondary))] border-l-2 border-[rgb(var(--border-primary))] z-[1050] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              onClick={onClose}
              onMouseEnter={() => setIsCloseHovered(true)}
              onMouseLeave={() => setIsCloseHovered(false)}
              className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[rgb(var(--bg-tertiary))] hover:bg-[rgb(var(--bg-elevated))] border-2 border-[rgb(var(--border-primary))] hover:border-[rgb(var(--border-hover))] text-[rgb(var(--interactive-default))] transition-all duration-200 z-10 shadow-md"
              aria-label="Close menu"
            >
              <motion.div
                animate={{
                  rotate: isCloseHovered ? 90 : 0,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
              </motion.div>
            </motion.button>

            {/* Content */}
            <div className="flex flex-col h-full overflow-y-auto py-20 md:py-16 px-6 md:px-10 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-10 md:mb-12 text-center"
              >
                <h2 className="text-[16px] md:text-xs font-semibold text-[rgb(var(--text-tertiary))] uppercase tracking-mega mb-4 md:mb-6">
                  Navigation
                </h2>
                <div className="h-px bg-gradient-to-r from-transparent via-[rgb(var(--border-primary))] to-transparent" />
              </motion.div>

              <nav className="flex-1 space-y-2 md:space-y-3 mb-6 md:mb-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.28 + index * 0.06 }}
                    onMouseMove={(e) => handleNavItemMouseMove(e, index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      setMousePosition((prev) => ({
                        ...prev,
                        [index]: { x: 0, y: 0 },
                      }));
                    }}
                    onClick={onClose}
                    className="flex items-center group py-1.5 md:py-2 transition-all duration-200"
                  >
                    <motion.div
                      className="flex items-center w-full"
                      animate={{
                        x: mousePosition[index]?.x || 0,
                        y: mousePosition[index]?.y || 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      <motion.span
                        className="inline-block w-10 md:w-14 text-[rgb(var(--text-tertiary))] group-hover:text-[rgb(var(--text-primary))] font-mono text-xs md:text-sm font-semibold transition-colors duration-200"
                        animate={{
                          opacity: hoveredIndex === index ? [1, 0.6, 1] : 1,
                        }}
                        transition={{ duration: 0.35 }}
                      >
                        {hoveredIndex === index ? (
                          <span className="text-2xl md:text-3xl leading-none">
                            ●
                          </span>
                        ) : (
                          item.number
                        )}
                      </motion.span>

                      <motion.span
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[rgb(var(--text-primary))] transition-all duration-200"
                        animate={{
                          letterSpacing:
                            hoveredIndex === index ? "0.015em" : "0em",
                        }}
                      >
                        {item.label}
                      </motion.span>
                    </motion.div>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 mt-auto border-t-2 border-[rgb(var(--border-primary))]"
              >
                <SocialLinks links={socialLinks} />
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
