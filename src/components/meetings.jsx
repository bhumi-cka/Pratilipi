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
        <div className="homepage">
            <div className="audio-input">

            <div className="left-audio">
                <img src={Logo} alt="logo"></img>
                <hr className="white-hr"></hr>
                <Link to="/home">
                    <a className="home-link" href="#">Home</a>
                </Link>
                <hr className="blue-hr"></hr>
                <Link to="/meetings">
                    <a className="meetings-link" href="#">Meetings</a>
                </Link>
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

                    <h2>Meetings</h2>

                    <div className="meetings-head-right">
                        <Link to="/record">
                            <button className="record-meetings-button">Record</button>
                        </Link>
                        <button className="meetings-head-button">Import</button>
                        <button className="meetings-head-button">Share</button>
                        <button
                            onMouseOver={hoverOver} 
                            onMouseOut={hoverOut} 
                            className="home-profile">
                        </button>
                    </div>

                </div>

                {hoverOverProfile && (
                    <div onMouseOver={hoverOver} onMouseOut={hoverOut} className="profile-component">
                        <h3>Name</h3>
                        <p className="email">Email</p>
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

                


            </div>
            </div>
        </div>
    )
}

export default Meetings;