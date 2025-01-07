// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0d0d0d;
  color: white;
`;

const Links = styled.div`
  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #8257e6;
    }
  }
`;

const Header = () => (
  <Nav>
    <h1>Meu Portfólio</h1>
    <Links>
      <Link to="/">Home</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contato</Link>
    </Links>
  </Nav>
);

export default Header;