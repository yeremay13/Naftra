// Home.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Home() {
  return (
    <div className="home">
      <Header />

      {/* Sección de Trending */}
      <section className="section trending">
        <h2>Trending</h2>
        <div className="trending-carousel">
          <Link to="/artist-info" className="trending-btn" data-artist-name="Anuel AA">
            <img
              src="https://cdns-images.dzcdn.net/images/artist/d128822eb60817b362b9d6e8c696e933/500x500.jpg" alt="Trending 1" />
          </Link>
          <Link to="/artist-info1" className="trending-btn" data-artist-name="Hades66">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cpQE2zEL-3O5fAlbI16DwTspVj8UE9CC2Q&s" alt="Trending 2" />
          </Link>
          <Link to="/artist-info2" className="trending-btn" data-artist-name="Yovngchimi">
            <img
              src="https://images.music-worx.com/users/yovngchimi-64ba8829b4152.jpg" alt="Trending 3" />
          </Link>
        </div>
      </section>

      {/* Sección de News */}
      <section className="section news">
        <h2>News</h2>
        <div className="news-flex">
          <Link to="/info1" className="news-btn" data-song-name="La Pantera Negra">
            <img src="https://i.scdn.co/image/ab67616d0000b273f5efed2f29ab39ebab066e2a" alt="News 1" />
          </Link>
          <Link to="/info" className="news-btn" data-song-name="Última cena">
            <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72cde5d06ea21f60a81613db9d3" alt="News 2" />
          </Link>
          <Link to="/info2" className="news-btn" data-song-name="Triste Halloween">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fb/a8/a3/fba8a387-b9e5-915d-ec73-fed60ebd0ab8/810129987331.jpg/1200x1200bf-60.jpg" alt="News 3" />
          </Link>
          <Link to="/info3" className="news-btn" data-song-name="Real Hasta La Muerte 2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZR1A4JRK4gJ1dZbk_ERVgQOemyNqS4AQxQ&s" alt="News 4" />
          </Link>
          <Link to="/info4" className="news-btn" data-song-name="Hoy">
            <img src="https://resources.tidal.com/images/c2b3bb59/71d7/4433/94d8/6852fbe0786f/640x640.jpg" alt="News 5" />
          </Link>
          <Link to="/info5" className="news-btn" data-song-name="Buenas noches">
            <img src="https://www.lahiguera.net/musicalia/artistas/quevedo/disco/13879/portada-m.jpg" alt="News 6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
