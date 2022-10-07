import React from "react";
import FrontPage from "./Components/FrontPage/FrontPage";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Skills from "./Components/Skills&Edu/Skills";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
