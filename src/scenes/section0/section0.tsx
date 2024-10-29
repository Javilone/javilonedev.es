import React from "react";

import "../init/init_styles.css";

export const Section0: React.FC = () => {
  return (
    <>
      <div className="init-global" id="init">
        <img className="init-id-foto" src="/images/javierll.jpeg" />
        <div>
          <p>
            Soy <span className="mark-up-text">Javier López. L. Programador y desarrollador Front End.</span>
          </p>
          <p>
            Mi pasión por la <span className="mark-up-text">tecnología y el desarrollo de software</span> me impulsa a <span className="mark-up-text">crear soluciones que realmente marquen la diferencia.</span>
          </p>
          <p>
            Con conocimientos en Javascript, Typescript, React, Bootstrap, SCSS, entre otros, busco <span className="mark-up-text">aportar en proyectos</span> donde mi trabajo añada valor y mejore la{" "}
            <span className="mark-up-text">experiencia de usuario.</span>{" "}
          </p>
          <p>
            Me entusiasma formar parte de un equipo donde pueda aprender, <span className="mark-up-text">crecer y contribuir</span> al éxito compartido.
          </p>
        </div>
      </div>
    </>
  );
};
