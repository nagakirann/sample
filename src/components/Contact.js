import React from 'react';
import './Contact.css'; // Import the CSS file

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-info">
        <i className="fas fa-envelope icon"></i>
        Email: <a href="mailto:kirannelikanti4545@gmail.com" className="contact-link">kirannelikanti4545@gmail.com</a>
      </p>
      <p className="contact-info">
        <i className="fas fa-phone-alt icon"></i>
        Phone: <span className="contact-phone">7989439637</span>
      </p>
      <a href="mailto:kirannelikanti4545@gmail.com" className="contact-button">Get in Touch</a>
    </section>
  );
}

export default Contact;
