import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import About from "../components/About";
import Experience from "../components/Experience";
import ContactForm from "../components/ContactForm";
import SkillCard from "../components/SkillCard";
import ToolsSection from "../components/ToolsSection";

const PageWrapper = styled.div`
  display: flex;
  background-color: #1a1a1a;
  min-height: 100vh;
  padding-left: 250px;

  @media (max-width: 1024px) {
    padding-left: 0;
    flex-direction: column;
  }
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 20;
  width: 350px;
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
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CardWrapper = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  background-color: #222;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
    background-color: #292929;
  }

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 10px;
  }
`;

// Animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Card component that animates when it comes into view
const AnimatedCard = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only animate once

  return (
    <CardWrapper
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </CardWrapper>
  );
};

const HomePage = () => (
  <PageWrapper>
    <SidebarWrapper>
      <ProfileCard />
    </SidebarWrapper>
    <ContentWrapper>
      <AnimatedCard>
        <About />
      </AnimatedCard>
      <AnimatedCard>
        <Experience />
      </AnimatedCard>
      <AnimatedCard>
        <SkillCard />
      </AnimatedCard>
      <AnimatedCard>
        <ToolsSection />
      </AnimatedCard>
      <AnimatedCard>
        <ContactForm />
      </AnimatedCard>
    </ContentWrapper>
  </PageWrapper>
);

export default HomePage;
