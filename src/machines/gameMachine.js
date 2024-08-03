import { createMachine, assign } from "xstate";
import {
  checkWin,
  getAvailableSquares,
  getRandomSquare,
} from "../utils/helpers";
import { PLAYER_O, PLAYER_X } from "../shared/constants";

const initialContext = {
  board: [],
  player: PLAYER_X,
  winner: null,
  moves: 0,
  boardSize: null,
  gameMode: null,
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
          target: "selectingGameMode",
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
    selectingGameMode: {
      on: {
        SELECT_MODE: {
          target: "playing",
          actions: assign({
            gameMode: ({ context, event }) => event.mode,
          }),
        },
        SELECT_SIZE: {
          target: "selectingBoardSize",
        },
      },
    },
    playing: {
      after: {
        700: [
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
      },
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
          target: "aiMove",
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
    aiMove: {
      always: [
        {
          target: "playing",
          actions: assign({
            board: ({ context }) => {
              const availableSquares = getAvailableSquares(context.board);
              const randomSquare = getRandomSquare(availableSquares);
              const updatedBoard = [...context.board];
              updatedBoard[randomSquare] = context.player;
              return updatedBoard;
            },
            player: ({ context }) =>
              context.player === PLAYER_X ? PLAYER_O : PLAYER_X,
            moves: ({ context }) => context.moves + 1,
          }),
          guard: ({ context }) =>
            context.gameMode === "AI_VS_PLAYER" && context.player === PLAYER_O,
        },
        {
          target: "playing",
        },
      ],
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
