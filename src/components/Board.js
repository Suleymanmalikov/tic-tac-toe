import React from "react";
import { GameBoard, Tile } from "../styles/BoardStyles";
import { PLAYER_O, PLAYER_X } from "../shared/constants";

const Board = ({ board, onTileClick }) => {
  return (
    <GameBoard board={board}>
      {board.map((value, index) => (
        <Tile
          key={index}
          onClick={() => onTileClick(index)}
          player={
            value === PLAYER_O ? PLAYER_O : value === PLAYER_X ? PLAYER_X : null
          }
        >
          {value}
        </Tile>
      ))}
    </GameBoard>
  );
};

export default Board;
