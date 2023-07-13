import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage.jsx";
import AudioTest from "./AudioTest.jsx";
import Meetings from "./Meetings.jsx";

function App() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} /> 
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/record" element={<AudioTest />} />
                    <Route path="/meetings" element={<Meetings />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;