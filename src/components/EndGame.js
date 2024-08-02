import {
  Button,
  End,
  TrophyIcon,
  Draw,
  Winner,
  HandshakeIcon,
} from "../styles/EndGameStyles";
import Status from "./Status";
import { getResultMessage } from "../utils/helpers";

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
      <Button onClick={() => send({ type: "RESET" })}>Retry</Button>
    </End>
  );
};

export default EndGame;
