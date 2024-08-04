import { createMachine, assign } from "xstate";
import { checkWin, aiMove } from "../utils/helpers";
import { PLAYER_O, PLAYER_X } from "../shared/constants";

const randomInitialPlayer_X_O = () =>
  Math.random() < 0.5 ? PLAYER_X : PLAYER_O;

const randomInitialTurn = () =>
  Math.random() < 0.5 ? "playerTurn" : "aiDelay";

const initialContext = {
  board: [],
  player: randomInitialPlayer_X_O(),
  winner: null,
  moves: 0,
  previousTurn: null,
  gameMode: null,
};

export const gameMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYgCUBRAZQoBUBtABgF1FQAHAe1lwBddO+NiAAeiACwAmADQgAnogCMAVkUA6cQHZljRgDZGyvZMaTNAX3Oy0WPISJr2AG3RyCUEgAUAMgEEAmkysSCBcPPyCwmIIipqSagAcAJwpSYqMirEJ4gmyCggJ6gDMurqS4opF4kmSekmW1hg4BMSOLm74HkHCYXwCQiHRkgnKakWpSeJ6mlWStXlKCUWJpYya4sqamap6llYg+JwQcMI2zfY93H2Rg4gAtHoLCA8NIGd2rc6u7pfh-VFKPR6NSKCYzIrTTJFJ6KQpqPQ6XSaYzicaaJIWfbvFoOADuBEIACdftcBqBouMkmphtp9KjlBUirl5It1AjSsjyuMEowiq9sfY1BBCehcSSImTRBIZCyEDU1BjEZJJuJUWs9uYgA */
  initial: "idle",
  context: initialContext,
  states: {
    idle: {
      on: {
        START: {
          target: "selectingBoardSize",
        },
      },
    },
    selectingBoardSize: {
      on: {
        SELECT_SIZE: {
          target: "selectingGameMode",
          actions: assign({
            boardSize: ({ _, event }) => event.size,
            board: ({ _, event }) => Array(event.size * event.size).fill(null),
          }),
        },
        IDLE: {
          target: "idle",
        },
      },
    },
    selectingGameMode: {
      on: {
        SELECT_MODE: [
          {
            target: randomInitialTurn(),
            guard: ({ _, event }) => event.mode === "AI_VS_PLAYER",
            actions: assign({
              gameMode: ({ _, event }) => event.mode,
            }),
          },
          {
            target: "playerTurn",
            guard: ({ _, event }) => event.mode === "PLAYER_VS_PLAYER",
            actions: assign({
              gameMode: ({ _, event }) => event.mode,
            }),
          },
        ],
        SELECT_SIZE: {
          target: "selectingBoardSize",
        },
      },
    },

    checkStatus: {
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
        {
          target: "playerTurn",
          guard: ({ context }) => context.gameMode === "PLAYER_VS_PLAYER",
        },
        {
          target: "playerTurn",
          guard: ({ context }) =>
            context.previousTurn === "aiTurn" &&
            context.gameMode === "AI_VS_PLAYER",
        },
        {
          target: "aiDelay",
          guard: ({ context }) =>
            context.previousTurn === "playerTurn" &&
            context.gameMode === "AI_VS_PLAYER",
        },
      ],
    },
    aiDelay: {
      after: {
        1000: "aiTurn",
      },
    },
    playerTurn: {
      entry: assign({ previousTurn: "playerTurn" }),
      on: {
        PLAY_TURN: {
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

          target: "checkStatus",
        },
      },
    },
    aiTurn: {
      entry: [
        assign({ previousTurn: "aiTurn" }),
        ({ context }) => {
          const move = aiMove(context.board, context.player);
          const updatedBoard = [...context.board];
          updatedBoard[move] = context.player;

          context.board = updatedBoard;
          context.player = context.player === PLAYER_X ? PLAYER_O : PLAYER_X;
          context.moves += 1;
        },
      ],
      after: {
        300: "checkStatus",
      },
    },
    winner: {},
    draw: {},
  },
  on: {
    RESET: {
      target: ".idle",
      actions: assign(initialContext),
    },
  },
});
