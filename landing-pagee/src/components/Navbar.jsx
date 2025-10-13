import { useState } from "react"
import React from "react";
// import logo from "../assets/logo.svg"
import logo from "../assets/logo.svg"

import "../styles/navbar.css";

const Navbar = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <nav className="navbar">
        <div className="nav-text">
            <img src={logo} alt="Logo" className="logo" />
            <h1>SEGUN ARIBIDO</h1>
        </div>
        <div>
            <ul className="nav-ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">About me</a></li>
                <button><a href="#">Let's Work</a></button>
            </ul>
        </div>
      </nav>
     
    );
  };
  
  export default Navbar;
  