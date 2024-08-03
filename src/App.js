import React from "react";
import useGame from "./hooks/useGame";
import Board from "./components/Board";
import {
  Main,
  Heading,
  Section,
  GoBackButton,
} from "./styles/StyledComponents";
import EndGame from "./components/EndGame";
import StartGame from "./components/StartGame";
import BoardSizeSelection from "./components/BoardSizeSelection";
import GameModeSelection from "./components/GameModeSelection";

const App = () => {
  const [state, send] = useGame();

  return (
    <Main>
      {state.matches("idle") ? (
        <StartGame send={send} state={state} />
      ) : state.matches("selectingBoardSize") ? (
        <BoardSizeSelection send={send} />
      ) : state.matches("selectingGameMode") ? (
        <GameModeSelection send={send} />
      ) : !state.matches("playing") ? (
        <EndGame state={state} send={send} />
      ) : (
        <Section>
          <Heading>Tic Tac Toe</Heading>
          <Board
            board={state.context.board}
            onTileClick={(index) => send({ type: "PLAY", index })}
          />
          <GoBackButton onClick={() => send({ type: "SELECT_SIZE" })}>
            Go Back
          </GoBackButton>
        </Section>
      )}
    </Main>
  );
};

export default App;
