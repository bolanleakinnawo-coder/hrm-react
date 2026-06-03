import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeMenu = () => setNavOpen(false);

  return (
    <div className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        HRM <br />
        <span className="logo-subtext">Asthetic Haven</span>
      </NavLink>

      <button
        className="nav-toggle"
        onClick={() => setNavOpen((current) => !current)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${navOpen ? "open" : ""}`}>
        <button className="nav-close" onClick={closeMenu}>
          Cancel
        </button>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <Link
          to="series"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          onClick={closeMenu}
        >
          The series
        </Link>

        <Link
          to="pricing"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          onClick={closeMenu}
        >
          Pricing
        </Link>

        <Link
          to="portofolio"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          onClick={closeMenu}
        >
          Portofolio
        </Link>

        <Link
          to="portofolio"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          onClick={closeMenu}
        >
          Rules
        </Link>
      </div>

      <button className="nav-btn nav-btn-desktop">
        <NavLink to="/">Book Now</NavLink>
      </button>
    </div>
  );
};

export default Navbar;
