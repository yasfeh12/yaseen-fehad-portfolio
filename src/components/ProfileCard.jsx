import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import pp from "../assets/pp.png";

const Card = styled.div`
  text-align: center;
  color: #fff;
  background-color: #222;
  padding: 40px 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  max-width: 350px;
  margin: 0 auto; /* Centers the card */
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileImage = styled.img`
  width: 210px; /* Increased by 50% */
  height: 260px; /* Increased by 50% */
  border-radius: 50%;
  margin-bottom: 15px;
  border: 4px solid #f39c12;
  object-fit: cover; /* Prevents stretching */
  object-position: center; /* Centers the image */
`;

const Name = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Title = styled.p`
  font-size: 26px;
  color: #f39c12;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 22px;
  color: #ddd;
  margin-bottom: 20px;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: #f39c12;
  font-size: 34px;
  transition: color 0.3s;
  &:hover {
    color: #ffffff;
  }
`;

const ProfileCard = () => (
  <Card>
    <ProfileImage src={pp} alt="Profile" />

    <Name>Yaseen Fehad</Name>
    <Title>Front-End Developer</Title>
    <Description>
      A passionate front-end developer skilled in modern web technologies.
    </Description>
    <IconRow>
      <SocialIcon
        href="https://github.com/yasfeh12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </SocialIcon>
      <SocialIcon
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </SocialIcon>
      <SocialIcon
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </SocialIcon>
      <SocialIcon
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </SocialIcon>
      <SocialIcon
        href="mailto:YaseenFehad@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </SocialIcon>
    </IconRow>
  </Card>
);

export default ProfileCard;
