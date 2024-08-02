import React from "react";
import useGame from "./hooks/useGame";
import Board from "./components/Board";
import Status from "./components/Status";
import {
  Main,
  Heading,
  Button,
  Footer,
  Section,
} from "./styles/StyledComponents";
import { getResultMessage } from "./utils/helpers";
import EndGame from "./components/EndGame";

const App = () => {
  const [state, send] = useGame();

  return (
    <Main>
      {!state.matches("playing") ? (
        <EndGame state={state} send={send} />
      ) : (
        <Section>
          <Heading>Tic Tac Toe</Heading>
          {state.matches("playing") && (
            <Status message={getResultMessage(state)} />
          )}

          <Board
            board={state.context.board}
            onTileClick={(index) => send({ type: "PLAY", index })}
          />
          {/* <Button onClick={() => send({ type: "RESET" })}>Retry</Button> */}
        </Section>
      )}

      <Footer>
        <h2>Created by: Suleymanguly Malikov</h2>
      </Footer>
    </Main>
  );
};

export default App;
