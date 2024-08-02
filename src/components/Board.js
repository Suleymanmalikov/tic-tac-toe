import React from "react";
import { GameBoard, Tile } from "../styles/BoardStyles";

const Board = ({ board, onTileClick }) => (
  <GameBoard>
    {board.map((value, index) => (
      <Tile key={index} onClick={() => onTileClick(index)}>
        {value}
      </Tile>
    ))}
  </GameBoard>
);

export default Board;
