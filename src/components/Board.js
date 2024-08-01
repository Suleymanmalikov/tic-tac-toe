// Board.js
import React from "react";
import Square from "./Square";
import "../styles/Board.css";

const Board = ({ squares, onSquareClick }) => {
  const renderSquare = (index) => (
    <Square
      key={index}
      value={squares[index]}
      onClick={() => onSquareClick(index)} // Pass the index correctly
    />
  );

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

export default Board;
