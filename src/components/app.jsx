import React from "react";
import LandingPage from "./landingPage";
import LoginPage from "./loginpage";
import CreateAccount from "./createAccount";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./homePage";
import Audio from "./audio";
import AudioTest from "./audiotest";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/record" element={<AudioTest />} />
                </Routes>
            </Router>
            {/* <LandingPage /> */}
            {/* <AudioInput /> */}
            {/* <Audio /> */}
            {/* <HomePage /> */}
        </div>
    );
}

export default App;