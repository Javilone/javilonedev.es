import { useState, createContext, useContext, useEffect } from "react";
import React from "react";

const ThemeContext = createContext<
  | {
      toggleTheme: () => void;
      darkMode: boolean;
    }
  | undefined
>(undefined);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return <ThemeContext.Provider value={{ toggleTheme, darkMode }}>{children}</ThemeContext.Provider>;
};