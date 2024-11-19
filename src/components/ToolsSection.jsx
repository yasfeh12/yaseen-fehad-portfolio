import React from "react";
import styled from "styled-components";
import { FaReact, FaNodeJs, FaGithub, FaGit, FaDatabase } from "react-icons/fa";
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

const SectionWrapper = styled.div`
  text-align: center;
  margin: 40px 0;
  color: #ffffff;
  background-color: transparent; /* Ensure no conflicting background */
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubHeading = styled.h2`
  font-size: 36px;
  color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
  margin-bottom: 30px;
`;

const ToolsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ToolCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  padding: 15px;
  background-color: #222;
  border-radius: 10px;
  color: #ffffff;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-10px);
    background-color: #f39c12;
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  color: #f39c12;
`;

const ToolName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ToolDescription = styled.p`
  font-size: 14px;
  color: #ddd;
`;

const ToolsSection = () => (
  <SectionWrapper>
    <Heading>Premium</Heading>
    <SubHeading>TOOLS</SubHeading>
    <ToolsGrid>
      <ToolCard>
        <IconWrapper>
          <SiJavascript />
        </IconWrapper>
        <ToolName>JavaScript</ToolName>
        <ToolDescription>Programming Language</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiHtml5 />
        </IconWrapper>
        <ToolName>HTML</ToolName>
        <ToolDescription>Markup Language</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiCss3 />
        </IconWrapper>
        <ToolName>CSS</ToolName>
        <ToolDescription>Styling Language</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <FaReact />
        </IconWrapper>
        <ToolName>React</ToolName>
        <ToolDescription>Frontend Framework</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <FaNodeJs />
        </IconWrapper>
        <ToolName>Node.js</ToolName>
        <ToolDescription>Backend Framework</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <FaGit />
        </IconWrapper>
        <ToolName>Git</ToolName>
        <ToolDescription>Version Control</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <FaGithub />
        </IconWrapper>
        <ToolName>GitHub</ToolName>
        <ToolDescription>Code Repository</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiPostgresql />
        </IconWrapper>
        <ToolName>PostgreSQL</ToolName>
        <ToolDescription>Database</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiTailwindcss />
        </IconWrapper>
        <ToolName>Tailwind</ToolName>
        <ToolDescription>CSS Framework</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiBootstrap />
        </IconWrapper>
        <ToolName>Bootstrap</ToolName>
        <ToolDescription>CSS Framework</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiJest />
        </IconWrapper>
        <ToolName>Jest</ToolName>
        <ToolDescription>Testing Library</ToolDescription>
      </ToolCard>
      <ToolCard>
        <IconWrapper>
          <SiVite />
        </IconWrapper>
        <ToolName>Vite</ToolName>
        <ToolDescription>Build Tool</ToolDescription>
      </ToolCard>
    </ToolsGrid>
  </SectionWrapper>
);

export default ToolsSection;
