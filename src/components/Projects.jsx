// components/Projects.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsContainer = styled.section`
  padding: 80px 5%;
  background: #0f0f0f;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #00ffcc;
`;

const ProjectCard = styled.div`
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectTitle = styled.h3`
  color: #00ffcc;
  margin-bottom: 10px;
`;

const ProjectStack = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
`;

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Projects = () => {
  const projects = [
    {
      title: "MealMastermind (Flutter)",
      stack: "Flutter, Dart, Android Emulator, iOS Simulator",
      desc: "Meal planning app designed to help users organize and plan meals efficiently with a user-friendly interface.",
    },
    {
      title: "LinkedIn Clone (Web)",
      stack: "React, Redux, Styled Components, Firebase",
      desc: "A functional LinkedIn replica with authentication, user posts, and a responsive design interface.",
    }
  ];

  return (
    <motion.section
      id="projects"
      variants={projectVariants}
      initial="hidden"
      animate="visible"
    >
      <ProjectsContainer>
        <SectionTitle>Projects</SectionTitle>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectStack>Tech Stack: {project.stack}</ProjectStack>
            <ProjectDesc>{project.desc}</ProjectDesc>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </motion.section>
  );
};

export default Projects;