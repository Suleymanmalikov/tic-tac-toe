import React from "react";
import useGame from "./hooks/useGame";
import Board from "./components/Board";
import Status from "./components/Status";
import { Main, Heading, Button, Footer } from "./styles/StyledComponents";
import { getResultMessage } from "./utils/helpers";

const App = () => {
  const [state, send] = useGame();

  return (
    <Main>
      <Heading>Tic Tac Toe</Heading>
      <Status message={getResultMessage(state)} />

      <Board
        board={state.context.board}
        onTileClick={(index) => send({ type: "PLAY", index })}
      />
      <Button onClick={() => send({ type: "RESET" })}>Reset</Button>
      <Footer>
        <h2>Created by: Suleymanguly Malikov</h2>
      </Footer>
    </Main>
  );
};

export default App;
