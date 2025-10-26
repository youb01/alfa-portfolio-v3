import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context || context.theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
