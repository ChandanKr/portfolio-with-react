import React, { useRef } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import Slider from "react-slick";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Projects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <section className="projects-container">
        <div className="projects-heading">
          <div className="projects-line-before"></div>
          <h5>Projects</h5>
        </div>

        <div className="projects-content">
          <div className="arrow-right" onClick={sliderRight}>
            <FaAnglesRight />
          </div>

          <div className="arrow-left" onClick={sliderLeft}>
            <FaAnglesLeft />
          </div>

          <Slider ref={sliderRef} {...settings}>
            {PROJECTS.map((item) => (
              <ProjectsCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Projects;
