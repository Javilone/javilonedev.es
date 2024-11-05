import React from "react";
import ProjectCard from "./project_component";

const YullsProject: React.FC = () => {
  return (
    <ProjectCard
      projectUrl="https://yulls-bakery.vercel.app/"
      imageUrl="/images/yulls_bakery_logo.png"
      title="Yull's Bakery - Página Web de Repostería Personalizada"
      description={
        <>
          <span className="mark-up-text">Diseño y desarrollo del sitio web responsivo</span> para Yull's Bakery, un negocio de repostería artesanal por encargo especializado en tartas y cupcakes personalizados. La web incluye un formulario de contacto,
          <span className="mark-up-text"> integración con WhatsApp</span> para pedidos y consultas directas, y un diseño visual atractivo y funcional, alineado con la identidad de la marca.
        </>
      }
      technologies={["HTML5", "SASS", "Typescript", "PHP", "Bootstrap", "Vite"]}
    />
  );
};

export default YullsProject;
