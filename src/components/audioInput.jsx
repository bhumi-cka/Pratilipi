import React, { useState } from "react";
import Logo from "../Resources/Images/logo-purple-bg.png";
import SoundWave from "../Resources/Images/soundwave.png";
import Speaker from "../Resources/Images/speaker.png";
import Caption from "../Resources/Images/caption.png";
import Save from "../Resources/Images/save.png";
import StartRec from "../Resources/Images/startrec.png";
import PauseRec from "../Resources/Images/pauserec.png";
import StopRec from "../Resources/Images/stoprec.png";


function AudioInput() {

    const [recording, setRecording] = useState(false);
    const [audio, setAudio] = useState(null);

    function startRecording() {
        navigator.mediaDevices.getUserMedia({audio: true})
        .then(function(stream) {
            setAudio(stream);
            setRecording(true);
        })
        .catch(function(err) {
            alert("Error accessing microphone");
        });
    }

    function stopRecording() {
        if (audio) {
            const tracks=audio.getTracks();
            for (let i=0; i<tracks.length; i++) {
                const track = tracks[i];
                track.stop();
            }
            setAudio(null);
            setRecording(false);
        }
    }

    function pauseRecording() {
        alert("Paused Recording");
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
                    <div class="transcript-head-flex">
                        <h3>Speaker 1</h3>
                        <p>Date, Time</p>
                    </div>

                    <hr></hr>
                    <div class="transcript-bottom-flex">
                        <p>Ladies and gentlemen, a very good morning.</p>

                        <div class="input">
                            {/* <img src={SoundWave} alt="sound-wave"></img> */}

                            <div class="slider-box">
                                <img src={Speaker} alt="speaker"></img>
                                <div class="slider"></div>
                                <p>5.05</p>
                                <div class="caption-save">
                                    <img src={Caption} alt="caption"></img>
                                    <img src={Save} alt="save"></img>
                                </div>
                            </div>

                            <div class="rec-img">
                                <button onClick={startRecording} class="start-record record-button">
                                    <img src={StartRec} alt="rec-img"></img>
                                </button>

                                <button onClick={pauseRecording} class="pause-record record-button">
                                    <img src={PauseRec} alt="rec-img"></img>
                                </button>

                                <button onClick={stopRecording} class="stop-record record-button">
                                    <img src={StopRec} alt="rec-img"></img>
                                </button>
                    
                                {/* <img src={PauseRec} alt="rec-img"></img> */}
                                
                            </div>
                        </div>
                    </div>
                    
                </div>



                {/* <button onClick={startRecording} class="start-record">Start</button> */}
                {/* <button onClick={stopRecording} class="stop-record">Stop</button> */}
            </div>
        </div>
    )
}

export default AudioInput;