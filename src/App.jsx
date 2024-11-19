import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToolsSection from "./components/ToolsSection";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import WorkPage from "./pages/WorkPage";
import SkillsPage from "./pages/skills";
import ThoughtsPage from "./pages/Thoughts";
import Navbar from "./components/Navbar";

const AppWrapper = styled.div`
  background-color: #1a1a1a; /* Dark background color */
  min-height: 100vh;
  color: #ffffff;
  padding: 20px 0;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/thoughts" element={<ThoughtsPage />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;
