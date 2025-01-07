// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #121212;
  color: white;

  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;

    input, textarea {
      margin: 0.5rem 0;
      padding: 0.8rem;
      border: none;
      border-radius: 5px;
    }

    button {
      padding: 0.8rem;
      background-color: #8257e6;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background-color: #6f48c9;
      }
    }
  }
`;

const Contact = () => (
  <ContactContainer>
    <h2>Entre em Contato</h2>
    <form>
      <input type="text" placeholder="Seu Nome" required />
      <input type="email" placeholder="Seu Email" required />
      <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </ContactContainer>
);

export default Contact;
