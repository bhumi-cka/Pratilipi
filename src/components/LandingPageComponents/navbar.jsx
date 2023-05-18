import React from "react";
import Image from "../Images/logo.png";

function Navbar() {
    return (
        <div class="navbar">
            <img src={Image} class="logo" alt="logo"></img>
            <p class="home-nav">Home</p>
            <p class="solution-nav">Solution</p>
            <p class="contact-nav">Contact</p>
            <p class="login-nav">Log In</p>
        </div>
    )
}

export default Navbar;