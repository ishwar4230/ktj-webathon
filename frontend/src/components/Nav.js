import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <NavLink exact to="/" className="nav-logo">
          ALL POSTS
          <i className="fas fa-code"></i>
        </NavLink>
        <NavLink exact to="/createpost" className="nav-logo">
          CREATE POST
          <i className="fas fa-code"></i>
        </NavLink>
        <NavLink exact to="/createuser" className="nav-logo">
          USERS
          <i className="fas fa-code"></i>
        </NavLink>
        <NavLink exact to="/yourpost" className="nav-logo">
          YOUR POSTS
          <i className="fas fa-code"></i>
        </NavLink>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
