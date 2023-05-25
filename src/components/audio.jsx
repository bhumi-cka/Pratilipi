import { fireEvent } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import Logo from "../Resources/Images/logo-purple-bg.png"; 

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-UK';

function Audio() {

    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])


    useEffect(() => {
        handleListen()
    }, [isListening])

    function startListening() {
        setIsListening(true);
    }

    const handleListen = () => {
        if(isListening) {
            mic.start()
            mic.onend = () => {
                console.log("continue...")
                mic.start()
            }
        } 
        else {
            mic.stop()
            mic.onend = () => {
                console.log("Stopped mic on click")
            }
        }
        mic.onstart = () => {
            console.log("Mic's on")
        }

        mic.onresult = eve => {
            const transcript = Array.from(eve.results).map(result => result[0]).map(result => result.transcript).join("")
            // alert(transcript)
            setNote(transcript)

            mic.onerror = eve => {
                console.log(eve.error)
            }
        }
    }

    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('')
    }

    // Music Slider
    const [position, setPosition] = useState(0);

    const handleChange = (eve) => {
        const newPosition = eve.target.value;
        setPosition(newPosition);
    }

    return(
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

                <div class="container-flex">
                    <div className="container">
                        <div className="box">
                            <h2>Current Transcript</h2>
                            <button onClick={handleSaveNote} disabled={!note}>
                                Save Transcript
                            </button>
                            
                            <p>{note}</p>
                        </div>

                        <div className="box">
                            <h2>Saved Transcripts</h2>
                            {savedNotes.map(n => (
                                <p key={n}>{n}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={position}
                    onChange={handleChange}
                />
                <div class="audio-button-flex">
                    <button onClick={startListening}>
                        Start
                    </button>
                    <button onClick={() => setIsListening(false)}>
                        Stop
                    </button>
                    <button disabled={isListening}>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default Audio;