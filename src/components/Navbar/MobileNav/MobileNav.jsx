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
              <a href="#herosection" className="menu-item">
                Home
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#skillssection" className="menu-item">
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

              <a
                className="contact-btn" 
                onClick={toggleMenu}
                href="./assets/resume/Chandan_Kumar_Data_Analyst_Resume.pdf"
                // download="Chandan_Kumar_Data_Analyst_Resume.pdf"
                style={{ textDecoration: "none", color: "#FFF" }}
                target="_chandan"
              >
                Resume
              </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
