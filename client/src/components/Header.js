import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import logo from "../assets/pinch.png";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (_jsxs("header", { className: "main-header", children: [_jsxs("div", { className: "logo", children: [_jsx("img", { src: logo, alt: "MindMotion Logo", className: "logo-icon" }), _jsxs("span", { className: "logo-text", children: [_jsx("span", { className: "logo-main", children: "Mind" }), _jsx("span", { className: "logo-highlight", children: "Motion" })] })] }), _jsxs("nav", { className: `nav-links ${isMenuOpen ? "open" : ""}`, children: [_jsx("a", { href: "#", children: "Home" }), _jsx("a", { href: "#", children: "Login" }), _jsx("a", { href: "#", children: "Contact" })] }), _jsxs("div", { className: "hamburger", onClick: toggleMenu, children: [_jsx("span", { className: "bar" }), _jsx("span", { className: "bar" }), _jsx("span", { className: "bar" })] })] }));
};
export default Header;
