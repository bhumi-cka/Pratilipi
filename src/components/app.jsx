import React, { useState } from "react";
import LandingPage from "./landingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./homePage.jsx";
import AudioTest from "./audiotest.jsx";
import Meetings from "./meetings.jsx";
import { UserProvider } from "./UserContext";

function App() {



    return (
        <div>
            <Router>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} /> 
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/record" element={<AudioTest />} />
                    <Route path="/meetings" element={<Meetings />} />
                </Routes>
            </UserProvider>
            </Router>
        </div>
    );
}

export default App;