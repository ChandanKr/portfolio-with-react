import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <>
      <div className="experience-card">
        <h6>{details.title}</h6>

        <div className="experience-duration">{details.date}</div>

        <ul>
          {details.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div id="projects"></div>
      </div>
    </>
  );
};

export default ExperienceCard;
