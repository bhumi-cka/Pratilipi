
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {useState, useEffect} from "react";
import Logo from "../Resources/Images/logo-purple-bg.png"; 
import MicOn from "../Resources/Images/micOn.png";
import MicStop from "../Resources/Images/micStop.png";


const AudioTest = () => {

    let d = new Date();
    let date = d.toDateString();

    const [textToCopy, setTextToCopy] = useState();
    const [elapsedTime, setElapsedTime] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [isRecording, setIsRecording] = useState(false);


    //subscribe to thapa technical for more awesome videos

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
        setIsRecording(true);
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setIsRecording(false);
    };

    const handleSliderChange = (event) => {
        setSliderValue(Number(event.target.value));
    };

    useEffect(() => {
        let timer;
    
        if (isRecording && elapsedTime < 3600) { 
          timer = setTimeout(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            setSliderValue((prevSliderValue) => prevSliderValue + 1);
          }, 1000); // Update elapsed time every second
        }
        return () => {
            clearTimeout(timer);
        };
        }, [isRecording, elapsedTime]);

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
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

                <p class="date">{date}</p>

                <div class="container-flex">
                    <div className="box audio-test-box">
                        {transcript}
                    </div>
                </div>

                <div className="slider-container">
                    <p>{elapsedTime}</p>
                    <input
                        type="range"
                        min="0"
                        max="3600"
                        step="1"
                        value={sliderValue}
                        onChange={handleSliderChange}
                        disabled={2===2}
                    />
                    <p>3600</p>
                </div>

                <div className="audio-button-flex">
                    <button onClick={startListening}>
                        <img class="start-record-button-img" src={MicOn} alt="mic-on-img"></img>
                    </button>
                    <button onClick={stopListening}>
                        <img class="stop-record-button-img" src={MicStop} alt="mic-stop-img"></img>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AudioTest;