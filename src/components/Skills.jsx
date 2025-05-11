// Skills.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SkillsContainer = styled.section`
  padding: 80px 5%;
  background: #0f0f0f;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #00ffcc;
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const SkillItem = styled.li`
  background: #1e1e1e;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
`;

const skillsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  const skills = [
    "Flutter",
    "Dart",
    "Bloc/Cubit",
    "React.js",
    "Redux",
    "Firebase",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "REST APIs",
    "Git/GitHub",
    "Jira",
    "Agile"
  ];

  return (
    <motion.section id="skills" variants={skillsVariants} initial="hidden" animate="visible">
      <SkillsContainer>
        <SectionTitle>Skills</SectionTitle>
        <SkillList>
          {skills.map((skill, i) => (
            <motion.div key={i} variants={skillItemVariants}>
              <SkillItem>{skill}</SkillItem>
            </motion.div>
          ))}
        </SkillList>
      </SkillsContainer>
    </motion.section>
  );
};

export default Skills;