import { createActor } from "xstate";
import { gameMachine } from "../machines/gameMachine";
import "@testing-library/jest-dom";

describe("gameMachine", () => {
  let actor;

  beforeEach(() => {
    actor = createActor(gameMachine).start();
  });

  afterEach(() => {
    actor.stop();
  });

  test("Initial state should be idle", () => {
    expect(actor.getSnapshot().value).toBe("idle");
  });

  test("Should transition to selectingBoardSize state after START event", () => {
    actor.send({ type: "START" });
    expect(actor.getSnapshot().value).toBe("selectingBoardSize");
  });

  test("Should transition to selectingGameMode state after SELECT_SIZE event", () => {
    actor.send({ type: "START" });
    actor.send({ type: "SELECT_SIZE", size: 3 });
    expect(actor.getSnapshot().value).toBe("selectingGameMode");
  });

  test("Should transition to playerTurn state after SELECT_MODE event", () => {
    actor.send({ type: "START" });
    actor.send({ type: "SELECT_SIZE", size: 3 });
    actor.send({ type: "SELECT_MODE", mode: "PLAYER_VS_PLAYER" });
    expect(actor.getSnapshot().value).toBe("playerTurn");
  });

  test("Should transition to aiTurn state after SELECT_MODE event", () => {
    actor.send({ type: "START" });
    actor.send({ type: "SELECT_SIZE", size: 3 });
    actor.send({ type: "SELECT_MODE", mode: "AI_VS_PLAYER" });
    expect(["aiTurn", "playerTurn"]).toContain(actor.getSnapshot().value);
  });

  test("transition to playerTurn on SELECT_MODE event with PLAYER_VS_PLAYER mode", () => {
    actor.send({ type: "START" });
    actor.send({ type: "SELECT_SIZE", size: 3 });
    actor.send({ type: "SELECT_MODE", mode: "PLAYER_VS_PLAYER" });
    expect(actor.getSnapshot().value).toBe("playerTurn");
  });

  test("RESET event should transition to idle state", () => {
    actor.send({ type: "START" });
    actor.send({ type: "SELECT_SIZE", size: 3 });
    actor.send({ type: "SELECT_MODE", mode: "PLAYER_VS_PLAYER" });
    actor.send({ type: "RESET" });
    expect(actor.getSnapshot().value).toBe("idle");
  });
});
