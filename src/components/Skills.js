// src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: "HTML", description: "Used to build static websites and define the structure of web pages." },
    { name: "CSS", description: "Utilized for styling and laying out the visual elements on web pages." },
    { name: "JavaScript", description: "Added interactivity to web pages, including handling user events." },
    { name: "Bootstrap", description: "A framework for developing responsive websites with ready-made components." },
    { name: "Python", description: "Used for backend development, data analysis, and machine learning tasks." },
    { name: "SQL", description: "Utilized for querying databases to retrieve and manage data." },
    { name: "Git", description: "A version control system to track changes in code and collaborate with teams." },
    { name: "SDLC", description: "A framework for developing software in a structured and systematic way." }
  ];

  return (
    <section id="skills">
      <h2 style={{textAlign:'center',fontSize:'40px',color:' #ffcc00'}}>SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
