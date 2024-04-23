import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import ContactMe from "./components/ContactMe/ContactMe";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
};

export default App;
