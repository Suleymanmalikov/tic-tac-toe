import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const popIn = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const colorChangeWinning = keyframes`
  0% {
    color: #99cc99;
  }
  50% {
    color: var(--color-1);
  }
  100% {
    color: #99cc99;
  }
`;

export const colorChangeDraw = keyframes`
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
