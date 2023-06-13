import React from "react";
import { useState } from "react";
// import Navbar from "./LandingPageComponents/navbar.jsx";
// import Middle from "./LandingPageComponents/middle.jsx";

import Image from "../Resources/Images/logo.png";
import LoginPage from "./loginpage";
import { Link } from "react-router-dom";
import CreateAccount from "./createAccount";
import ImageMan from "../Resources/Images/ManLanding.png";
import ImageComp from "../Resources/Images/ComputerLanding.png";

function LandingPage () {

    const [popupLogin, setPopup] = useState(false);
    const [popupAcc, setPopupAcc] = useState(false);

        function togglePopupLogin() {
            setPopup(!popupLogin);
        }

        function togglePopupAcc() {
            setPopupAcc(!popupAcc);
        }





    return (
        <div className="landing-page">
            <div>
                <div className="navbar">
                    <img src={Image} className="logo" alt="logo"></img>
                    <a className="home-nav">Home</a>
                    <a className="solution-nav">Solution</a>
                    <a className="contact-nav">Contact</a>
                    
                    <button onClick={togglePopupLogin} className="login-button">Login</button>
                    <button onClick={togglePopupAcc} className="login-button">Create Account</button>
                </div>

                {popupLogin && (<div className="popup">
                <div className="overlay"></div>
                <div className="popup-content">
                    <LoginPage />
                    <button className="close-popup" onClick={togglePopupLogin}>×</button>
                </div>
                </div>)}

                {popupAcc && (<div className="popup">
                <div className="overlay"></div>
                <div className="popup-content">
                    <CreateAccount />
                    <button className="close-popup" onClick={togglePopupAcc}>×</button>
                </div>
                </div>)}



            </div>

            <div>
            <div className="middle-1">
                <div className="paragraphs-middle">
                    <p className="bold-para-middle">Empowering business users with real-time transcription of conversations in multiple languages using AI</p>
                    <p className="regular-para-middle">Pratilipi uses artificial intelligence to empower users with real-time transcription during business meeting in multiple languages.</p>
                </div>
                <img src={ImageMan} alt="man" className="man-landing"></img>
            </div>
            <div className="middle-2">
                <button className="middle-button">Learn More</button>
                <img src={ImageComp} alt="computer"></img>
            </div>
        </div>
        </div>
    )
}

export default LandingPage;