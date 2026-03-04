import { useState, useEffect } from "react";

export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showDesktopNav, setShowDesktopNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const SCROLL_THRESHOLD = 40;

          setIsScrolled(currentScrollY > 0);

          if (currentScrollY > SCROLL_THRESHOLD) {
            setShowMenuButton(true);
            setShowDesktopNav(false);
          } else {
            setShowMenuButton(false);
            setShowDesktopNav(true);
            setIsMenuOpen(false);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    setIsMenuOpen,
    showMenuButton,
    showDesktopNav,
    isScrolled,
  };
};
