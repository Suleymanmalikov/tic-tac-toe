import styled, { css } from "styled-components";

import { PLAYER_O, PLAYER_X } from "../shared/constants";
import { fadeIn, popIn, pulse } from "./Animations";

export const playerOStyles = css`
  color: var(--o-color);
  /* background-color: var(--o-background-color); */
  animation: ${fadeIn} 0.5s ease-out, ${pulse} 0.5s ease-in-out;
`;

export const playerXStyles = css`
  color: var(--x-color);
  /* background-color: var(--x-background-color); */
  animation: ${popIn} 0.5s ease-out, ${pulse} 0.5s ease-in-out;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
  height: 50vmin;
  width: 50vmin;
  padding: 0.5rem;
  background-color: var(--color-4);
  border-radius: 1rem;
  box-shadow: 0 0 15px var(--color-2);
`;

export const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--color-2);
  border: solid 2px var(--color-1);
  border-radius: 0.5rem;
  transition: background-color 0.3s, transform 0.3s;

  ${({ player }) =>
    player === PLAYER_O
      ? playerOStyles
      : player === PLAYER_X
      ? playerXStyles
      : null}

  &:hover {
    background-color: var(--color-1);
    border: solid 2px var(--color-2);
    transform: scale(1.05);
  }

  &::before {
    text-shadow: 0 0 0.1em var(--background-shadow);
  }
`;
