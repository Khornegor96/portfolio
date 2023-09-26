import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx"; 
import Contact from "./components/contact/contact.jsx";
import Nav from "./components/nav/nav"

function App() {
  return (
    
    <div className="App">
     <Nav/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
}

export default App;