import styled from "styled-components";

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 50vmin;
  width: 50vmin;
  background-color: #c6c6c6;
  box-shadow: -4vmin 4vmin 6vmin #555;
`;

export const Tile = styled.div`
  border: solid 3px #000;
  color: #000;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
