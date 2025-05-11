import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(to right, #111, #222);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #00ffcc;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
`;

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Hero = () => {
  return (
    <motion.section variants={heroVariants} initial="hidden" animate="visible">
      <HeroContainer>
        <Title>Hi, I'm Charan Gowda</Title>
        <Subtitle>
          Detail-oriented and results-driven software developer with a strong foundation in Flutter, web technologies, and modern development practices.
        </Subtitle>
      </HeroContainer>
    </motion.section>
  );
};

export default Hero;