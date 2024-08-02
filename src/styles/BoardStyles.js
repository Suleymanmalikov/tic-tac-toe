import styled, { keyframes } from "styled-components";
import { PLAYER_O } from "../shared/constants";

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
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--color-2);
  border: solid 2px var(--color-1);
  border-radius: 0.5rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: var(--color-1);
    border: solid 2px var(--color-2);
    transform: scale(1.05);
  }
`;
