import { winningLines_3X3, winningLines_4x4 } from "../shared/constants";

export const getBoardLen = (board) => {
  if (!board || board.length === 0) {
    return 3;
  }
  return Math.sqrt(board.length);
};

export const checkWin = (board) => {
  if (board.length === 9) {
    return checkWin3X3(board);
  } else if (board.length === 16) {
    return checkWin4X4(board);
  }
  return false;
};
const checkWin3X3 = (board) => {
  for (let line of winningLines_3X3) {
    const [a, b, c] = line;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return [board[a], line];
    }
  }
  return false;
};
const checkWin4X4 = (board) => {
  for (let line of winningLines_4x4) {
    const [a, b, c, d] = line;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      board[a] === board[d]
    ) {
      return [board[a], line];
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

export const getAvailableSquares = (board) => {
  return board
    .map((value, index) => (value === null ? index : null))
    .filter((value) => value !== null);
};

export const getRandomSquare = (availableSquares) => {
  const randomIndex = Math.floor(Math.random() * availableSquares.length);
  return availableSquares[randomIndex];
};
