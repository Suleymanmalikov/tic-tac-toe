import React from "react";
import useGame from "./hooks/useGame";
import Board from "./components/Board";
import { Main, Heading, Section } from "./styles/StyledComponents";
import EndGame from "./components/EndGame";
import StartGame from "./components/StartGame";

const App = () => {
  const [state, send] = useGame();

  return (
    <Main>
      {state.matches("idle") ? (
        <StartGame send={send} state={state} />
      ) : !state.matches("playing") ? (
        <EndGame state={state} send={send} />
      ) : (
        <Section>
          <Heading>Tic Tac Toe</Heading>
          <Board
            board={state.context.board}
            onTileClick={(index) => send({ type: "PLAY", index })}
          />
        </Section>
      )}
    </Main>
  );
};

export default App;
