import React, {useState, useContext, useEffect} from "react";
import LoginImg from "../Resources/Images/loginpageimg.png";
import Logo from "../Resources/Images/logo-purple-bg.png";
import usersData from "./LoginCred";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function LoginPage () {

    const [email, setEmail] = useState("");
    const [fetchedUserData, setFetchedUserData] = useState(null);
    const [redirectEmail, setRedirectEmail] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
        console.log(email);
    }

    const navigate=useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        navigate("/home", { state: { email: email } });
    }

    return (
        <div>
        <div className="loginpage">
                <div className="login-box">
                    <p>Log In to your Pratilipi Account</p>
                    <form onSubmit={handleLogin}>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                            className="login-input" 
                            placeholder="Email"
                            name="email">
                        </input>

                        <input 
                            type="password" 
                            className="login-input"
                            placeholder="Password"
                            name="password">
                        </input> 
                    

                        <div className="login-form-end">
                            <form>
                                <input type="checkbox" id="rememberme"></input>
                                <label for="rememberme" className="rememberme">Remember Me</label>
                            </form>
                            <a href="#" className="forgotpass">Forgot Password?</a>
                        </div>


                        <button type="submit" className="sign-in-button">Sign In</button>
                        
                    </form>

                    <div className="no-account">
                        <p>Do not have an account?</p>
                        <a href="#">Sign Up</a>
                    </div>

                </div>
         
        </div>
        </div>
    );
}


export default LoginPage;

