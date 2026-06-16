import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { Menu } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const closeMenu = () => setNavOpen(false);

  return (
    <div className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        HRM
        <span className="logo-subtext"> Aesthetic Haven</span>
      </NavLink>

      <div className={`nav-links ${navOpen ? "open" : ""}`}>
        <button
          className="nav-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <a href="#series" onClick={closeMenu}>
          The Series
        </a>

        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>

        <a href="#portfolio" onClick={closeMenu}>
          Portfolio
        </a>
        <Link to="/rules" onClick={closeMenu}>
          Rules
        </Link>
      </div>

      {/* hamburger — mobile only */}
      <Menu
        className="nav-toggle"
        onClick={() => setNavOpen((o) => !o)}
        aria-label="Toggle navigation"
      />

      {/* Book Now — always visible, separate from nav-btn-desktop */}
      <button className="nav-btn-1 book-now-btn">
        <Link to="/book">Book Now</Link>
      </button>
    </div>
  );
};

export default Navbar;
