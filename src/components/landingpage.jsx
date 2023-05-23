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

    const [popup, setPopup] = useState(false);
    const [popupAcc, setPopupAcc] = useState(false);


        function togglePopupLogin() {
            setPopup(!popup)
        }

        function togglePopupAcc() {
            setPopupAcc(!popupAcc)
        }


    return (
        <div class="landing-page">
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

            <div>
            <div class="middle-1">
                <div class="paragraphs-middle">
                    <p class="bold-para-middle">Empowering business users with real-time transcription of conversations in multiple languages using AI</p>
                    <p class="regular-para-middle">Pratilipi uses artificial intelligence to empower users with real-time transcription during business meeting in multiple languages.</p>
                </div>
                <img src={ImageMan} alt="man" class="man-landing"></img>
            </div>
            <div class="middle-2">
                <button class="middle-button">Learn More</button>
                <img src={ImageComp} alt="computer"></img>
            </div>
        </div>
        </div>
    )
}

export default LandingPage;