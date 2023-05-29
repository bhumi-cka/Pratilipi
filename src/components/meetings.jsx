import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Resources/Images/logo-purple-bg.png";


function Meetings() {

    const [hoverOverProfile, setHoverOverProfile] = useState(false);
    const [hoverOverComp, setHoverOverComp] = useState(false);

    function hoverOver() {
        setHoverOverProfile(true);
        setHoverOverComp(true);
    }

    function hoverOut() {
        setHoverOverProfile(false);
        setHoverOverComp(false);
    }

    return (
        <div class="homepage">
            <div class="audio-input">

            <div class="left-audio">
                <img src={Logo} alt="logo"></img>
                <hr class="white-hr"></hr>
                <Link to="/home">
                    <a href="#">Home</a>
                </Link>
                <hr class="blue-hr"></hr>
                <Link to="/meetings">
                    <a class="meetings-link" href="#">Meetings</a>
                </Link>
                <hr class="blue-hr"></hr>
                <p>Pending Tasks</p>
                <hr class="blue-hr"></hr>
                <p>Complete Tasks</p>
                <hr class="blue-hr"></hr>
                <p>Past Recordings</p>
                <hr class="white-hr"></hr>
                <p>Settings</p>

            </div>

            <div class="right-audio right-home">
                <div class="home-header">
                    <h2>Meetings</h2>
                    <Link to="/record">
                        <button>Record</button>
                    </Link>
                    <button onMouseOver={hoverOver} onMouseOut={hoverOut} class="home-profile"></button>
                </div>
                {hoverOverProfile && (
                    <div onMouseOver={hoverOver} onMouseOut={hoverOut} class="profile-component">
                        <h3>Name</h3>
                        <p class="email">Email</p>
                        <hr></hr>
                        <a href="#">Profile</a>
                        <a href="#">Account</a>
                        <a href="#">Settings</a>
                        <a href="#">Help</a>
                        <hr></hr>
                        <Link to="/">
                            <a class="log-out-atag" href="#">Log Out</a>
                        </Link>
                    </div>
                )}
                
                <hr></hr>

                


            </div>
            </div>
        </div>
    )
}

export default Meetings;