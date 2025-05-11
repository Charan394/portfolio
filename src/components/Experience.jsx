// components/Experience.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceContainer = styled.section`
  padding: 80px 5%;
  background: #111;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #00ffcc;
`;

const Job = styled.div`
  margin-bottom: 40px;
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const JobTitle = styled.h3`
  color: #00ffcc;
  margin-bottom: 10px;
`;

const JobMeta = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 10px;
`;

const JobDesc = styled.ul`
  font-size: 1rem;
  line-height: 1.6;
  li {
    margin-bottom: 10px;
  }
`;

const experienceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Experience = () => {
  return (
    <motion.section id="experience" variants={experienceVariants} initial="hidden" animate="visible">
      <ExperienceContainer>
        <SectionTitle>Professional Experience</SectionTitle>

        <Job>
          <JobTitle>Software Developer</JobTitle>
          <JobMeta>Gida Technologies Pvt. Ltd. | March 2024 – March 2025 | Bengaluru, India</JobMeta>
          <JobDesc>
            <li>
              Developed core front-end features for the “HERE” app by HDFC Ergo, used by over 15 million customers.
            </li>
            <li>
              Built responsive and animated UIs using Flutter for both Android and iOS.
            </li>
            <li>
              Implemented business logic using Bloc and Cubit for seamless user interaction.
            </li>
            <li>
              Integrated RESTful APIs using Dio for real-time operations including insurance services.
            </li>
            <li>
              Worked with UI/UX designers and back-end engineers in Agile sprints using Jira and Bitbucket.
            </li>
          </JobDesc>
        </Job>
      </ExperienceContainer>
    </motion.section>
  );
};

export default Experience;