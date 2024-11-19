import React from "react";
import styled from "styled-components";

const ProficiencyContainer = styled.div`
  width: 100%;
  background-color: #444;
  border-radius: 8px;
  margin-top: 5px;
`;

const ProficiencyBar = styled.div`
  height: 8px;
  border-radius: 8px;
  background-color: #f39c12;
  width: ${(props) => props.level}%;
`;

const Proficiency = ({ level }) => (
  <ProficiencyContainer>
    <ProficiencyBar level={level} />
  </ProficiencyContainer>
);

export default Proficiency;
