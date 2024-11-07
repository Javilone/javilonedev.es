import React from "react";

import "../init/init_styles.css";
import "../../styles.css";

import "../../pods/fadeIn";

export const Section0: React.FC = () => {
  return (
    <div className="init-global fadeIn0" id="init">
      <img className="init-id-foto" src="/images/javierll.jpeg" />
      <div>
        <p>
          Soy <span className="mark-up-text">Javier López. L., Programador y desarrollador Front End.</span>
        </p>
        <p>
          Apasionado por la <span className="mark-up-text">tecnología y el desarrollo de software</span> me dedico a crear soluciones que marquen la diferencia y mejoren la experiencia del usuario.
        </p>
        <p>
          Cuento con experiencia en <span className="mark-up-text">Javascript, Typescript, React, Bootstrap, SCSS,</span> y me esfuerzo por aportar valor a proyectos que busquen la excelencia y la innovación.
        </p>
        <p>
          Me motiva formar parte de un equipo donde pueda seguir aprendiendo, <span className="mark-up-text">crecer profesionalmente</span> y contribuir al éxito del equipo.
        </p>
      </div>
    </div>
  );
};
