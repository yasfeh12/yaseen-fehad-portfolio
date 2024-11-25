import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import projectsData from "../projectsData";

const WorkWrapper = styled(motion.div)`
  padding: 60px;
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #f39c12;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

const Section = styled(motion.div)`
  max-width: 1000px;
  width: 100%;
  margin-bottom: 60px;
  text-align: left;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #f39c12;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #f39c12;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ContactText = styled.p`
  font-size: 16px;
  color: #ccc;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  padding: 20px;
  justify-items: center;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: #333;
  border-radius: 15px;
  padding: 20px;
  color: #ffffff;
  max-width: 400px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    background-color: #f39c12;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: transform 0.3s;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const StyledIcon = styled.div`
  font-size: 24px;
  color: #f39c12;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #aaa;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ExperienceItem = styled(motion.div)`
  margin-bottom: 20px;
  font-size: 18px;
  color: #eee;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const WorkPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`); // Navigate to ProjectDetailPage with project ID
  };

  return (
    <WorkWrapper
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <PageTitle
        animate={{ opacity: [0, 1], y: [-30, 0] }}
        transition={{ duration: 1 }}
      >
        Yaseen Fehad
      </PageTitle>

      <Section>
        <SectionTitle>Contact Information</SectionTitle>
        <ContactInfo>
          <StyledIcon>
            <FaMapMarkerAlt />
          </StyledIcon>
          <ContactText>Leeds, UK</ContactText>
        </ContactInfo>
        <ContactInfo>
          <StyledIcon>
            <FaEnvelope />
          </StyledIcon>
          <ContactText>YaseenFehad@gmail.com</ContactText>
        </ContactInfo>
        <ContactInfo>
          <StyledIcon>
            <FaPhone />
          </StyledIcon>
          <ContactText>07932692805</ContactText>
        </ContactInfo>
        <ContactInfo>
          <StyledIcon>
            <FaGithub />
          </StyledIcon>
          <a
            href="https://github.com/yasfeh12"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yasfeh12
          </a>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>Personal Statement</SectionTitle>
        <p>
          I have 2 years of leadership and operational experience. I recently
          completed two intensive Front-End JavaScript Development bootcamps,
          focusing on modern web development tools and technologies. I develop
          user-friendly, sleek and beautiful web apps. I am ready to expand my
          knowledge and skills within a team environment.
        </p>
      </Section>

      <Section>
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceItem>
          <h3>Elara Care (Web Development Intern)</h3>
          <p>May 2024 - July 2024</p>
          <ul>
            <li>
              Collaborated with a team to develop a comprehensive website and
              mobile application for an equity and diversity inclusion company.
            </li>
            <li>
              Utilized HTML, CSS, React, React Native, and C# to implement new
              features and enhance user experience.
            </li>
            <li>
              Engaged in continuous learning about the equity, diversity, and
              inclusion industry.
            </li>
          </ul>
        </ExperienceItem>
        <ExperienceItem>
          <h3>Capita (Operational Trainer)</h3>
          <p>Jan 2022 - May 2023</p>
          <ul>
            <li>
              Developed and delivered training programs for new and existing
              employees, resulting in a 10% improvement in employee performance.
            </li>
            <li>
              Led a team of trainers and mentored new trainers, enhancing the
              training experience.
            </li>
          </ul>
        </ExperienceItem>
      </Section>

      <Section>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleProjectClick(project.id)}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>

      <Section>
        <SectionTitle>Education & Training</SectionTitle>
        <ExperienceItem>
          <h3>Northcoders JavaScript Training Program</h3>
          <p>2024</p>
          <p>
            An intensive 13-week bootcamp covering full-stack JavaScript
            development, including PostgreSQL, Git, GitHub, Node.js, and React.
          </p>
        </ExperienceItem>
        <ExperienceItem>
          <h3>EdX Front-End JavaScript Development Bootcamp</h3>
          <p>2023</p>
          <p>
            Comprehensive front-end training in JavaScript, HTML, CSS, Node.js,
            and React. Involved in collaborative projects and API-driven
            applications.
          </p>
        </ExperienceItem>
      </Section>
    </WorkWrapper>
  );
};

export default WorkPage;
