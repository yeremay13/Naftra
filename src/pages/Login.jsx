// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/styles/Login.css';
import { Link } from 'react-router-dom';

function LoginScreen() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src="Nlogo.png" alt="Naftra Logo" className="logo" />
          <h1>Naftra</h1>
        </div>
        <div className="button-container">
          <Link  to="/sign-in" className="primary-button"  >Iniciar sesión</Link>
        </div>
        <div className="button-container">
          <Link  to="/create-account" className="primary-button"  >Crear cuenta</Link>
        </div>
        <div className="social-container">
          <button className="social-button">
            <img src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png" alt="Google" className="social-icon" />
          </button>
          <button className="social-button">
            <img src="https://image.similarpng.com/very-thumbnail/2020/04/Black-icon-facebook-logo-PNG.png" alt="Facebook" className="social-icon" />
          </button>
          <button className="social-button">
            <img src="https://image.similarpng.com/thumbnail/2020/05/Icon-Spotify-PNG.png" alt="X" className="social-icon" />
          </button>
          <button className="social-button">
            <img src="https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png" alt="Other" className="social-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
