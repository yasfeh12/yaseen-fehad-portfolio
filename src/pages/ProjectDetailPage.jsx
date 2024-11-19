import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../projectsData";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectWrapper = styled(motion.div)`
  padding: 40px;
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  background-color: #1a1a1a;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const ProjectTitle = styled(motion.h1)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #f39c12;
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin: 0 auto 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #f39c12;
  margin-top: 30px;
`;

const ProjectDescription = styled(motion.p)`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #ccc;
  text-align: left;
`;

const ProjectTechnologies = styled(motion.div)`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #f39c12;
  text-align: left;
`;

const GitHubLink = styled(motion.a)`
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #f39c12;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d4860b;
  }
`;

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <ProjectWrapper
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectImage
        src={project.image}
        alt={project.title}
        variants={imageVariants}
        whileHover="hover"
      />

      <SectionTitle>Overview</SectionTitle>
      <ProjectDescription>
        {project.details} This project aims to provide users with a seamless and
        intuitive way to manage their finances. It’s designed to be highly
        interactive, user-friendly, and feature-rich, allowing users to track
        expenses, set savings goals, and more.
      </ProjectDescription>

      <SectionTitle>Features</SectionTitle>
      <ProjectDescription>
        <ul>
          <li>Easy-to-use interface with intuitive navigation</li>
          <li>Real-time tracking of expenses and incomes</li>
          <li>Ability to set and monitor savings goals</li>
          <li>Responsive design, optimized for both mobile and desktop</li>
          <li>
            Integration with various third-party APIs for enhanced functionality
          </li>
        </ul>
      </ProjectDescription>

      <ProjectTechnologies>
        Technologies Used: {project.technologies.join(", ")}
      </ProjectTechnologies>

      <GitHubLink href={project.link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </GitHubLink>
    </ProjectWrapper>
  );
};

export default ProjectDetailPage;
