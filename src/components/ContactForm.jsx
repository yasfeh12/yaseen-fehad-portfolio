import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #f39c12;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  resize: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f39c12;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: darkorange;
  }
`;

const ContactForm = () => (
  <FormWrapper>
    <Title>Let's Work</Title>
    <SubTitle>TOGETHER</SubTitle>
    <Input type="text" placeholder="Your Name" />
    <Input type="email" placeholder="Your Email" />
    <Input type="text" placeholder="Budget" />
    <TextArea rows="4" placeholder="Message" />
    <SubmitButton>Submit</SubmitButton>
  </FormWrapper>
);

export default ContactForm;
