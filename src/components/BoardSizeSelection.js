import React from "react";
import {
  GoBackButton,
  Button,
  Section,
  Main,
  SubHeading,
  Buttons,
} from "../styles/StyledComponents";

const BoardSizeSelection = ({ send }) => {
  return (
    <Main>
      <Section>
        <SubHeading>Select Board Size</SubHeading>
        <Buttons>
          <Button onClick={() => send({ type: "SELECT_SIZE", size: 3 })}>
            3x3
          </Button>
          <Button onClick={() => send({ type: "SELECT_SIZE", size: 4 })}>
            4x4
          </Button>
        </Buttons>
      </Section>
      <GoBackButton onClick={() => send({ type: "IDLE" })}>
        Go Back
      </GoBackButton>
    </Main>
  );
};

export default BoardSizeSelection;
