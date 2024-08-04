import React from "react";

import useGame from "./hooks/useGame";
import Board from "./components/Board";
import { Main, Heading, Section } from "./styles/StyledComponents";
import EndGame from "./components/EndGame";
import StartGame from "./components/StartGame";
import BoardSizeSelection from "./components/BoardSizeSelection";
import GameModeSelection from "./components/GameModeSelection";
import Status from "./components/Status";
import { getResultMessage } from "./utils/helpers";

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
      ) : state.matches("winner") || state.matches("draw") ? (
        <EndGame state={state} send={send} />
      ) : (
        <Section>
          <Heading>Tic Tac Toe</Heading>

          <Status message={getResultMessage(state)} />
          <Board
            board={state.context.board}
            onTileClick={(index) => send({ type: "PLAY_TURN", index })}
          />
        </Section>
      )}
    </Main>
  );
};

export default App;
