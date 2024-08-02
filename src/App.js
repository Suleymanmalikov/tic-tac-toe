import React from "react";
import { useMachine } from "@xstate/react";
import { gameMachine } from "./machine/gameMachine";
import {
  Main,
  Heading,
  GameBoard,
  Tile,
  Button,
  WinningMessage,
  Footer,
} from "./styles/StyledComponent";

function range(start, end) {
  return Array(end - start)
    .fill(null)
    .map((_, i) => i + start);
}

const App = () => {
  const [state, send] = useMachine(gameMachine);

  const resultMessage = () => {
    if (state.matches("winner")) {
      const [winner] = state.context.winner;
      return `Player ${winner} wins!`;
    }
    if (state.matches("draw")) {
      return "It's a draw!";
    }
    return `${state.context.player}'s turn`;
  };

  return (
    <Main>
      <Heading>Tic Tac Toe</Heading>
      <WinningMessage>{resultMessage()}</WinningMessage>
      <GameBoard>
        {range(0, 9).map((index) => (
          <Tile
            key={index}
            onClick={() => {
              send({ type: "PLAY", index });
            }}
          >
            {state.context.board[index]}
          </Tile>
        ))}
      </GameBoard>
      <Button onClick={() => send({ type: "RESET" })}>Reset</Button>
      <Footer>
        <h2>Created by: Suleymanguly Malikov</h2>
      </Footer>
    </Main>
  );
};

export default App;
