import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img 
          src='/kiran_img.jpg' 
          alt="Profile Logo" 
          className="profile-logo" 
        />
        <span className="navbar-name">Nagakiran Nelikanti</span>
      </div>
      <div className={`navbar-right ${isOpen ? "open" : ""}`}>
        <a href="#home" className="nav-link"><i className="fas fa-home"></i>Home</a>
        <a href="#about" className="nav-link"><i className="fas fa-user"></i>About</a>
        <a href="#projects" className="nav-link"><i className="fas fa-project-diagram"></i>Projects</a>
        <a href="#skills" className="nav-link"><i className="fas fa-code"></i>Skills</a>
        <a href="#certificates" className="nav-link"><i className="fas fa-award"></i>Certificates</a>
        <a href="#contact" className="nav-link"><i className="fas fa-envelope"></i>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
