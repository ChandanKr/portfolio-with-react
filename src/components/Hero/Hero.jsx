import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container" id="hero">
        <div className="hero-content">
          <div className="greet-content">
            <div className="hello-line"></div>
            <h3>Hello, I'm</h3>
          </div>
          <h2>Chandan Kumar</h2>
          <p>
            Aspiring Data Analyst | Frontend Software Developer | 3.3 Years of
            Hands-on Experience | Turning raw data into actionable insights to
            empower businesses with data-driven intelligence.
          </p>
        </div>

        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src="./assets/images/react-logo.png" alt="react-logo" />
            </div>
            <img
              src="./assets/images/hero-img-red-bg.jpg"
              alt="hero-img"
              className="main-img"
            />
          </div>

          <div>
            <div className="tech-icon">
              <img src="./assets/images/html-logo.png" alt="html-logo" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/css-logo.png" alt="css-logo" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/js-logo.png" alt="js-logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
