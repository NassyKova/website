import React from "react";
// import "./App.scss";
import Navbar from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rigging from "./components/pages/Rigging/Rigging";
// import Projects from "./components/pages/Projects/Projects"
import Contact from "./components/pages/Contact/contact";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/Header";
import About from "./components/pages/Index";
import { ArticlesCardsGrid } from "./components/pages/Projects/Projects";
import { NothingFoundBackground } from "./components/NotFound";


function App() {
  return (
    <Router>
      <Socials />
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<ArticlesCardsGrid  />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rigging" element={<Rigging />} />
        <Route path="/*" element={<NothingFoundBackground />} />
      </Routes>
      <Footer />
      <GlobalStyle />;
    </Router>
  );
}

export default App;
