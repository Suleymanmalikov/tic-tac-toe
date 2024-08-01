import React, { useState } from "react";
import Board from "./Board";
import "../styles/Game.css";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isXNext, setIsXNext] = useState(true);

  const handleSquareClick = (index) => {
    const historyUpToCurrentStep = history.slice(0, stepNumber + 1);
    const current = historyUpToCurrentStep[historyUpToCurrentStep.length - 1];
    const squares = current.squares.slice();

    // If there is a winner or the square is already filled, return early
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = isXNext ? "X" : "O";
    setHistory(historyUpToCurrentStep.concat([{ squares }]));
    setStepNumber(historyUpToCurrentStep.length);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setIsXNext(true);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (stepNumber === 9) {
    status = "Draw";
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  return (
    <div className="tic-tac-toe-game">
      <div className="tic-tac-toe-board">
        <Board squares={current.squares} onSquareClick={handleSquareClick} />
      </div>
      <div className="tic-tac-toe-info">
        <div>{status}</div>
        <button onClick={resetGame}>Retry</button>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  console.log("\n");
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
