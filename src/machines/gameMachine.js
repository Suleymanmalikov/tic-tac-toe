// src/machines/gameMachine.js
import { createMachine, assign } from "xstate";
import { checkWin } from "../utils/helpers";
import { PLAYER_O, PLAYER_X } from "../shared/constants";

const initialContext = {
  board: Array(9).fill(null),
  player: PLAYER_X,
  winner: null,
  moves: 0,
};

export const gameMachine = createMachine({
  initial: "idle",
  context: initialContext,
  states: {
    idle: {
      on: {
        START: "playing",
      },
    },
    playing: {
      always: [
        {
          target: "winner",
          guard: ({ context }) => !!checkWin(context.board),
          actions: assign({
            winner: ({ context }) => checkWin(context.board),
          }),
        },
        {
          target: "draw",
          guard: ({ context }) => context.board.every((cell) => cell),
        },
      ],
      on: {
        PLAY: {
          actions: assign({
            board: ({ context, event }) => {
              const updatedBoard = [...context.board];
              updatedBoard[event.index] = context.player;
              return updatedBoard;
            },
            player: ({ context }) =>
              context.player === PLAYER_X ? PLAYER_O : PLAYER_X,
            moves: ({ context }) => context.moves + 1,
          }),
          guard: ({ context, event }) => context.board[event.index] === null,
        },
        RESET: undefined,
        IDLE: {
          target: "idle",
        },
      },
    },
    winner: {},
    draw: {},
  },
  on: {
    RESET: {
      target: ".playing",
      actions: assign(initialContext),
    },
  },
});
