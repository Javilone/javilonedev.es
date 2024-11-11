import React from "react";
import ProjectCard from "./project_component";

const RickMortyProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl="https://github.com/Javilone/Master-Lemoncode-Entregas/tree/main/Modulo%2004/entrega-basica"
      imageUrl="/images/rickmorty.png"
      title="Buscador de GitHub y Rick & Morty - Aplicación React"
      description={
        <>
          Aplicación React que integra dos funcionalidades: una página para buscar organizaciones y miembros de GitHub mediante su <span className="mark-up-text">API</span> pública, y otra página dedicada a la API de Rick and Morty, donde los usuarios
          pueden explorar personajes de la serie con opciones de <span className="mark-up-text">filtrado y paginación</span>. <br />
          La aplicación ofrece una experiencia de <span className="mark-up-text">búsqueda optimizada</span>, combinando consumo de APIs y manejo eficiente del estado para una navegación fluida y responsiva.
          <a href="https://github.com/Javilone/Master-Lemoncode-Entregas/tree/main/Modulo%2004/entrega-basica" target="_blank">
            <p>Código</p>
          </a>
        </>
      }
      technologies={["HTML5", "CSS", "Typescript", "React", "Webpack"]}
    />
  );
};
export default RickMortyProject;
