import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

import Board from "../components/Board";
import { PLAYER_X, PLAYER_O } from "../shared/constants";

test("renders Board and handles tile click", () => {
  const board = [PLAYER_X, PLAYER_O, null, null, null, null, null, null, null];
  const onTileClick = jest.fn();

  const { getByText } = render(
    <Board board={board} onTileClick={onTileClick} />
  );

  expect(getByText(PLAYER_X)).toBeInTheDocument();
  expect(getByText(PLAYER_O)).toBeInTheDocument();

  fireEvent.click(getByText(PLAYER_X));
  expect(onTileClick).toHaveBeenCalledWith(0);
});
