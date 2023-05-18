import React from "react";
import Image from "../Images/logo.png";
import LoginPage from "../loginpage";

function Navbar() {
    return (
        <div class="navbar">
            <img src={Image} class="logo" alt="logo"></img>
            <a class="home-nav">Home</a>
            <a class="solution-nav">Solution</a>
            <a class="contact-nav">Contact</a>
            <a class="login-nav">Log In</a>
        </div>
    )
}

export default Navbar;