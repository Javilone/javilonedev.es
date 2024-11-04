import { useTheme } from "./context/themeContext";
import React from "react";

import "../theme.css";

const Home = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <div className="theme-container">
      <img className={`theme-icon heartbeat ${darkMode ? "dark" : "light"}`} src="/icons/theme-icon.svg" alt="Toggle Theme" onClick={toggleTheme} />
    </div>
  );
};

export default Home;
