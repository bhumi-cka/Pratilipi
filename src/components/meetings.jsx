import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../Resources/Images/logo-purple-bg.png";
import AudioTest from "./AudioTest";
import axios from "axios";

function Meetings() {

    const location = useLocation();
    const { email } = location.state;
    

    const [hoverOverProfile, setHoverOverProfile] = useState(false);
    const [hoverOverComp, setHoverOverComp] = useState(false);
    const [user, setUser] = useState(null);

    function hoverOver() {
        setHoverOverProfile(true);
        setHoverOverComp(true);
    }

    function hoverOut() {
        setHoverOverProfile(false);
        setHoverOverComp(false);
    }

    useEffect(() => {
        axios
          .get("http://localhost:3001/Data", { params: { email: email } })
          .then((response) => {
            console.log(response.data);
            setUser(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    }, []);

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
                <hr className="white-hr"></hr>

                <a className="home-link" onClick={handleHomePageNavigate} href="#">Home</a>
                
                <div class="highlighted">
                    <hr className="blue-hr"></hr>
                    
                    <a onClick={handleMeetingsNavigate} className="meetings-link" href="#">Meetings</a>
                    
                    <hr className="blue-hr"></hr>
                </div>
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
                        {/* <Link to="/record"> */}
                            <button className="record-meetings-button">Record</button>
                        {/* </Link> */}
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
                        <h3>{user[0].fullName}</h3>
                        <p className="email">{user[0].email}</p>
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

                <div>
                    <AudioTest />
                </div>

            </div>
            </div>
        </div>
    )
}

export default Meetings;