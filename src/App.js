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

  return (
    <main>
      <h1>Tic Tac Toe</h1>
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
      {/* <p>{state.context.winner}</p> */}
      <div>
        <pre>
          {JSON.stringify(
            { value: state.value, context: state.context },
            null,
            2
          )}
        </pre>
        <button onClick={() => send({ type: "RESET" })}>Reset</button>
      </div>
    </main>
  );
};

export default App;
