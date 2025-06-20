import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import ProfessionalProjects from "./components/ProfessionalProjects/ProfessionalProjects";
import PersonalProjects from "./components/PersonalProjects/PersonalProjects";
import Experience from "./components/Experience/Experience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Experience />
        <ProfessionalProjects />
        <PersonalProjects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
};

export default App;
