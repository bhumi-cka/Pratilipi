import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import useClipboard from "react-use-clipboard";
import Logo from "../Resources/Images/logo-purple-bg.png"; 
import MicOn from "../Resources/Images/micOn.png";
import MicStop from "../Resources/Images/stoprec.png";
import axios from 'axios';


const AudioTest = () => {

    let d = new Date();
    let date = d.toDateString();

    const [textToCopy, setTextToCopy] = useState();
    const [elapsedTime, setElapsedTime] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });
    const [transLanguage, setTransLanguage] = useState("");


    function handleSelect(event) {
        setTransLanguage(event.target.value);
    }

    const sendAudioData = async () => {
        try {
            const audioFile = new FormData();
            audioFile.append('audio', textToCopy);

            const response = await axios.post('http://localhost:3000', audioFile, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Audio sent');
        }
        
        catch (error) {
            alert("Failed to send data");
        }
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: transLanguage });
        setIsRecording(true);
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setIsRecording(false);
        sendAudioData();
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

    useEffect(() => {
        setTextToCopy(transcript); // Update the textToCopy when transcript changes
    }, [transcript]);

    if (!browserSupportsSpeechRecognition) {
        return null
    }


    return(
        <div className="audio-input">

            {/* Left panel */}
            

            <div className="right-audio">

                <div className="select-lang-div">
                    <select className="select-language" value={transLanguage} onChange={handleSelect} name="language">
                        <option value="en-IN">English (India)</option>
                        <option value="hi-IN">Hindi</option>
                        <option value="mr-IN">Marathi</option>
                    </select>
                </div>

                <p className="date">{date}</p>
                <button onClick={setCopied} className="copy-to-clipboard-button">
                        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                </button>

                <div className="container-flex">
                    <div className="box audio-test-box" onClick={() => setTextToCopy(transcript)}>
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
                    <button className="audio-start" onClick={startListening}>
                        <img className="start-record-button-img" src={MicOn} alt="mic-on-img"></img>
                    </button>
                    <button className="audio-stop" onClick={stopListening}>
                        <img className="stop-record-button-img" src={MicStop} alt="mic-stop-img"></img>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AudioTest;