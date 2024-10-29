import React from "react";
import { Link } from "react-scroll";

import "../header/header_styles.css";

export const AppHeader: React.FC = () => {
  return (
    <>
      <div className="app-style">
        <Link to="0" smooth={true} duration={500}>
          <h1>javilonedev</h1>
        </Link>
        <h4>= Frontend Developer =</h4>
        <span>
          <Link to="1" smooth={true} duration={500}>
            Habilidades
          </Link>
          <Link to="2" smooth={true} duration={500}>
            Proyectos
          </Link>
          <Link to="3" smooth={true} duration={500}>
            CV
          </Link>
          <Link to="4" smooth={true} duration={500}>
            Contacto
          </Link>
        </span>
      </div>
    </>
  );
};
