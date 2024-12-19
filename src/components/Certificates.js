import React from 'react';
import './Certificates.css';

function Certificates() {
  const certificates = [
    {
      title: "Todos Application",
      description: "Developed a persistent todo application with CRUD operations.",
      img: "https://via.placeholder.com/200x150",
      link: "https://todoappkirann.ccbp.tech/",
    },
    {
      title: "Nxt Trendz ECommerce",
      description: "Implemented Nxt Trendz, an ECommerce clone with user authentication.",
      img: "https://via.placeholder.com/200x150",
      link: "https://kiranneli.ccbp.tech/login",
    },
    {
      title: "React Weather App",
      description: "Built a weather app using React and an external weather API.",
      img: "https://via.placeholder.com/200x150",
      link: "https://weatherappreact.ccbp.tech/",
    },
    {
      title: "Portfolio Website",
      description: "Created a personal portfolio website to showcase projects.",
      img: "https://via.placeholder.com/200x150",
      link: "https://kirannportfolio.ccbp.tech/",
    },
  ];

  return (
    <section id="certificates">
      <h2 className="certificates-title">Certificates</h2>
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <img src={certificate.img} alt={certificate.title} />
            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-button">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
