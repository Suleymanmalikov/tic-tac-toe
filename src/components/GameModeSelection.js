// GameModeSelection.js
import React from "react";
import {
  Main,
  Section,
  SubHeading,
  Buttons,
  Button,
  GoBackButton,
} from "../styles/StyledComponents";

const GameModeSelection = ({ send }) => {
  return (
    <Main>
      <Section>
        <SubHeading>Select Game Mode</SubHeading>
        <Buttons>
          <Button
            onClick={() => send({ type: "SELECT_MODE", mode: "AI_VS_PLAYER" })}
          >
            AI vs Player
          </Button>
          <Button
            onClick={() =>
              send({ type: "SELECT_MODE", mode: "PLAYER_VS_PLAYER" })
            }
          >
            Player vs Player
          </Button>
        </Buttons>
      </Section>
      <GoBackButton onClick={() => send({ type: "SELECT_SIZE" })}>
        Go Back
      </GoBackButton>
    </Main>
  );
};

export default GameModeSelection;
