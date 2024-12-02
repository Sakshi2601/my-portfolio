import React, { useState } from "react";
import logo from "../../assets/fitlift.png";
import "./NavbarStyles.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Internships", href: "#internships" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
          <span className="brand"> HELLO WORLD!</span>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
