import { createMachine, assign } from "xstate";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin(board) {
  for (let line of winningLines) {
    const xWon = line.every((index) => {
      return board[index] === "X";
    });

    if (xWon) {
      return ["X", line];
    }

    const oWon = line.every((index) => {
      return board[index] === "O";
    });

    if (oWon) {
      return ["O", line];
    }
  }

  return false;
}

const initialContext = {
  board: Array(9).fill(null),
  player: "X",
  winner: null,
};

export const gameMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYgCUBRAZQoBUBtABgF1FQAHAe1lwBddO+NiAAeiACwAmADQgAnogCMAVkUA6cQHZljRgDZGyvZMaTNAX3Oy0WPISJr2AG3RyCUEgAUAMgEEAmkysSCBcPPyCwmIIipqSagAcAJwpSYqMirEJ4gmyCggJ6gDMurqS4opF4kmSekmW1hg4BMSOLm74HkHCYXwCQiHRkgnKakWpSeJ6mlWStXlKCUWJpYya4sqamap6llYg+JwQcMI2zfY93H2Rg4gAtHoLCA8NIGd2rc6u7pfh-VFKPR6NSKCYzIrTTJFJ6KQpqPQ6XSaYzicaaJIWfbvFoOADuBEIACdftcBqBouMkmphtp9KjlBUirl5It1AjSsjyuMEowiq9sfY1BBCehcSSImTRBIZCyEDU1BjEZJJuJUWs9uYgA */
  initial: "playing",
  context: {
    board: Array(9).fill(null),
    player: "X",
    winner: null,
    moves: 0,
  },
  states: {
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
            player: ({ context }) => (context.player === "X" ? "O" : "X"),
            moves: ({ context }) => context.moves + 1,
          }),
          guard: ({ context, event }) => context.board[event.index] === null,
        },
        RESET: undefined,
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
