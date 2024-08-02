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
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
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
    color: 	#99cc99;
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
