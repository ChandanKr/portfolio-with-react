/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <div id="herosection"></div>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src="./assets/images/nav-logo.png" alt="" className="logo" />

          <ul>
            <li>
              <a href="#herosection" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skillssection" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="menu-item">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="menu-item">
                Projects
              </a>
            </li>
            {/* <li>
              <a href="#contactme" className="menu-item">
                Contact Me
              </a>
            </li> */}

            <button className="contact-btn" onClick={toggleMenu}>
              <a
                href="#contactme"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                Contact or Hire Me
              </a>
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <img src="./assets/images/close-icon.png" alt="" className="" />
            ) : (
              <img src="./assets/images/menu-icon.png" alt="" className="" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
