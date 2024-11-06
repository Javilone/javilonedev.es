import React from "react";
import ProjectCard from "./project_component";

const RomanProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl="https://roman-converter-eight.vercel.app"
      imageUrl="/images/romanConverter.png"
      title="Roman Converter"
      description={
        <>
          Aplicación que convierte números enteros a números romanos. Interfaz intuitiva que permite a los usuarios introducir un número y obtener su equivalente en formato romano. Este proyecto incorpora lógica de programación para manejar las{" "}
          <span className="mark-up-text">reglas de conversión</span>, ofreciendo una herramienta educativa que facilita la comprensión de este antiguo sistema numérico.
        </>
      }
      technologies={["HTML5", "CSS", "Javascript"]}
    />
  );
};
export default RomanProject;
