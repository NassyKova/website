import React from "react";
// import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import Rigging from "./components/pages/Rigging/Rigging";
import Projects from "./components/Projects/projects";
import Contact from "./components/pages/contact";
import Socials from "./components/Navbar/Socials";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Navbar/Header/Header";

function App() {
  return (
    <Router>
      <Socials />
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rigging" element={<Rigging />} />
      </Routes>
      <Footer />
      <GlobalStyle />;
    </Router>
  );
}

export default App;
