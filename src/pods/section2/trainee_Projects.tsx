import React, { useState } from "react";
import "../../scenes/section2/section2_styles.css";

const TraineeProjectsContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="trainee-projects section1-soft-skills">
        <a className="section-title">{`< Proyectos trainee />`}</a>
        <div className="trainee-title"></div>
        {children}
      </div>
      <img className="scroll-up-down" src="/icons/scroll-up-down.svg" />
    </>
  );
};

export default TraineeProjectsContainer;
