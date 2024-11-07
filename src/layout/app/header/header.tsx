import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import "../header/header_styles.css";
import Home from "../../../core/home";
import { ThemeProvider } from "../../../core/context/themeContext";

export const AppHeader: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleScroll = () => {
    // Obtiene la posición del scroll
    const scrollPosition = window.scrollY;

    // Comprueba la posición de cada <hr> para actualizar el enlace activo
    for (let i = 0; i <= 4; i++) {
      const hrElement = document.getElementById(`${i}`);
      if (hrElement) {
        const rect = hrElement.getBoundingClientRect();
        // Comprueba si el <hr> está en la ventana de visualización
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setActiveLink(`section${i}`);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app-style">
        <ThemeProvider>
          <Home />
        </ThemeProvider>
        <Link to="0" smooth={true} duration={500}>
          <h1>javilonedev</h1>
        </Link>
        <h4>= Frontend Developer =</h4>
        <span className="header-span">
          <Link to="1" smooth={true} duration={500}>
            <div className={`activeAnchor ${activeLink === "section1" ? "anchorActivated" : ""}`}>Skills</div>
          </Link>
          <Link to="2" smooth={true} duration={500}>
            <div className={`activeAnchor ${activeLink === "section2" ? "anchorActivated" : ""}`}>Proyectos</div>
          </Link>
          <Link to="4" smooth={true} duration={500}>
            <div className={`activeAnchor ${activeLink === "section4" ? "anchorActivated" : ""}`}>Contacto</div>
          </Link>
          <Link to="3" smooth={true} duration={500}>
            <div className={`activeAnchor ${activeLink === "section3" ? "anchorActivated" : ""}`}>Mí</div>
          </Link>
        </span>
      </div>
    </>
  );
};
