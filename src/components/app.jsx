import React from "react";
import LandingPage from "./landingPage";
import LoginPage from "./loginpage";
import CreateAccount from "./createAccount";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AudioInput from "./audioInput";

function App() {
    return (
        <div>
            {/* <Router>
                <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<CreateAccount />} />
                </Routes>
            </Router> */}
            <LandingPage />
        </div>
    );
}

export default App;