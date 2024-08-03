import { createMachine, assign } from "xstate";
import { checkWin } from "../utils/helpers";
import { PLAYER_O, PLAYER_X } from "../shared/constants";

const initialContext = {
  board: [],
  player: PLAYER_X,
  winner: null,
  moves: 0,
  boardSize: null,
};

export const gameMachine = createMachine({
  initial: "idle",
  context: initialContext,
  states: {
    idle: {
      on: {
        START: "selectingBoardSize",
      },
    },
    selectingBoardSize: {
      on: {
        SELECT_SIZE: {
          target: "playing",
          actions: assign({
            boardSize: ({ context, event }) => event.size,
            board: ({ context, event }) =>
              Array(event.size * event.size).fill(null),
          }),
        },
        IDLE: {
          target: "idle",
        },
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
        SELECT_SIZE: {
          target: "selectingBoardSize",
        },
      },
    },
    winner: {},
    draw: {},
  },
  on: {
    RESET: {
      target: ".selectingBoardSize",
      actions: assign(initialContext),
    },
  },
});
