// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../assets/styles/Info.css';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import { getComments, addComment, updateComment, deleteComment } from '../data/indexedDB';
import { Link } from 'react-router-dom';

function Info1() {
  // eslint-disable-next-line no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  
  

  const openModal = () => setIsModalOpen(true);
  // eslint-disable-next-line no-unused-vars
  const closeModal = () => setIsModalOpen(false);

  // Cargar comentarios desde IndexedDB al montar el componente
  useEffect(() => {
    const loadComments = async () => {
      try {
        const storedComments = await getComments();
        setComments(storedComments);
      } catch (error) {
        console.error('Error fetching comments from IndexedDB:', error);
      }
    };
    loadComments();
  }, []);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        if (editingIndex !== null) {
          // eslint-disable-next-line no-unused-vars
          const updatedComment = await updateComment(comments[editingIndex].id, newComment);
          const updatedComments = [...comments];
          updatedComments[editingIndex].text = newComment;
          setComments(updatedComments);
          setEditingIndex(null);
        } else {
          const newCommentData = {
            text: newComment,
            username: 'Yeremay Arana',
            date: new Date(),
          };
          const addedComment = await addComment(newCommentData);
          setComments([...comments, { ...newCommentData, id: addedComment }]);
        }
        setNewComment('');
      } catch (error) {
        console.error('Error adding/updating comment:', error);
      }
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await deleteComment(id);
      const updatedComments = comments.filter((comment) => comment.id !== id);
      setComments(updatedComments);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleEditComment = (index) => {
    setNewComment(comments[index].text);
    setEditingIndex(index);
  };

  return (
    <div className="info-page">
      <Header />

      {/* Sección de Información Principal */}
      <section className="main-info">
        <h2>La Pantera Negra - <span>Myke Towers</span></h2>
        <div className="info-content">
          <img
            src="https://i.scdn.co/image/ab67616d0000b273f5efed2f29ab39ebab066e2a"
            alt="La Pantera Negra - Myke Towers"
            className="info-image"
          />
          <p>
          La pantera negra es un álbum de Myke Towers. Avanzado por Adivino con Bad Bunny. Dan continuidad La primera vez con NTG, Otra noche con Darell, y Hasta la vista. También como invitados Jay Wheeler, Peso Pluma, Omar Montes, Cosculluela y YOVNGCHIMI. Y como productores Full Harmony, Benjamin Lasnier y Ovy on the Drums.
          </p>
          <button className="listen-button" onClick={openModal}>Listen</button>
        </div>
      </section>

      {/* Sección de Comentarios */}
      <section className="comments-section">
        <h2>Comentarios</h2>
        <div className="comment-box">
          <div className="comment-user">
            <div>
              <strong>Yeremay Arana</strong>
            </div>
          </div>
          <textarea className='textarea'
            placeholder="Añade un comentario..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="comment-actions">
            <button
              onClick={() => {
                setNewComment('');
                setEditingIndex(null);
              }}
            >
              Cancelar
            </button>
            <button onClick={handleAddComment}>
              {editingIndex !== null ? 'Guardar' : 'Comentar'}
            </button>
          </div>
        </div>
        <ul className="comment-list">
          {comments.map((comment, index) => (
            <li key={comment.id} className="comment-item">
              <div className="comment-header">
                <div>
                  <strong>{comment.username}</strong>
                  <p className="comment-date">{new Date(comment.date).toLocaleString()}</p>
                </div>
              </div>
              <p className="comment-text">{comment.text}</p>
              <div className="comment-buttons">
                <button onClick={() => handleEditComment(index)}>Editar</button>
                <button onClick={() => handleDeleteComment(comment.id)}>Borrar</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

       {/* Sección de Contenidos Relacionados */}
       <section className="section related">
        <h2>Relacionados</h2>
        <div className="related-carousel">
          <Link to="/info6" className="related-btn">
            <img 
              src="https://i.ytimg.com/vi/vyntdo6f160/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgQig-MA8=&rs=AOn4CLD2M95KqA7IDLUy5eQqq375NLp3PQ"
              alt="Antes de la cena - Conep"
            />
            <p>Antes de la cena - Conep</p>
          </Link>
          <Link to="/info7" className="related-btn">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/49/bd/11/49bd11f2-3a0b-ddef-289d-f51e70727d8f/810129988697.jpg/1200x1200bb.jpg"
              alt="Antes de la cena - Conep"
            />
            <p>Real Demon - Yovngchimi</p>
          </Link>
        </div>
      </section>

      {/* Modal para elegir el reproductor */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Escoge tu Reproductor</h2>
            <ul className="player-options">
              <li><a href="https://open.spotify.com/intl-es/album/6NmYJszy5BaEm1WF4tJL7Z" target="_blank" rel="noopener noreferrer">Spotify</a></li>
              <li><a href="https://www.youtube.com/playlist?list=OLAK5uy_nsez91wBX4gUmMhasOEBG8cNSbVA5VM6g" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://music.apple.com/us/album/la-pantera-negra/1760412194" target="_blank" rel="noopener noreferrer">Apple Music</a></li>
            </ul>
            <button className="close-button" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Info1;
