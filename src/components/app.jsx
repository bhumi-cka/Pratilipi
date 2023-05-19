import React from "react";
import LandingPage from "./landingpage";
import LoginPage from "./loginpage";
// import CreateAccount from "./createaccount";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;