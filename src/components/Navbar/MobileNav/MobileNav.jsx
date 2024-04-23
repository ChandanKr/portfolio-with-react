/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-container">
          <img src="./assets/images/nav-logo.png" alt="" className="logo" />

          <ul>
            <li onClick={toggleMenu}>
              <a href="#hero" className="menu-item">
                Home
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#experience" className="menu-item">
                Experience
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#projects" className="menu-item">
                Projects
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#contactme" className="menu-item">
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={toggleMenu}>
              <a
                href="#contactme"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                Hire Me
              </a>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
