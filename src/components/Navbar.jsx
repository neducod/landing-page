import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (location.hash === "#work") {
      const section = document.getElementById("work");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      <div className="naa">
        <div className="nav-left">
          {/* <img src={logo} alt="Logo" className="nav-logo" />
          <span className="brand-name">
            SEGUN <br /> ARIBIDO
          </span> */}
          <img src="/Logo Design.svg" alt="logo-image" />
        </div>

        <nav className={`nav-right ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>

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
            </li>
          </ul>

          <button className="nav-btn" onClick={() => navigate("/about")}>
            Let’s Work
          </button>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
