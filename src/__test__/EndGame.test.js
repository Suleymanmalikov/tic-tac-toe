import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EndGame from "../components/EndGame";
import { PLAYER_X } from "../shared/constants";
import "@testing-library/jest-dom";

test("renders EndGame component with winner message", () => {
  const state = {
    matches: (state) => state === "winner",
    context: { winner: [PLAYER_X] },
  };
  const send = jest.fn();

  const { getByText } = render(<EndGame state={state} send={send} />);

  expect(getByText(`Player ${PLAYER_X} wins!`)).toBeInTheDocument();

  fireEvent.click(getByText("Retry"));
  expect(send).toHaveBeenCalledWith({ type: "RESET" });
});
