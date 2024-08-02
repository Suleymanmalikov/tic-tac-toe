import { PLAYER_X, PLAYER_O, winningLines_3X3 } from "../shared/constants";

export const checkWin = (board) => {
  for (let line of winningLines_3X3) {
    const xWon = line.every((index) => {
      return board[index] === PLAYER_X;
    });

    if (xWon) {
      return [PLAYER_X, line];
    }

    const oWon = line.every((index) => {
      return board[index] === PLAYER_O;
    });

    if (oWon) {
      return [PLAYER_O, line];
    }
  }

  return false;
};

export const getResultMessage = (state) => {
  if (state.matches("winner")) {
    const [winner] = state.context.winner;
    return `Player ${winner} wins!`;
  }
  if (state.matches("draw")) {
    return "It's a draw!";
  }
  return `${state.context.player}'s turn`;
};
