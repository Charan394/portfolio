import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background: #111;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Logo = styled(motion.h2)`
  color: #00ffcc;
  font-weight: bold;
`;

const Nav = styled.nav`
  a {
    margin-left: 30px;
    color: #fff;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #00ffcc;
    }
  }
`;

const headerVariants = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { duration: 0.8 } },
};

const Header = () => {
  return (
    <motion.div variants={headerVariants} initial="hidden" animate="visible">
      <HeaderContainer>
        <Logo>Charan</Logo>
        <Nav>
          <nav>okay</nav>
          <nav>okay</nav>
          <nav>okay</nav>
          <nav>okay</nav>
          <nav>okay</nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </Nav>
      </HeaderContainer>
    </motion.div>
  );
};

export default Header;
