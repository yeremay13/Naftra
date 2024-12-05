// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../assets/styles/Header.css';
import { FaHome, FaInfoCircle, FaConciergeBell, FaEnvelope } from 'react-icons/fa';

// Componente Modal
// eslint-disable-next-line react/prop-types
const Modal = ({ title = '', content = '', onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const openModal = (title, content) => {
    setModalContent({ title, content });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src="Nlogo3.png" alt="Naftra Logo" className="logo-image" />
          <span className="text">Naftra</span>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/home">
            <FaHome className="nav-icon" /> Home
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              openModal('About Us', 'Founded in 2024 by Yeremay Araña.');
            }}
          >
            <FaInfoCircle className="nav-icon" /> About
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              openModal('Our Services', 'Naftra Premium is in develoopment.');
            }}
          >
            <FaConciergeBell className="nav-icon" /> Services
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              openModal('Contact Us', 'Naftracompany@gmail.com');
            }}
          >
            <FaEnvelope className="nav-icon" /> Contact
          </a>
        </nav>
      </div>
      {modalContent && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={closeModal}
        />
      )}
    </header>
  );
};

export default Header;
