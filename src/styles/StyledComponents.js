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

export const Button = styled.button`
  margin-top: 5rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-1);
  color: var(--color-5);
  border: solid 2px var(--color-5);
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-5);
    color: var(--color-1);
    border: solid 2px var(--color-1);
  }
`;
