import React from "react";

interface ProjectCardProps {
  projectUrl: string;
  imageUrl: string;
  title: string;
  description: React.ReactNode;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectUrl, imageUrl, title, description, technologies }) => {
  return (
    <div className="project-container">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} className="project-img" alt={`${title} Logo`} />
      </a>
      <div className="project-text-tech">
        {technologies.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
      <div className="project-text">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <p className="project-anchor">{title}</p>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
