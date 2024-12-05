// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../assets/styles/ArtistInfo.css';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function ArtistInfo() {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado para manejar si el artista está en favoritos
  const [isFavorite, setIsFavorite] = useState(false);

  // Estado para mostrar el mensaje de notificación
  const [notification, setNotification] = useState("");

  // Cargar el estado de favoritos desde localStorage al cargar el componente
  useEffect(() => {
    const storedFavorite = JSON.parse(localStorage.getItem('favorites')) || {};
    setIsFavorite(storedFavorite['Anuel AA'] || false);
  }, []);

  // Función para alternar el estado de favorito
  const toggleFavorite = () => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    const newState = !isFavorite;

    currentFavorites['Anuel AA'] = newState;
    localStorage.setItem('favorites', JSON.stringify(currentFavorites));
    setIsFavorite(newState);

    // Mostrar notificación
    setNotification(newState ? "Añadido a favoritos" : "Eliminado de favoritos");

    // Ocultar la notificación después de 2 segundos
    setTimeout(() => setNotification(""), 2000);
  };

  // Funciones para abrir y cerrar el modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="artist-info-page">
      <Header />

      {/* Notificación */}
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      {/* Sección de Información del Artista */}
      <section className="artist-info-main">
        <div className="artist-header">
          <h2>Anuel AA</h2>
          <span 
            className={`favorite-star ${isFavorite ? 'favorite' : ''}`} 
            onClick={toggleFavorite}
            title={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          >
            ★
          </span>
        </div>
        <div className="artist-info-line"></div>
        <div className="artist-info-content">
          <img
            src="https://cdn-images.dzcdn.net/images/artist/d128822eb60817b362b9d6e8c696e933/1900x1900-000000-80-0-0.jpg" 
            alt="Anuel AA"
            className="artist-info-image"
          />
          <div className="artist-info-description">
            <p>
              En pleno punto de la mira, el dios del trap se postula a iniciar
              una lyrical ante los diablos de Llorent Torres tras una barra en la
              que se hace referencia a él de manera ofensiva y con claras intenciones
              de guerra.
            </p>
            <strong>SE PREVEE GUERRA</strong>
          </div>
        </div>
        {/* Botón para abrir modal */}
        <button className="artist-info-button" onClick={openModal}>
          Más información
        </button>
      </section>

      {/* Modal para más información (opcional) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Más Información</h2>
            <p>
              RHLM2 esta más cerca que nunca.
            </p>
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ArtistInfo;
