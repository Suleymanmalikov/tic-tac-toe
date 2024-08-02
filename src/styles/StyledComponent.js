import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  font-size: 1rem;
  color: #333;
  text-align: center;
  p {
    margin: 0;
  }
`;

export const Heading = styled.h1`
  font-family: "Comfortaa", cursive;
  text-align: center;
`;

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

export const Button = styled.button`
  padding: 1.5rem 3rem;
  background-color: #333;
  font-size: 1.5rem;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const WinningMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
`;
