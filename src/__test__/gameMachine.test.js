import { createActor } from "xstate";
import { gameMachine } from "../machines/gameMachine";
import { PLAYER_X } from "../shared/constants";
import "@testing-library/jest-dom";

test("gameMachine should handle START and PLAY events", () => {
  const actor = createActor(gameMachine).start();

  expect(actor.getSnapshot().value).toBe("idle");

  actor.send({ type: "START" });
  expect(actor.getSnapshot().value).toBe("playing");

  actor.send({ type: "PLAY", index: 0 });
  expect(actor.getSnapshot().context.board[0]).toBe(PLAYER_X);

  actor.stop();
});
