import React from 'react';
import logo from './photos/logo.png';
import './HomePage.css';

const ContactPage = () => {
  return (
    <div className="contact"> 
        <h2>Contact us :</h2>
        <img src={logo} width="700" alt="logo"/>
        <p>In case of any queries and for additional help, please email us at: help.cookbook@gmail.com</p>
    </div>
  );
};

export default ContactPage;
