import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import ContactMe from "./components/pages/ContactMe";

function App() {
    return (
        <Router>
            <Navbar />
            <Header />
            <Routes>
                <Route exact path="/" element={<AboutMe />} />
                <Route path="/ContactMe" element={<ContactMe />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
