import React from "react";
import "../styles/Square.css";

const TicTacToeSquare = ({ value, onClick }) => {
  return (
    <button className="tic-tac-toe-square" onClick={onClick}>
      {value}
    </button>
  );
};

export default TicTacToeSquare;
