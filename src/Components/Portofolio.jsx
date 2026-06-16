import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/gallery/1.jpeg";
import img2 from "../assets/gallery/2.jpeg";
import img3 from "../assets/gallery/3.jpeg";
import img4 from "../assets/gallery/33334.jpeg";
import img5 from "../assets/gallery/5.jpeg";
import img6 from "../assets/gallery/6.jpeg";

const photos = [
  { src: img1, label: "" },
  { src: img2, label: "" },
  { src: img3, label: "" },
  { src: img4, label: "" },
  { src: img5, label: "" },
  { src: img6, label: "" },
];

const Portofolio = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery-section" id="portfolio">
      <div className="gallery-top">
        <h2 className="gallery-heading">Inside The Space</h2>
        <p className="gallery-sub">
          Every corner designed for your perfect shot
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="g-item"
            ref={(el) => (itemRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <img src={photo.src} alt={photo.label} />
            <div className="g-corner-accent" />
            <div className="g-overlay">
              <span className="g-label">{photo.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-bottom">
        <button className="nav-btn-1 book-now-btn">
          <Link to="/book">Book Now</Link>
        </button>
      </div>
    </section>
  );
};

export default Portofolio;
