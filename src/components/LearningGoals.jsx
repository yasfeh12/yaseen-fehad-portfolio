import React from "react";
import styled from "styled-components";

const LearningContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const LearningCard = styled.div`
  width: 160px;
  background-color: #444;
  color: #fff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const LearningTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const Learning = ({ title }) => (
  <LearningCard>
    <LearningTitle>{title}</LearningTitle>
  </LearningCard>
);

const LearningGoals = () => (
  <div>
    <h2 style={{ color: "#fff", textAlign: "center", fontSize: "24px" }}>
      Currently Learning
    </h2>
    <LearningContainer>
      <Learning title="Python (Django)" />
      <Learning title="TypeScript" />
      <Learning title="Next.js" />
      <Learning title="GraphQL" />
    </LearningContainer>
  </div>
);

export default LearningGoals;
