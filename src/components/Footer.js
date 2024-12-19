import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Nagakiran Nelikanti. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/nagakiran-nelikanti-b4936a195/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/nagakirann" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
