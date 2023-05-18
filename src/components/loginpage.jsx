import React from "react";
import LoginImg from "./Images/loginpageimg.png";
import Logo from "./Images/logo-purple-bg.png";

function LoginPage () {
    return (
        <div class="loginpage">
            <div class="left-login">
                <img src={Logo} alt="logo"></img>
                <div class="login-box">
                    <p>Log In to your Pratilipi Account</p>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                </div>
            </div>
            <div class="right-login">
                <img src={LoginImg} class="login-img" alt="computer"></img>
            </div>
        </div>
    );
}

export default LoginPage;

