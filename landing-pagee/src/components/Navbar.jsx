import { useState } from "react"
import "../styles/navbar.css";

const Navbar = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Josephine.</h1>
  
          <div
            className={`nav-links ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#contact" className="contact-btn">
              Let’s Work
            </a>
          </div>
  
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  