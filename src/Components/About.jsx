import aboutImage from "../assets/PRO/4.jpeg";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Studio space" />
        </div>

        <div className="about-content">
          <p className="about-tag">ABOUT THE STUDIO</p>

          <h2>
            A Space Designed
            <br />
            For Your Best Moments
          </h2>

          <p className="about-text">
            Welcome to our creative studio, a thoughtfully designed space where
            ideas come to life. Whether you are creating content, celebrating
            special moments, or building your brand, we provide the perfect
            atmosphere to bring your vision into reality.
          </p>

          <p className="about-text">
            From elegant setups to professional equipment, every detail is
            created to give you a seamless and memorable experience.
          </p>

          <button className="about-btn">Explore Our Space</button>
        </div>
      </div>
    </section>
  );
}

export default About;
