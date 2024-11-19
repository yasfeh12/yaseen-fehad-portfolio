import React from "react";
import styled from "styled-components";
import { FaReact, FaNodeJs, FaGithub, FaGit } from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiJest,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import SoftSkills from "../components/SoftSkills";
import LearningGoals from "../components/LearningGoals";
import Proficiency from "../components/SkillProficiency";

const SectionWrapper = styled.div`
  text-align: center;
  margin: 60px 0;
  color: #ffffff;
`;

const Heading = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 40px;
  color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
  margin-bottom: 50px;
`;

const ToolsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const ToolCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 25px;
  background-color: #222;
  border-radius: 15px;
  color: #ffffff;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.1);
    background-color: #f39c12;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  font-size: 50px;
  margin-bottom: 15px;
  color: #f39c12;
`;

const ToolName = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ToolDescription = styled.p`
  font-size: 16px;
  color: #ddd;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  transition: opacity 0.3s ease;
`;

const ToolsSection = () => (
  <SectionWrapper>
    <Heading>Skills</Heading>
    <SubHeading>TECHNOLOGIES & TOOLS</SubHeading>
    <ToolsGrid>
      <ToolCard>
        <IconWrapper>
          <SiJavascript />
        </IconWrapper>
        <ToolName>JavaScript</ToolName>
        <ToolDescription>Programming Language</ToolDescription>
        <Proficiency level={75} />
        <Overlay className="overlay">
          <p>
            JavaScript powers interactive elements and complex applications on
            the web.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiHtml5 />
        </IconWrapper>
        <ToolName>HTML</ToolName>
        <ToolDescription>Markup Language</ToolDescription>
        <Proficiency level={90} />
        <Overlay className="overlay">
          <p>
            HTML is the foundation of all web pages. It structures content on
            the web.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiCss3 />
        </IconWrapper>
        <ToolName>CSS</ToolName>
        <ToolDescription>Styling Language</ToolDescription>
        <Proficiency level={90} />
        <Overlay className="overlay">
          <p>
            CSS provides styling, making websites visually appealing and
            responsive.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <FaReact />
        </IconWrapper>
        <ToolName>React</ToolName>
        <ToolDescription>Frontend Framework</ToolDescription>
        <Proficiency level={80} />
        <Overlay className="overlay">
          <p>
            React is a library for building dynamic user interfaces for web
            applications.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <FaNodeJs />
        </IconWrapper>
        <ToolName>Node.js</ToolName>
        <ToolDescription>Backend Framework</ToolDescription>
        <Proficiency level={70} />
        <Overlay className="overlay">
          <p>
            Node.js allows JavaScript to run server-side, enabling backend
            functionality.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <FaGit />
        </IconWrapper>
        <ToolName>Git</ToolName>
        <ToolDescription>Version Control</ToolDescription>
        <Proficiency level={95} />
        <Overlay className="overlay">
          <p>
            Git is a version control system for tracking changes in code during
            development.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <FaGithub />
        </IconWrapper>
        <ToolName>GitHub</ToolName>
        <ToolDescription>Code Repository</ToolDescription>
        <Proficiency level={95} />
        <Overlay className="overlay">
          <p>
            GitHub is a cloud-based platform for hosting and sharing code
            repositories.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiPostgresql />
        </IconWrapper>
        <ToolName>PostgreSQL</ToolName>
        <ToolDescription>Database</ToolDescription>
        <Proficiency level={65} />
        <Overlay className="overlay">
          <p>
            PostgreSQL is an advanced, open-source relational database system.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiTailwindcss />
        </IconWrapper>
        <ToolName>Tailwind</ToolName>
        <ToolDescription>CSS Framework</ToolDescription>
        <Proficiency level={65} />
        <Overlay className="overlay">
          <p>
            Tailwind CSS is a utility-first CSS framework for rapid UI
            development.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiBootstrap />
        </IconWrapper>
        <ToolName>Bootstrap</ToolName>
        <ToolDescription>CSS Framework</ToolDescription>
        <Proficiency level={95} />
        <Overlay className="overlay">
          <p>
            Bootstrap is a popular CSS framework for responsive and mobile-first
            front-end development.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiJest />
        </IconWrapper>
        <ToolName>Jest</ToolName>
        <ToolDescription>Testing Library</ToolDescription>
        <Proficiency level={70} />
        <Overlay className="overlay">
          <p>
            Jest is a testing framework for ensuring JavaScript code reliability
            and correctness.
          </p>
        </Overlay>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiVite />
        </IconWrapper>
        <ToolName>Vite</ToolName>
        <ToolDescription>Build Tool</ToolDescription>
        <Proficiency level={85} />
        <Overlay className="overlay">
          <p>Vite is a fast development build tool for modern web projects.</p>
        </Overlay>
      </ToolCard>
    </ToolsGrid>
    <SoftSkills />
    <LearningGoals />
  </SectionWrapper>
);

export default ToolsSection;
