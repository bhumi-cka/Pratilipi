import React, {useState} from "react";
import LoginImg from "./Images/loginpageimg.png";
import Logo from "./Images/logo-purple-bg.png";
import usersData from "./loginCred";
import { GoogleAuth } from 'google-auth-library';

const googleAuth = new GoogleAuth({
    clientId: 'CLIENT_ID',
    scope: 'profile email',
  });
  

function LoginPage () {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // function handleLogin(event) {
    //     event.preventdefault();

    //     const user = usersData.find((user) => user.email === email);

    //     if (user && user.password === password) {
    //         alert("Login successful");
    //     }

    //     else {
    //         alert("Invalid login");
    //     }
    // }

    // function handleEmailChange(event) {
    //     setEmail(event.target.value);
    // }

    // function handlePasswordChange(event) {
    //     setPassword(event.target.value);
    // }

    function Login() {
        googleAuth.signIn()
            .then(function(res) {
                alert(res);
            })
            .catch(function(err) {
                alert(err);
            })
    }


    return (
        <div>
        <div class="loginpage">
            <div class="left-login">
                <img src={Logo} alt="logo"></img>
                <div class="login-box">
                    <p>Log In to your Pratilipi Account</p>
                    <form onSubmit={handleLogin}>
                        {/* <input 
                            type="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                            class="login-input" 
                            placeholder="Email">
                        </input>
                        <input 
                            type="password" 
                            value={password}  
                            onChange={handlePasswordChange}
                            class="login-input" 
                            placeholder="Password">
                        </input> */}
                    

                        {/* <div class="login-form-end">
                            <form>
                                <input type="checkbox" id="rememberme"></input>
                                <label for="rememberme" class="rememberme">Remember Me</label>
                            </form>
                            <a href="#" class="forgotpass">Forgot Password?</a>
                        </div> */}

                        <button type="submit" onClick={handleLogin} class="sign-in-button">Sign In</button>
                    </form>

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

