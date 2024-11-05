import React from "react";
import ProjectCard from "./project_component";

const PalindromeProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl="https://www.javilonedev.es/html/05_PalindromeChecker/palindrome.html"
      imageUrl="/images/palindromeApp.png"
      title="Palindrome App"
      description={
        <>
          Aplicación que determina si una palabra es palíndroma (si se lee igual de izquierda a derecha que de derecha a izquierda). La interfaz es sencilla y permite a los usuarios introducir cualquier palabra o frase. Este proyecto demuestra el{" "}
          <span className="mark-up-text">uso de algoritmos básicos de manipulación de cadenas</span> y proporciona una forma divertida de explorar conceptos de simetría en el lenguaje.
        </>
      }
      technologies={["HTML5", "CSS", "Javascript"]}
    />
  );
};
export default PalindromeProject;
