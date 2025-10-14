import { useState } from "react"
import React from "react";
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
                {/* <button><a href="#">Let's Work</a></button> */}
                <button>Let's Work</button>
            </ul>
        </div>
      </nav>
     
    );
  };



  const Navbar = () => {
    return (
      <header className="modern-navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="nav-logo" />
          <span className="brand-name">
            <strong>SEGUN</strong> ARIBIDO
          </span>
        </div>
  
        <nav className="nav-right">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About me</a></li>
          </ul>
          <button className="nav-btn">Let’s Work</button>
        </nav>
      </header>
    );
  };
  
  




  const Navbar = () => {
    return (
      <header className="modern-navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="nav-logo" />
          <span className="brand-name">
            <strong>SEGUN</strong> ARIBIDO
          </span>
        </div>
  
        <nav className="nav-right">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About me</a></li>
          </ul>
          <button className="nav-btn">Let’s Work</button>
        </nav>
      </header>
    );
  };


  export default Navbar;
  