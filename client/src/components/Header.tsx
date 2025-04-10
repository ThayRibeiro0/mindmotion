import React, { useState } from "react";
import logo from "../assets/pinch.png";
import { Link } from "react-router-dom";

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
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
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
