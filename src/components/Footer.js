// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #0d0d0d;
  color: white;
  margin-top: auto;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
  </FooterContainer>
);

export default Footer;