import { DesktopNavbar } from "./DesktopNav";
import { SideNav } from "./SideNav";
import { MenuToggle } from "../ui/menu/MenuToggle";
import { useNavigation } from "../../hooks/useNavigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageToggle } from "../ui/LanguageToggle";
import { motion } from "framer-motion";
import type { NavItem, SocialLink } from "../../types";
import { BackgroundLines } from "../ui/backgrounds/BackgroundLines";

interface NavbarProps {
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

export const Navbar = ({ navItems, socialLinks }: NavbarProps) => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    showMenuButton,
    showDesktopNav,
    isScrolled,
  } = useNavigation();

  const isMobileNavElevated = isScrolled || isMenuOpen;

  return (
    <>
      <BackgroundLines />

      <DesktopNavbar isVisible={showDesktopNav} navItems={navItems} />

      <motion.div
        initial={{ y: 0, opacity: 1 }}
        className="md:hidden fixed top-0 left-0 right-0 z-[1020] transition-all duration-300"
        style={
          isMobileNavElevated
            ? {
                background: "rgba(var(--bg-primary), 0.72)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderBottom: "1px solid rgb(var(--border-primary))",
                boxShadow: "0 8px 24px rgba(var(--shadow-color), 0.12)",
              }
            : undefined
        }
      >
        <div className="flex items-center justify-between h-20 px-6">
          <motion.a
            href="#home"
            whileTap={{ scale: 0.97 }}
            className="text-2xl font-bold font-serif text-[rgb(var(--text-primary))] tracking-tight"
          >
            ALFA
          </motion.a>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </motion.div>

      {!isMenuOpen && (
        <MenuToggle
          isVisible={showMenuButton}
          onClick={() => setIsMenuOpen(true)}
        />
      )}

      <SideNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
        socialLinks={socialLinks}
      />
    </>
  );
};
