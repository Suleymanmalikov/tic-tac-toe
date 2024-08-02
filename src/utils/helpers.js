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
