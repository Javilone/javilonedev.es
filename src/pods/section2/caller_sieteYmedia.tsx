import React from "react";
import ProjectCard from "./project_component";

const SieteYMediaProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl="https://siete-y-media.vercel.app"
      imageUrl="/images/sieteYmedia.png"
      title="Siete y media"
      description={
        <>
          Juego en JavaScript basado en el clásico "Siete y Media", en el cual el objetivo es acercarse lo máximo posible a un valor total de 7.5 sin sobrepasarlo. La aplicación emplea{" "}
          <span className="mark-up-text">algoritmos para la lógica del juego y el manejo de puntuaciones</span>, así como funciones que gestionan las acciones del jugador y del sistema. Este proyecto resalta el uso de estructuras de control y funciones,
          proporcionando una experiencia de juego entretenida y educativa.
        </>
      }
      technologies={["HTML5", "CSS", "Javascript"]}
    />
  );
};
export default SieteYMediaProject;
