import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="Nav">
     <Link to="/"className="Button">
        Home
      </Link>
<Link to="/about"className="Button">
         About
      </Link>
      <Link to="/contact"className="Button">
        Contact </Link>
     
      <Link to="https://www.linkedin.com/in/gonzalo-aguetti-18633a278/" >
      <img src="/linkedin.jpg" className="Button-image"/>
      </Link>
      <Link to="https://github.com/Khornegor96">
        <img src="/github-6980894_960_720.webp" className="Button-image"/>
      </Link>

        </div>
    )
}
        export default Nav;
    

