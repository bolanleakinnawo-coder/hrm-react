import React from "react";
import homely1 from "../assets/homely/home1.jpg";
import homely2 from "../assets/homely/home2.jpg";
import homely3 from "../assets/homely/home3.jpg";
import homely4 from "../assets/homely/home4.jpg";
import { GrLinkNext } from "react-icons/gr";

const Series = () => {
  const seriesData = [
    {
      title: "The Homely Series",
      images: [
        { src: homely1, desc: "Homely BAckground 1" },
        { src: homely2, desc: "Homely background 2" },
        { src: homely3, desc: "Homely background 3" },
        { src: homely4, desc: "Homely background 4" },
      ],
    },
    {
      title: "The Pro Series",
      images: [
        { src: homely1, desc: "Pro Background 1" },
        { src: homely2, desc: "Pro Background 2" },
        { src: homely3, desc: "Pro Background 3" },
        { src: homely4, desc: "Pro Background 4" },
      ],
    },
  ];

  return (
    <section id="series" className="series-section">
      <p className="series-p">Choose your favorite series</p>
      <h2 className="series-h2">Two series. Endless Content.</h2>

      <div className="series-wrapper">
        {seriesData.map((series) => (
          <div key={series.title} className="series-block">
            <h1 className="series-title">{series.title}</h1>
            <div className="series-images-container">
              {series.images.map((image, index) => (
                <div key={index} className="series-card">
                  <img src={image.src} alt={image.desc} />
                  <div className="series-card-text">
                    {image.desc} <GrLinkNext className="next-icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Series;
