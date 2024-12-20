import React from "react";
import ProjectCard from "./project_component";

const JavilonedevProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl=""
      imageUrl="/images/javilonedev.png"
      title="Portfolio personal - Javilonedev"
      description={
        <>
          Este portafolio fue creado con tecnologías como React, TypeScript y Webpack, con el objetivo de mostrar mis habilidades y proyectos como desarrollador Front-End. La aplicación es completamente responsiva y permite cambiar el tema de color,
          ofreciendo una experiencia de usuario personalizada. <br />A través de este proyecto, he podido aplicar mis conocimientos en desarrollo web y demostrar mi enfoque en la calidad del código y el diseño funcional.
          <a href="https://github.com/Javilone/javilonedev.es" target="_blank">
            <p>Código</p>
          </a>
        </>
      }
      technologies={["HTML5", "CSS", "Typescript", "React", "Webpack"]}
    />
  );
};
export default JavilonedevProject;
