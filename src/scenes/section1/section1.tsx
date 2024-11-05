import React from "react";

import "../section1/section1_styles.css";
import "../section1/animista_anims.css";

import "../../pods/fadeIn";

export const Section1: React.FC = () => {
  return (
    <div className="section-global fadeIn1">
      <h3 className="section-title">Skills</h3>
      <div className="section1-icons">
        <img className="heartbeat" src="/icons/html5.svg" />
        <img className="heartbeat" src="/icons/css3.svg" />
        <img className="heartbeat" src="/icons/sass.svg" />
        <img className="heartbeat" src="/icons/javascript.svg" />
        <img className="heartbeat" src="/icons/typescript.svg" />
        <img className="heartbeat" src="/icons/mysql.svg" />
        <img className="heartbeat" src="/icons/bootstrap.svg" />
        <img className="heartbeat" src="/icons/figma.svg" />
        <img className="heartbeat theme-git-icon" src="/icons/github.svg" />
        <img className="heartbeat" src="/icons/vite.svg" />
      </div>
      <div className="section1-soft-skills">
        <p>
          <span className="mark-up-text">Adaptabilidad</span>: Capacidad para adaptarme a nuevas tecnologías y entornos de trabajo.
        </p>
        <p>
          <span className="mark-up-text">Comunicación efectiva</span>: Fuerte comunicación para colaborar con equipos multidisciplinarios.
        </p>
        <p>
          <span className="mark-up-text">Empatía</span>: Comprensión de las necesidades del usuario para mejorar la experiencia de usuario.
        </p>
        <p>
          <span className="mark-up-text">Gestión del tiempo</span>: Habilidad para cumplir con plazos de entrega en proyectos.
        </p>
        <p>
          <span className="mark-up-text">Pensamiento crítico</span>: Análisis de problemas y toma de decisiones informadas.
        </p>
        <p>
          <span className="mark-up-text">Resolución de problemas</span>: Enfoque proactivo para abordar desafíos técnicos.
        </p>
        <p>
          <span className="mark-up-text">Trabajo en equipo</span>: Colaboración efectiva para lograr objetivos comunes.
        </p>
        <p>
          <span className="mark-up-text">Visión global</span>: Comprensión del contexto del proyecto y su impacto.
        </p>
      </div>
      <img className="scroll-up-down" src="/icons/scroll-up-down.svg" />
    </div>
  );
};
