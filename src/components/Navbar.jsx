import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaFolder, FaBriefcase, FaTools, FaPen } from "react-icons/fa";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  padding: 10px 20px;
  border-radius: 30px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const IconWrapper = styled(Link)`
  position: relative;
  margin: 0 10px;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(-10px);
  }

  &:hover {
    color: #f39c12;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 35px;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0px);
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  pointer-events: none;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <IconWrapper to="/">
        <FaHome />
        <Tooltip className="tooltip">Home</Tooltip>
      </IconWrapper>
      <IconWrapper to="/projects">
        <FaFolder />
        <Tooltip className="tooltip">Projects</Tooltip>
      </IconWrapper>
      <IconWrapper to="/work">
        <FaBriefcase />
        <Tooltip className="tooltip">Work</Tooltip>
      </IconWrapper>
      <IconWrapper to="/skills">
        <FaTools />
        <Tooltip className="tooltip">Skills</Tooltip>
      </IconWrapper>
      <IconWrapper to="/thoughts">
        <FaPen />
        <Tooltip className="tooltip">Thoughts</Tooltip>
      </IconWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
