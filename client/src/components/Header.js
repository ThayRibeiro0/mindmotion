import React, { useState } from "react";
import logo from "../assets/pinch.png";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (React.createElement("header", { className: "main-header" },
        React.createElement("div", { className: "logo" },
            React.createElement("img", { src: logo, alt: "MindMotion Logo", className: "logo-icon" }),
            React.createElement("span", { className: "logo-text" },
                React.createElement("span", { className: "logo-main" }, "Mind"),
                React.createElement("span", { className: "logo-highlight" }, "Motion"))),
        React.createElement("nav", { className: `nav-links ${isMenuOpen ? "open" : ""}` },
            React.createElement("a", { href: "#" }, "Home"),
            React.createElement("a", { href: "#" }, "Login"),
            React.createElement("a", { href: "#" }, "Contact")),
        React.createElement("div", { className: "hamburger", onClick: toggleMenu },
            React.createElement("span", { className: "bar" }),
            React.createElement("span", { className: "bar" }),
            React.createElement("span", { className: "bar" }))));
};
export default Header;
