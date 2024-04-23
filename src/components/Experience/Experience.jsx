import React, { useRef } from "react";
import "./Experience.css";
import { EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";

const Experience = () => {
  return (
    <>
      <section className="experience-container">
        <div className="experience-heading">
          <div className="experience-line-before"></div>
          <h5>Work Experiences</h5>
        </div>

        <div className="experience-content">
          {EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
