import React from "react";
import FrontPage from "./Components/FrontPage/FrontPage";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Skills from "./Components/Skills&Edu/Skills";
import {BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
      <HashRouter basename="/rohan-portfolio-website/">
        <Routes>
          <Route path="/rohan-portfolio-website/" element={<FrontPage />} />
          <Route path="/rohan-portfolio-website/projects" element={<ProjectSection />} />
          <Route path="/rohan-portfolio-website/skills" element={<Skills />} />
        </Routes>
      </HashRouter>
      </Router>
    </>
  );
}

export default App;
