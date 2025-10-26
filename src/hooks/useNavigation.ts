import { useState, useEffect } from "react";

export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showDesktopNav, setShowDesktopNav] = useState(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const SCROLL_THRESHOLD = 40; // Trigger earlier - after just 40px

          if (currentScrollY > SCROLL_THRESHOLD) {
            setShowMenuButton(true);
            setShowDesktopNav(false);
          } else {
            setShowMenuButton(false);
            setShowDesktopNav(true);
            setIsMenuOpen(false); // Close menu when back at top
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    // Add scroll listener with passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    setIsMenuOpen,
    showMenuButton,
    showDesktopNav,
  };
};
