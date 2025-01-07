// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #121212;
  color: white;

  h1 {
    font-size: 3rem;
    color: #8257e6;
  }

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

const Home = () => (
  <Container>
    <h1>Bem-vindo ao Meu Portfólio!</h1>
    <p>Desenvolvedor apaixonado por tecnologia e inovação.</p>
  </Container>
);

export default Home;