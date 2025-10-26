import { useEffect, useState, type ReactNode } from "react";
import type { Theme } from "../types";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) return "dark";
    if (htmlElement.classList.contains("light")) return "light";

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
    setIsTransitioning(true);
    root.classList.remove("light", "dark");

    requestAnimationFrame(() => {
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
      setTimeout(() => setIsTransitioning(false), 300);
    });
  }, [theme]);

  const toggleTheme = () => {
    if (!isTransitioning) {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
