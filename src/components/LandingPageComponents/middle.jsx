import React from "react";
import ImageMan from "../Images/ManLanding.png";
import ImageComp from "../Images/ComputerLanding.png";

function Middle() {
    return (
        <div>
            <div class="middle-1">
                <div class="paragraphs-middle">
                    <p class="bold-para-middle">Empowering business users with real-time transcription of conversations in multiple languages using AI</p>
                    <p class="regular-para-middle">Pratilipi uses artificial intelligence to empower users with real-time transcription during business meeting in multiple languages.</p>
                </div>
                <img src={ImageMan} alt="man" class="man-landing"></img>
            </div>
            <div class="middle-2">
                <button class="middle-button">Learn More</button>
                <img src={ImageComp} alt="computer"></img>
            </div>
        </div>
    );
}

export default Middle;