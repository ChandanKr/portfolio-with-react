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

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src="./assets/images/nav-logo.png" alt="" className="logo" />

          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Experience</a>
            </li>
            <li>
              <a className="menu-item">Projects</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={toggleMenu}>
              Hire Me
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
