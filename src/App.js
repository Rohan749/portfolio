import React from "react";
import "./App.css"
import FrontPage from "./Components/FrontPage/FrontPage";
import ProjectSection from "./Components/ProjectSection copy/ProjectSection";
import Skills from "./Components/Skills&Edu/Skills";

function App() {
  return (
    <>
    <div className="skill__links">
        <nav />
        <nav />
        <nav />
        <nav />
        <nav />
        <nav>
          <a href="#home">Home</a>
        </nav>
        <nav>
          <a href="#projects">Projects</a>
        </nav>
        <nav>
          <a href="#skills">Skills</a>
        </nav>
      </div>
      <FrontPage />
      <ProjectSection />
      <Skills />
      
    </>
  );
}

export default App;
