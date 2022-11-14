import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Socials from './components/Navbar/Socials'
import Footer from './components/Navbar/Footer'

function App() {
return (
	<Router>
    <Socials />
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route exact path='/' element={<About/>} />
		<Route path='/projects' element={<Projects/>} />
		<Route path='/contact' element={<Contact/>} />
	</Routes>
  <Footer />
	</Router>
);
}

export default App;
