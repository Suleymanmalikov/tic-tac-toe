import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--color-2);
  font-size: 1.3rem;
`;

export const Footer = styled.footer`
  display: none;
`;

export const Heading = styled.h1`
  font-family: "Comfortaa", cursive;
  text-align: center;
  font-size: 2.5rem;
  color: var(--header-color);
`;
