import { createActor } from "xstate";
import { gameMachine } from "../machines/gameMachine";
import "@testing-library/jest-dom";

test("gameMachine should handle START and PLAY events", () => {
  const actor = createActor(gameMachine).start();

  expect(actor.getSnapshot().value).toBe("idle");

  actor.send({ type: "START" });
  expect(actor.getSnapshot().value).toBe("selectingBoardSize");
  const boardSize = 3;
  actor.send({ type: "SELECT_SIZE", size: boardSize });
  expect(actor.getSnapshot().value).toBe("playing");

  const expectedBoard = Array(boardSize * boardSize).fill(null);
  expect(actor.getSnapshot().context.board).toEqual(expectedBoard);

  actor.stop();
});
