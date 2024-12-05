// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/styles/CreateAccount.css';
import Footer from '../componentes/Footer';
import { Link } from 'react-router-dom';
import Header2 from '../componentes/Header2';


function CreateAccount () {
    return (
        <div className="create-account-container">
            <Header2/>
            <form className="create-account-form">
                <label htmlFor="username">User name:</label>
                <input type="text" id="username" name="username" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <div className="button-container">
                    <Link  to="/" className="back-button"  >Back</Link>
                    <Link  to="/home" className="continue-button"  >Continue</Link>
                    
                </div>
            </form>
            <Footer/>
        </div>
    );
}

export default CreateAccount;
