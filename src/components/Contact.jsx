// components/Contact.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactContainer = styled.section`
  padding: 80px 5%;
  background: #111;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #00ffcc;
`;

const ContactLink = styled.a`
  display: inline-block;
  margin: 10px;
  color: #00ffcc;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00cca3;
  }
`;

const contactVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Contact = () => {
  return (
    <motion.section id="contact" variants={contactVariants} initial="hidden" animate="visible">
      <ContactContainer>
        <SectionTitle>Contact Me</SectionTitle>
        <div>
          <ContactLink href="mailto:charang394@gmail.com">Email: charang394@gmail.com</ContactLink>
          <br />
          <ContactLink href="https://www.linkedin.com/in/charan-gowda-r-7b543a226/ " target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </ContactLink>
        </div>
      </ContactContainer>
    </motion.section>
  );
};

export default Contact;