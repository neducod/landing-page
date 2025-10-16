// import React, { useState } from "react";



// import { Link } from "react-router-dom";
// import { NavLink, Link } from "react-router-dom";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import React, { useState, useEffect } from "react";


import "../styles/navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "#work") {
      const section = document.getElementById("work");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


/*
  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
  
      if (workSection) {
        const sectionTop = workSection.offsetTop - 100;
        const sectionBottom = sectionTop + workSection.offsetHeight;
  
        if (scrollY + viewportHeight / 2 >= sectionTop && scrollY < sectionBottom) {
          setActiveSection("work");
        } else if (scrollY < sectionTop - 150) {
          setActiveSection("home");
        } else {
          setActiveSection(null);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
*/
  




  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
        <span className="brand-name">
          SEGUN <br /> ARIBIDO
        </span>
      </div>

      <nav className="nav-right">
        <ul className="nav-links">

 {/* <Link to="/" className="active">
              Home
            </Link> */}
<li>
             <NavLink
    to="/"
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Home
  </NavLink>
          </li> 

          {/* <li>
             <NavLink
    to="/"
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Home
  </NavLink>
          </li> */}




          {/* <li>
            <a href="#work">Work</a>
          </li> */}

{/* <li>
  {location.pathname === "/" ? (
    <a
      href="#work"
      className={activeSection === "work" ? "active" : ""}
    >
      Work
    </a>
  ) : (
    <button
      className={location.pathname.startsWith("/project") ? "active" : ""}
      onClick={() => navigate("/#work")}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      Work
    </button>
  )}
</li>
 */}



<li>
  {location.pathname === "/" ? (
    <a href="#work" className={location.hash === "#work" ? "active" : ""}>
      Work
    </a>
  ) : (
    <button
      className={location.pathname.startsWith("/project") ? "active" : ""}
      onClick={() => navigate("/#work")}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      Work
    </button>
  )}
</li> 




          <li>


          <NavLink
      to="/about"
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      About me
    </NavLink>
            {/* <Link to="/about">About me</Link> */}
          </li>
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
