import styled from "styled-components";
import { fadeIn } from "./Animations";

export const StartComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;

  p {
    font-size: 18px;
    color: var(--color-1);
    margin: 0;
    line-height: 1.5;
  }
`;

export const StartButton = styled.button`
  margin-top: 3rem;
  padding: 1rem 2rem;
  background-color: var(--color-1);
  color: var(--color-5);
  border: solid 2px var(--color-5);
  font-size: 1.4rem;
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

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-1);
  color: var(--color-5);
  font-size: 0.7rem;
  text-align: center;
  h2 {
    font-weight: 100;
  }
`;
