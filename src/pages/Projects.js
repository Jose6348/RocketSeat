// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #0d0d0d;
  color: white;

  h2 {
    color: #8257e6;
    margin-bottom: 1rem;
  }

  .project {
    margin: 1rem 0;
  }
`;

const Projects = () => (
  <ProjectsContainer>
    <h2>Meus Projetos</h2>
    <div className="project">
      <h3>Projeto 1</h3>
      <p>Descrição breve do projeto.</p>
    </div>
    <div className="project">
      <h3>Projeto 2</h3>
      <p>Descrição breve do projeto.</p>
    </div>
  </ProjectsContainer>
);

export default Projects;
