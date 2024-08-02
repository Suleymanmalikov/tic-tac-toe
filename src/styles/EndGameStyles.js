import { keyframes } from "styled-components";
import styled from "styled-components";
import { FaTrophy, FaHandshake } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
`;

const colorChangeWinning = keyframes`
  0% {
    color: #99cc99;
  }
  50% {
    color: var(--color-1);
  }
  100% {
    color: 	#99cc99;
  }
`;

const colorChangeDraw = keyframes`
  0% {
    color: #f6dc97;
  }
  50% {
    color: var(--color-1);
  }
  100% {
    color: #f6dc97;
  }
`;

export const End = styled.div`
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
  padding: 2rem;
  box-sizing: border-box;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

//Win component
export const TrophyIcon = styled(FaTrophy)`
  font-size: 5rem;
  animation: ${colorChangeWinning} 6s infinite;
`;

export const Winner = styled.div`
  font-size: 3rem;
  animation: ${bounce} 2s infinite, ${colorChangeWinning} 6s infinite;
`;

//Draw component
export const HandshakeIcon = styled(FaHandshake)`
  font-size: 5rem;
  animation: ${bounce} 2s infinite, ${colorChangeDraw} 6s infinite;
`;
export const Draw = styled.div`
  font-size: 3rem;
  animation: ${bounce} 2s infinite, ${colorChangeDraw} 6s infinite;
`;

export const Button = styled.button`
  margin-top: 5rem;
  padding: 1rem 2rem;
  background-color: var(--color-1);
  color: var(--color-5);
  border: solid 2px var(--color-5);
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  animation: ${bounce} 2s infinite;

  &:hover {
    background-color: var(--color-5);
    color: var(--color-1);
    border: solid 2px var(--color-1);
  }
`;
