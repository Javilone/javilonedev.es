import React from "react";
import ProjectCard from "./project_component";

const RomanProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl="https://www.javilonedev.es/html/06_RomanNumeralConverter/romanconv.html"
      imageUrl="/images/romanConverter.png"
      title="Roman Converter"
      description={
        <>
          Aplicación que convierte números enteros a números romanos. Interfaz es intuitiva que permite a los usuarios introducir un número y obtener su equivalente en formato romano. Este proyecto incorpora lógica de programación para manejar las reglas
          de conversión, ofreciendo una herramienta educativa que facilita la comprensión de este antiguo sistema numérico.
        </>
      }
      technologies={["HTML5", "CSS", "Javascript"]}
    />
  );
};
export default RomanProject;
