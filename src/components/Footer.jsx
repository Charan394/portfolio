import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: #000;
  color: #666;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Charan Gowda R. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;