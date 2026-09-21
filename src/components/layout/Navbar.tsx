import { Menu } from "lucide-react";
import { useNavigation } from "../../hooks/useNavigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import { SideNav } from "./SideNav";
import type { NavItem, SocialLink } from "../../types";

interface NavbarProps {
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

export const Navbar = ({ navItems, socialLinks }: NavbarProps) => {
  const { isMenuOpen, setIsMenuOpen, isScrolled } = useNavigation();

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1020] transition-all duration-300"
        style={
          isScrolled
            ? {
                background: "rgba(var(--bg-primary), 0.88)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: "1px solid rgb(var(--border-primary))",
              }
            : { background: "transparent" }
        }
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 h-16 flex items-center justify-between">

          {/* Wordmark */}
          <a
            href="/"
            className="text-[13px] font-extrabold uppercase tracking-[0.28em] text-[rgb(var(--text-primary))] hover:opacity-60 transition-opacity duration-150"
          >
            ALFA
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-9 h-9 border border-[rgb(var(--border-primary))] text-[rgb(var(--text-primary))] hover:border-[rgb(var(--text-primary))] transition-colors duration-150"
            >
              <Menu size={16} strokeWidth={2} />
            </button>
          </div>

        </div>
      </nav>

      <SideNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
        socialLinks={socialLinks}
      />
    </>
  );
};
