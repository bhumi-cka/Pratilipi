import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Resources/Images/logo-purple-bg.png";


function HomePage() {
    return (
        <div class="homepage">
            <div class="audio-input">

            <div class="left-audio">
                <img src={Logo} alt="logo"></img>
                <hr class="white-hr"></hr>
                <p>Home</p>
                <hr class="blue-hr"></hr>
                <p>Meetings</p>
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
                <h2 class="inline-block">Home</h2>
                <Link to="/record">
                    <button class="inline-block home-record">Record</button>
                </Link>
                <button class="inline-block home-profile"></button>
                <hr></hr>

            </div>
            </div>
        </div>
    )
}

export default HomePage;