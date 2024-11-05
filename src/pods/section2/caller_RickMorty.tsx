import React from "react";
import ProjectCard from "./project_component";

const RickMortyProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl=""
      imageUrl="/images/rickmorty.png"
      title="Buscador de GitHub y Rick & Morty - Aplicación React"
      description={
        <>
          Aplicación en React que integra dos funcionalidades: una página para buscar organizaciones y miembros de GitHub mediante su <span className="mark-up-text">API</span> pública, y otra página dedicada a la API de Rick and Morty, donde los usuarios
          pueden explorar personajes de la serie con opciones de <span className="mark-up-text">filtrado y paginación</span>. La aplicación ofrece una experiencia de <span className="mark-up-text">búsqueda optimizada</span>, combinando consumo de APIs y
          manejo eficiente del estado para una navegación fluida y responsiva.
        </>
      }
      technologies={["HTML5", "CSS", "Typescript", "React", "Webpack"]}
    />
  );
};
export default RickMortyProject;
