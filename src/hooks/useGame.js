import { useMachine } from "@xstate/react";
import { gameMachine } from "../machines/gameMachine";

const useGame = () => {
  const [state, send] = useMachine(gameMachine);
  return [state, send];
};

export default useGame;
