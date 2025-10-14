import React from "react";
import "../styles/navbar.css";

import logo from "../assets/logo.svg";
  
  
  const Navbar = () => {
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
        </nav>
      </header>
    );
  };


  export default Navbar;
  