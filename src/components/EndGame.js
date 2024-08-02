import {
  RetryButton,
  End,
  TrophyIcon,
  Draw,
  Winner,
  HandshakeIcon,
} from "../styles/EndGameStyles";
import Status from "./Status";
import { getResultMessage } from "../utils/helpers";
import { Button } from "../styles/StyledComponents";

const EndGame = ({ state, send }) => {
  return (
    <End>
      {!state.matches("winner") ? (
        <Draw>
          <HandshakeIcon />
          <Status message={getResultMessage(state)} />
        </Draw>
      ) : (
        <Winner>
          <TrophyIcon />
          <Status message={getResultMessage(state)} />
        </Winner>
      )}
      <RetryButton onClick={() => send({ type: "RESET" })}>Retry</RetryButton>
    </End>
  );
};

export default EndGame;
