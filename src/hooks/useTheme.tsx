import { useState } from "react";

import type { Theme } from "../components/NavBar";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (!stored) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList = 'dark'
      return "dark";
    }
    document.documentElement.classList = stored;
    return stored;
  });

  const toggleTheme = (dataTheme: Theme) => {
    setTheme(dataTheme);
    localStorage.setItem('theme',dataTheme)
    document.documentElement.classList.toggle("dark");
  };

  return {
    //Props
    theme,

    //method
    toggleTheme,
  };
};
