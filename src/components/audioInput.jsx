import React, { useState } from "react";
import Logo from "./Images/logo-purple-bg.png";

function AudioInput() {

    const [recording, setRecording] = useState(false);

    function startRecording() {
        setRecording(true);
        alert("Recording");
    }

    function stopRecording() {
        setRecording(false);
        alert("Stopped Recording");
    }

    return (
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

            <div class="right-audio">
                <hr></hr>
                <div class="select-lang-div">
                    <button class="select-language">Select Language</button>
                </div>
                <div class="transcript">
                    <div class="transcript-head">
                        <h3>Speaker 1</h3>
                        <p>Date, Time</p>
                    </div>
                    <hr></hr>
                </div>



                {/* <button onClick={startRecording} class="start-record">Start</button> */}
                {/* <button onClick={stopRecording} class="stop-record">Stop</button> */}
            </div>
        </div>
    )
}

export default AudioInput;