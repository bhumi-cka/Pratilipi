import React, {useState, useContext, useEffect} from "react";
import LoginImg from "../Resources/Images/loginpageimg.png";
import Logo from "../Resources/Images/logo-purple-bg.png";
import usersData from "./loginCred";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import axios from "axios";

function LoginPage () {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [fetchedUserData, setFetchedUserData] = useState(null);
    const [LPisDisabled, setLPisDisabled] = useState(true);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3001/Data');
            setUsers(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    console.log(users.email);

    function handleLogin(event) {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;


        const user = users.find(function(user) {
            return user.email === email;
        });
        

        if (user && users.password === password) {
            alert("Login successful");
            setLoggedIn(true);
            setLPisDisabled(false);
        }

        else {
            alert("Invalid login");
            setLoggedIn(false);
        }
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
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
                            value={password}  
                            onChange={handlePasswordChange}
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

                        
                        <Link to="/home">
                            <button type="submit" className="sign-in-button">Sign In</button>
                        </Link>

                        
                        
                    </form>

                    <div className="no-account">
                        <p>Do not have an account?</p>
                        <a href="#">Sign Up</a>
                    </div>

                </div>
            {/* </div> */}
            {/* <div className="right-login">
                <img src={LoginImg} className="login-img" alt="computer"></img>
            </div> */}
        </div>
        </div>
    );
}
    


export default LoginPage;

