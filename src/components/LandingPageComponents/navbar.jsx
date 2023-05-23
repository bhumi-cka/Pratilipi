import React, { useState } from "react";
import Image from "../Images/logo.png";
import LoginPage from "../loginpage";
import { Link } from "react-router-dom";
import CreateAccount from "../createAccount";

function Navbar() {

    const [popup, setPopup] = useState(false);
    const [popupAcc, setPopupAcc] = useState(false);


        function togglePopupLogin() {
            setPopup(!popup)
        }

        function togglePopupAcc() {
            setPopupAcc(!popupAcc)
        }


    return (
        <div>
        <div class="navbar">
            <img src={Image} class="logo" alt="logo"></img>
            <a class="home-nav">Home</a>
            <a class="solution-nav">Solution</a>
            <a class="contact-nav">Contact</a>
            
            <button onClick={togglePopupLogin} class="login-button">Login</button>
            <button onClick={togglePopupAcc} class="login-button">Create Account</button>
        </div>


        {popup && (<div class="popup">
        <div className="overlay"></div>
        <div className="popup-content">
            <LoginPage />
            <button className="close-popup" onClick={togglePopupLogin}>×</button>
        </div>
        </div>)}

        {popupAcc && (<div class="popup">
        <div className="overlay"></div>
        <div className="popup-content">
            <CreateAccount />
            <button className="close-popup" onClick={togglePopupAcc}>×</button>
        </div>
        </div>)}
        

        </div>
    )
}

export default Navbar;