import React from "react";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";
import About from "../about/about";
import Contact from "../contact/contact"; 
import Nav from "../nav/nav"
function Home(){
return(
    
    <div className="home-container">
        
          <div className="top-buttons">
          
            <img src="/61109.png" className="top-button"></img>
            <img src="github-6980894_960_720.webp" className="top-button"></img>
               
            </div>
            <div className="content-container">
                <img src="/1684867377793.jpg" alt="Descripción de la imagen" className="side-image" />
                <div className="text-container">
                <h1 className="left-aligned-text">
                    Hi, I'm Gonzalo Emanuel Aguetti   
                </h1>
                <h2 className="left-aligned-text">
                Developer & Designer
                    I'm a Front-end Developer who makes visually appealing and user-friendly websites.
                    Currently in love with React.
                </h2>
                
                </div>
            </div>
            <div>
            <About/>
            </div>
            <div>
            <Contact/>
            </div>
        
    </div>
)
}

export default Home;