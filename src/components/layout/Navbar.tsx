import { DesktopNavbar } from "./DesktopNav";
import { SideNav } from "./SideNav";
import { MenuToggle } from "../ui/menu/MenuToggle";
import { useNavigation } from "../../hooks/useNavigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import { motion } from "framer-motion";
import type { NavItem, SocialLink } from "../../types";

interface NavbarProps {
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

export const Navbar = ({ navItems, socialLinks }: NavbarProps) => {
  const { isMenuOpen, setIsMenuOpen, showMenuButton, showDesktopNav } =
    useNavigation();

  return (
    <>
      {/* Desktop Navbar - Shows initially, hides on scroll */}
      <DesktopNavbar isVisible={showDesktopNav} navItems={navItems} />

      {/* Mobile Header - Always visible on mobile */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        className="md:hidden fixed top-0 left-0 right-0 z-[1020] bg-[rgb(var(--bg-primary)/0.97)] backdrop-blur-xl border-b border-[rgb(var(--border-primary))]"
      >
        <div className="flex items-center justify-between h-20 px-6">
          <motion.a
            href="#home"
            whileTap={{ scale: 0.97 }}
            className="text-2xl font-bold font-serif text-[rgb(var(--text-primary))] tracking-tight"
          >
            ALFA
          </motion.a>
          <ThemeToggle />
        </div>
      </motion.div>

      {/* Menu Toggle Button - Shows on scroll for both mobile and desktop */}
      {!isMenuOpen && (
        <MenuToggle
          isVisible={showMenuButton}
          onClick={() => setIsMenuOpen(true)}
        />
      )}

      {/* Side Navigation - Works for both mobile and desktop */}
      <SideNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
        socialLinks={socialLinks}
      />
    </>
  );
};
