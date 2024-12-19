import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Todos Application",
      description: "Developed a persistent todo application with CRUD operations to track tasks dynamically.",
      link: "https://todoappkirann.ccbp.tech/",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "Nxt Trendz",
      description: "Implemented Nxt Trendz application, an ECommerce clone with user authentication and product features.",
      link: "https://kiranneli.ccbp.tech/login",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "Prototype Project",
      description: "A prototype project showcasing dynamic features and functionalities.",
      link: "#",
      img: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
