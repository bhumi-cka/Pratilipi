import React from "react";
import Image from "../Images/logo.png";
import LoginPage from "../loginPage.jsx";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div class="navbar">
            <img src={Image} class="logo" alt="logo"></img>
            <a class="home-nav">Home</a>
            <a class="solution-nav">Solution</a>
            <a class="contact-nav">Contact</a>
            
            <a class="login-nav">
                <Link to="/login">Login</Link>
            </a>
            <a class="create-acc-nav">
                <Link to="/signup">Create Account</Link>
            </a>
        </div>
    )
}

export default Navbar;