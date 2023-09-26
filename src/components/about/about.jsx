

import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div className="about">
      <h1>Aca about</h1>
      <div className="image-container">
        <Link to="/">
          <img src="/rickAndMorty.jpg" className="imageAbout0" alt="Rick and Morty" />
        </Link>
        <Link to="/">
          <img src="/Plantilla1.jpg" className="imageAbout" alt="Plantilla 1" />
        </Link>
        <Link to="/">
          <img src="/Pokemon.jpg" className="imageAbout" alt="Pokemon" />
        </Link>
        <Link to="/">
          <img src="/webAutos.jpg" className="imageAbout1" alt="Web Autos" />
        </Link>
      </div>
    </div>
  );
}
export default About;