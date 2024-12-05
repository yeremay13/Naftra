// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/styles/SignIn.css';
import Header2 from '../componentes/Header2';
import Footer from '../componentes/Footer';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div className="sign-in-container">
            <Header2 />
            <form className="sign-in-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <a href="#" className="forgot-password">I forgot my password</a>
                
                <div className="button-container">
                    <Link  to="/" className="back-button"  >Back</Link>
                    <Link  to="/home" className="continue-button"  >Continue</Link>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default SignIn;
