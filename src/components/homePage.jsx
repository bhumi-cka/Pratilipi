import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../Resources/Images/logo-purple-bg.png";
import { UserContext } from "./UserContext.js";
import axios from "axios";


function HomePage() {

    const location = useLocation();
    const { email } = location.state;

    const [hoverOverProfile, setHoverOverProfile] = useState(false);
    const [hoverOverComp, setHoverOverComp] = useState(false);
    const [fetchedUserData, setFetchedUserData] = useState(null);
    const [user, setUser] = useState(null);
    const [userLoaded, setUserLoaded] = useState(false);


    useEffect(() => {
        axios
          .get("http://localhost:3001/Data", { params: { email: email } })
          .then((response) => {
            console.log(response.data);
            setUser(response.data);
            setUserLoaded(true);
          })
          .catch((error) => {
            console.error(error);
          });
    }, []);

    function hoverOver() {
        setHoverOverProfile(true);
        setHoverOverComp(true);
    }

    function hoverOut() {
        setHoverOverProfile(false);
        setHoverOverComp(false);
    }

    const navigate=useNavigate();

    function handleHomePageNavigate(event) {
        event.preventDefault();
        navigate("/home", { state: { email: email } });
    }

    function handleMeetingsNavigate(event) {
        event.preventDefault();
        navigate("/meetings", { state: { email: email } });
    }



    return (
        <div className="homepage">
            <div className="audio-input">

            <div className="left-audio">
                <img src={Logo} alt="logo"></img>
                <div className="highlighted">
                    <hr className="white-hr"></hr>
                    
                    <a onClick={handleHomePageNavigate} className="home-link" href="#">Home</a>

                    <hr className="blue-hr"></hr>
                </div>

                <a onClick={handleMeetingsNavigate} className="meetings-link" href="#">Meetings</a>

                <hr className="blue-hr"></hr>
                <p>Pending Tasks</p>
                <hr className="blue-hr"></hr>
                <p>Complete Tasks</p>
                <hr className="blue-hr"></hr>
                <p>Past Recordings</p>
                <hr className="white-hr"></hr>
                <p>Settings</p>

            </div>

            <div className="right-audio right-home">
                <div className="home-header">

                    <button onMouseOver={hoverOver} onMouseOut={hoverOut} className="home-profile"></button>
                </div>

                {hoverOverProfile && (
                    <div onMouseOver={hoverOver} onMouseOut={hoverOut} className="profile-component">


                        <h3>{user[0].fullName}</h3>
                        <p>{user[0].email}</p>

                        <hr></hr>
                        <a href="#">Profile</a>
                        <a href="#">Account</a>
                        <a href="#">Settings</a>
                        <a href="#">Help</a>
                        <hr></hr>
                        <Link to="/">
                            <a className="log-out-atag" href="#">Log Out</a>
                        </Link>
                    </div>
                )}
                
                <hr></hr>
                <div className="left-home-middle">
                    {userLoaded && (<h2 className="bold-para-middle home-page-h2">Welcome {user[0].fullName}</h2>)}
                    <h2 className="bold-para-middle home-page-h2">Ready to Transcribe?</h2>
                    <button className="blue-button">Click for More</button>
                </div>

            </div>
            </div>
        </div>
    )
}

export default HomePage;