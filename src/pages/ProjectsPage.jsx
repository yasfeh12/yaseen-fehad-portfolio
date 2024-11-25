import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projectsData";
import ContactForm from "../components/ContactForm";
import ProfileCard from "../components/ProfileCard";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 36px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 5px;
  }
`;

const CardWrapper = styled(motion.div)`
  background-color: #222;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  width: 100%;

  &:hover {
    transform: translateY(-10px);
    background-color: #292929;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 10px;
  }
`;

const SidebarCard = styled(CardWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    height: auto;
    box-shadow: none;
    padding: 10px;
  }

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 20px;
  }
`;

// Ensure the buttons/forms inside `ContactForm` and `ProfileCard` are also touch-friendly

// Animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Reusable component to animate cards as they come into view
const AnimatedCard = ({ children, isSidebar }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Choose either SidebarCard or CardWrapper based on isSidebar prop
  const WrapperComponent = isSidebar ? SidebarCard : CardWrapper;

  return (
    <WrapperComponent
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </WrapperComponent>
  );
};

const ProjectsPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <PageTitle>My Projects</PageTitle>
        <ProjectsWrapper>
          {projectsData.map((project) => (
            <AnimatedCard key={project.id}>
              <ProjectCard project={project} />
            </AnimatedCard>
          ))}
          <AnimatedCard isSidebar>
            <ProfileCard />
          </AnimatedCard>
          <AnimatedCard>
            <ContactForm />
          </AnimatedCard>
        </ProjectsWrapper>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ProjectsPage;
