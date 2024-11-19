import React from "react";
import styled from "styled-components";

const ExperienceWrapper = styled.div`
  color: #fff;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #f39c12;
  text-align: center;
  margin-bottom: 30px;
`;

const JobTitle = styled.h3`
  font-size: 20px;
  color: #f39c12;
  margin-bottom: 5px;
`;

const Company = styled.h4`
  font-size: 16px;
  margin: 0;
  color: #ddd;
`;

const Date = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  text-align: justify;
`;

const Experience = () => (
  <ExperienceWrapper>
    <SectionTitle>My Experience</SectionTitle>

    <JobTitle>Web Development Intern</JobTitle>
    <Company>Elara Care Sisu</Company>
    <Date>Dec 2023 - July 2024</Date>
    <Description>
      Collaborated with a team to develop a comprehensive website and mobile
      application for an equity and diversity inclusion company. Utilized HTML,
      CSS, React, and React Native to implement new features and enhance user
      experience, while ensuring responsive and accessible design.
    </Description>

    <JobTitle>JavaScript Development Trainee</JobTitle>
    <Company>Northcoders Bootcamp</Company>
    <Date>2024</Date>
    <Description>
      Completed an intensive 13-week bootcamp covering full-stack JavaScript
      development, emphasizing best practices, code readability, and
      collaboration.
    </Description>

    <JobTitle>Front-End Development Trainee</JobTitle>
    <Company>EdX Bootcamp</Company>
    <Date>2023</Date>
    <Description>
      Gained comprehensive training in front-end technologies, including
      JavaScript, HTML, CSS, Node.js, and React. Participated in collaborative
      GitHub projects and developed dynamic web applications.
    </Description>
  </ExperienceWrapper>
);

export default Experience;
