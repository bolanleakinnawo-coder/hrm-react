import React from "react";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="location-container">
          <MdLocationPin className="location-icon" />
          <p className="location">Ilorin, Nigeria</p>
        </div>
        <h1>
          The Perfect Space <br /> for Your Next <br />{" "}
          <span className="gold-text">Content Shoot</span>
        </h1>
        <p className="hero-description">
          From lifestyle content to brand campaigns, our curated studio sets
          help you create high-quality content that stands out and gets noticed.
        </p>

        <div className="nav-btns">
          <button className="nav-btn-1">
            <a href="/">
              Explore Our Series <span className="btn-arrow">↗</span>
            </a>
          </button>

          <button className="nav-btn-2">
            <Link href="/book">
              Book a session <span className="btn-arrow">↗</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
