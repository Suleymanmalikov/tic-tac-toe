import React from "react";
import TicTacToeSquare from "./TicTacToeSquare";
import "../styles/TicTacToeBoard.css";

const TicTacToeBoard = ({ squares, onSquareClick }) => {
  const renderSquare = (index) => {
    return (
      <TicTacToeSquare
        value={squares[index]}
        onClick={() => onSquareClick(index)}
      />
    );
  };

  return (
    <div>
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
};

export default TicTacToeBoard;
