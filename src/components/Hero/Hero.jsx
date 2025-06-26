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
            An experienced Software Engineer with 3+ years in frontend development using ReactJS, JavaScript, HTML, and CSS at Mphasis since December 2021. Skilled in building user-friendly and efficient web applications in Agile teams. Now shifting to Data Analytics, learning tools like Excel, SQL, Python, and Power BI. Looking to use my technical background and growing data skills to support smart, data-based decisions. Open to new roles as a Data Analyst.
          </p>
          {/* <p>
            Aspiring Data Analyst | Frontend Software Developer | 3.3 Years of
            Hands-on Experience | Turning raw data into actionable insights to
            empower businesses with data-driven intelligence.
          </p> */}
        </div>

        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src="./assets/images/Power-BI-Logo.png" alt="Power-BI-Logo" />
            </div>
            <img
              // src="./assets/images/hero-img-red-bg.jpg"
              src="./assets/images/chandan_hd.png"
              alt="hero-img"
              className="main-img"
            />
          </div>

          {/* This is for navigation only, please ignore this */}
          <div id="skillssection"></div> 

          <div>
            <div className="tech-icon">
              <img src="./assets/images/sql-logo.png" alt="sql-logo" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/spreadsheet-logo.png" alt="spreadsheet-logo" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/python-logo.png" alt="python-logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
