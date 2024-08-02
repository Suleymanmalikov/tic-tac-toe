import React from "react";
import { useMachine } from "@xstate/react";
import { gameMachine } from "./machine/gameMachine";

function range(start, end) {
  return Array(end - start)
    .fill(null)
    .map((_, i) => i + start);
}

const App = () => {
  const [state, send] = useMachine(gameMachine);
  // Result Message
  const resultMessage = () => {
    if (state.matches("winner")) {
      const [winner, winningLines] = state.context.winner;
      return `Player ${winner} wins!`;
    }
    if (state.matches("draw")) {
      return "It's a draw!";
    }
    return `${state.context.player}'s turn`;
  };

  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <p className="winningMessage">{resultMessage()}</p>
      <div className="game-board">
        {range(0, 9).map((index) => (
          <div
            className="tile"
            key={index}
            onClick={() => {
              send({ type: "PLAY", index });
            }}
          >
            {state.context.board[index]}
          </div>
        ))}
      </div>
      {/* {!state.matches("playing") && (
        <button className="btn" onClick={() => send({ type: "RESET" })}>
          Reset
        </button>
      )} */}
      <button className="btn" onClick={() => send({ type: "RESET" })}>
        Reset
      </button>
    </main>
  );
};

export default App;
