import React from "react";
import "../styles/navbar.css";
import { useState } from "react";
import logo from "../assets/logo.svg";
  
  
  const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    
    return (
      <header className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="nav-logo" />
          <span className="brand-name">
            <strong>SEGUN</strong> <br /> ARIBIDO
          </span>
        </div>
  
        <nav className="nav-right">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About me</a></li>
          </ul>
          <button className="nav-btn">Let’s Work</button>


      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
        </nav>
      </header>
    );
  };


  export default Navbar;
  