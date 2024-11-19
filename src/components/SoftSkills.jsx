import React from "react";
import styled from "styled-components";
import {
  FaHandshake,
  FaUsers,
  FaLightbulb,
  FaProjectDiagram,
  FaClock,
  FaComments,
  FaLaptopCode,
  FaClipboardCheck,
} from "react-icons/fa";

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const SkillCard = styled.div`
  width: 180px;
  background-color: #333;
  color: #fff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: #f39c12;
    color: #000;
  }

  svg {
    font-size: 40px;
    margin-bottom: 10px;
    transition: transform 0.3s;
  }

  &:hover svg {
    transform: rotate(20deg);
  }
`;

const SkillTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const SkillDescription = styled.p`
  font-size: 14px;
  color: #ddd;
`;

const softSkillsData = [
  {
    name: "Communication",
    description: "Clear and effective communication",
    icon: <FaComments />,
  },
  {
    name: "Collaboration",
    description: "Teamwork & collaboration skills",
    icon: <FaUsers />,
  },
  {
    name: "Problem Solving",
    description: "Creative solutions & troubleshooting",
    icon: <FaLightbulb />,
  },
  {
    name: "Project Management",
    description: "Experience with Agile methodologies",
    icon: <FaProjectDiagram />,
  },
  {
    name: "Time Management",
    description: "Efficient and timely delivery",
    icon: <FaClock />,
  },
  {
    name: "Client Interaction",
    description: "Building strong client relationships",
    icon: <FaHandshake />,
  },
  {
    name: "Adaptability",
    description: "Adapt to changing requirements",
    icon: <FaClipboardCheck />,
  },
  {
    name: "Continuous Learning",
    description: "Keeping up with tech trends",
    icon: <FaLaptopCode />,
  },
];

const SoftSkills = () => {
  return (
    <div>
      <h2 style={{ color: "#fff", textAlign: "center", fontSize: "36px" }}>
        Personal & Soft Skills
      </h2>
      <h3
        style={{
          color: "#aaa",
          textAlign: "center",
          fontSize: "18px",
          marginBottom: "30px",
        }}
      >
        TECH & WEB DESIGN-SPECIFIC
      </h3>
      <SkillsContainer>
        {softSkillsData.map((skill, index) => (
          <SkillCard key={index}>
            {skill.icon}
            <SkillTitle>{skill.name}</SkillTitle>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsContainer>
    </div>
  );
};

export default SoftSkills;
