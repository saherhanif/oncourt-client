import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from './pages/aboutPage'
import Home from './pages/homePage'
import Services from "./pages/servicesPage";
import Contact from "./pages/contactPage";
import Navbar from "./components/nav-bar";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
