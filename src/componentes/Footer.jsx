// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="icon"></div>
        <img src="Nlogo.png" alt="Naftra Logo" className="logo-image" />
        <span className="text">Naftra</span>
      </div>

      <div className="footer-links">
        <a href="#" className="footer-link">Sobre nosotros</a>
        <a href="#" className="footer-link">Términos de servicio</a>
        <a href="#" className="footer-link">Política de privacidad</a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Naftra. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
