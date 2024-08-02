import styled from "styled-components";
import { fadeIn } from "./Animations";

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
  animation: ${fadeIn} 1.5s ease-in-out;
`;

export const Heading = styled.h1`
  margin-bottom: 2rem;
  font-family: "Comfortaa", cursive;
  text-align: center;
  font-size: 2.5rem;
  color: var(--header-color);
`;
