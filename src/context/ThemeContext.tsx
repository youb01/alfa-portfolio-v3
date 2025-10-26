import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Theme, ThemeContextType } from "../types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Read the theme that was already applied by the blocking script
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) return "dark";
    if (htmlElement.classList.contains("light")) return "light";

    // Fallback (should rarely happen)
    return (
      (localStorage.getItem("theme") as Theme) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    // Start transition
    setIsTransitioning(true);

    // Remove both classes first
    root.classList.remove("light", "dark");

    // Use requestAnimationFrame for smooth transition
    requestAnimationFrame(() => {
      // Add the current theme class
      root.classList.add(theme);

      // Save to localStorage
      localStorage.setItem("theme", theme);

      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    });
  }, [theme]);

  const toggleTheme = () => {
    if (!isTransitioning) {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
