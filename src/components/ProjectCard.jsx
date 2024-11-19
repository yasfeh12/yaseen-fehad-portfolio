import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #222;
  color: #fff;
  border-radius: 10px;
  padding: 31px;
  transition: transform 0.3s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: 100%; /* Increased width by 30% */

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 22px;
    width: 100%; /* Set to full width on smaller screens */
  }
`;

const ProjectImage = styled.img`
  width: 468px;
  height: 406px;
  border-radius: 8px;
  margin-right: 31px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 22px;
  }
`;

const ProjectInfo = styled.div`
  flex-grow: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 31px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 22px;
  color: #aaa;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ExternalLink = styled.a`
  color: #f39c12;
  font-size: 37px;
  transition: color 0.2s;
  margin-left: auto;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    margin-left: 0;
    margin-top: 10px;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectInfo>
        <Link to={`/projects/${project.id}`}>
          <ProjectTitle>{project.title}</ProjectTitle>
        </Link>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectInfo>
      <ExternalLink
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink />
      </ExternalLink>
    </Card>
  );
};

export default ProjectCard;
