import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled.section`
  padding: 80px 5%;
  background: #111;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #00ffcc;
`;
//yeah

const SectionText = styled.p`
  max-width: 700px;
  margin: auto;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


const About = () => {
  return (
    <motion.section id="about" variants={aboutVariants} initial="hidden" animate="visible">
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          A passionate software developer with expertise in Flutter, React.js, Firebase, and modern state management techniques like Bloc and Cubit. Experienced in building cross-platform mobile applications and responsive web interfaces. Eager to contribute to impactful projects and solve complex problems in a collaborative environment.
        </SectionText>
      </AboutContainer>
    </motion.section>
  );
};

export default About;
