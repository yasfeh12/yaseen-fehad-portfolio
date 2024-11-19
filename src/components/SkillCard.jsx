import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

const CardWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  background-color: #333; /* Gray background color */
  padding: 20px;
  border-radius: 15px;
  display: flex;
  gap: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  justify-content: space-between;
`;

const OrangeBox = styled.div`
  flex: 1; /* Make each box take equal space */
  height: 120px;
  background: linear-gradient(135deg, #ff5733, #ffc300);
  color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

const ArrowWrapper = styled.div`
  font-size: 24px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SkillCard = () => (
  <CardWrapper>
    <OrangeBox>
      <ArrowWrapper>
        <FiArrowRight />
      </ArrowWrapper>
    </OrangeBox>
    <OrangeBox>
      <ArrowWrapper>
        <FiArrowRight />
      </ArrowWrapper>
    </OrangeBox>
  </CardWrapper>
);

export default SkillCard;
