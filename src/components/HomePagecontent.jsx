import React from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import ContactForm from "./ContactForm";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1a1a1a;
  padding: 20px;
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <ProfileCard />
      <ContactForm />
    </PageWrapper>
  );
};

export default HomePage;
