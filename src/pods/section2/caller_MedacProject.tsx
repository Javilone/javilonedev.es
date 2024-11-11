import React from "react";
import ProjectCard from "./project_component";

const MedacProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl="https://github.com/Javilone/Basic_Login_Medac"
      imageUrl="/images/basicloginmedac.png"
      title="Sistema de Login - Juego Educativo de Higiene Bucodental"
      description={
        <>
          <span className="mark-up-text">Sistema de inicio de sesión sencillo en Unity</span> para un juego educativo enfocado en el aprendizaje de la higiene bucodental. Animaciones y efectos (videos en GitHub). Trabajando de forma colaborativa con
          múltiples equipos involucrados en el desarrollo. Haciendo uso de herramientas de control de versiones como <span className="mark-up-text">GitHub y Plastic</span> (Unity).
          <a href="https://github.com/Javilone/Basic_Login_Medac" target="_blank">
            <p>Código</p>
          </a>
          <a href="https://javilonedev.es/medaclinicA.mp4" target="_blank">
            <p>Video 1</p>
          </a>
          <a href="https://javilonedev.es/medaclinicB.mp4" target="_blank">
            <p>Video 2</p>
          </a>
        </>
      }
      technologies={["C#", "PHP", "SQL", "AWS"]}
    />
  );
};
export default MedacProject;
