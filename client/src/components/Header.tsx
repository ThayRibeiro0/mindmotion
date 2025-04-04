import React, { useState } from "react";
import logo from "../assets/pinch.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="logo">
        <img src={logo} alt="MindMotion Logo" className="logo-icon" />
        <span className="logo-text">
          <span className="logo-main">Mind</span>
          <span className="logo-highlight">Motion</span>
        </span>
      </div>

      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Meditate</a>
        <a href="#">Contact</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
