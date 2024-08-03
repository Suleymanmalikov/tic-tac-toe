import { checkWin, getResultMessage } from "../utils/helpers";
import { PLAYER_X, PLAYER_O } from "../shared/constants";

describe("Utility Functions", () => {
  test("checkWin detects a win for PLAYER_X", () => {
    const board = [
      PLAYER_X,
      PLAYER_X,
      PLAYER_X,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    const result = checkWin(board);
    expect(result).toEqual([PLAYER_X, [0, 1, 2]]);
  });

  test("checkWin detects no win", () => {
    const board = [
      PLAYER_X,
      PLAYER_O,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    const result = checkWin(board);
    expect(result).toBe(false);
  });

  test("getResultMessage returns correct message for winner", () => {
    const state = {
      matches: (state) => state === "winner",
      context: { winner: [PLAYER_X] },
    };
    expect(getResultMessage(state)).toBe("Player X wins!");
  });

  test("getResultMessage returns correct message for draw", () => {
    const state = {
      matches: (state) => state === "draw",
      context: {},
    };
    expect(getResultMessage(state)).toBe("It's a draw!");
  });

  test("getResultMessage returns correct message for player turn", () => {
    const state = {
      matches: (state) => state === "playing",
      context: { player: PLAYER_X },
    };
    expect(getResultMessage(state)).toBe("X's turn");
  });
});