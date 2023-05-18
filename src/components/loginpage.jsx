import React from "react";
import LoginImg from "./Images/loginpageimg.png";
import Logo from "./Images/logo-purple-bg.png";

function LoginPage () {
    return (
        <div>
        <div class="loginpage">
            <div class="left-login">
                <img src={Logo} alt="logo"></img>
                <div class="login-box">
                    <p>Log In to your Pratilipi Account</p>
                    <form>
                            <input type="email" class="login-input" placeholder="Email"></input>
                            <input type="password" class="login-input" placeholder="Password"></input>
                    </form>

                    <div class="login-form-end">
                        <form>
                            <input type="checkbox" id="rememberme"></input>
                            <label for="rememberme" class="rememberme">Remember Me</label>
                        </form>
                        <a href="#" class="forgotpass">Forgot Password?</a>
                    </div>

                    <button class="sign-in-button">Sign In</button>

                    <div class="no-account">
                        <p>Do not have an account?</p>
                        <a href="#">Sign Up</a>
                    </div>

                </div>
            </div>
            <div class="right-login">
                <img src={LoginImg} class="login-img" alt="computer"></img>
            </div>
        </div>
        </div>
    );
}

export default LoginPage;

