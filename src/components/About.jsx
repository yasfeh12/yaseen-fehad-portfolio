import React from "react";
import styled from "styled-components";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiVite,
  SiJest,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiPostgresql,
} from "react-icons/si";

const AboutWrapper = styled.div`
  color: #fff;
`;

const Heading = styled.h2`
  font-size: 44px;
  font-weight: bold;
  color: #f39c12;
  margin-bottom: 15px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 21px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 22px; /* Increased padding */
  border: 1px solid #f39c12;
  border-radius: 5px;
  font-size: 28px; /* Increased font size by 80% */
  background-color: #333;
  color: orange;
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #f39c12;
    color: #000;
    transform: translateY(-5px);

    svg {
      color: #000; /* Change icon color on hover */
    }
  }

  svg {
    font-size: 44px; /* Increased icon size by 80% */
    transition: color 0.3s; /* Smooth color transition for icons */
    color: #fff;
  }
`;

const skillsData = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "React Native", icon: <SiReactrouter /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Git", icon: <SiGit /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const About = () => (
  <AboutWrapper>
    <Heading>About Me</Heading>
    <Text>
      I am a passionate and results-driven individual with 2 years of leadership
      and operational experience. I have completed two intensive Front-End
      JavaScript Development bootcamps, focusing on modern web development tools
      and technologies.
    </Text>
    <Heading>Technical Skills</Heading>
    <SkillsWrapper>
      {skillsData.map((skill) => (
        <Skill key={skill.name}>
          {skill.icon}
          {skill.name}
        </Skill>
      ))}
    </SkillsWrapper>
  </AboutWrapper>
);

export default About;
