import React from "react";
import ProjectCard from "./project_component";

const MorseProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl="https://www.javilonedev.es/html/MorseApp/morseApp.html"
      imageUrl="/images/morseApp.png"
      title="Morse App - Traductor de Texto a Código Morse"
      description={
        <>
          Aplicación que permite convertir texto a código Morse y viceversa. La aplicación cuenta con una interfaz sencilla y fácil de usar, ideal para quienes deseen explorar o practicar la comunicación en Morse. Este proyecto combina el procesamiento de
          cadenas de texto con la implementación de reglas de conversión de Morse, ofreciendo una herramienta educativa y funcional.
        </>
      }
      technologies={["HTML5", "CSS", "Javascript"]}
    />
  );
};
export default MorseProject;
