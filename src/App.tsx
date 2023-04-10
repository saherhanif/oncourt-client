import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from './pages/aboutPage'
import Home from './pages/homePage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
