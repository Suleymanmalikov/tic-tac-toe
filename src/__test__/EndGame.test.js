import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EndGame from "../components/EndGame";
import { PLAYER_X } from "../shared/constants";
import "@testing-library/jest-dom";

describe("EndGame Component", () => {
  test("renders EndGame component with winner message", () => {
    const state = {
      matches: (state) => state === "winner",
      context: { winner: [PLAYER_X] },
    };
    const send = jest.fn();

    const { getByText } = render(<EndGame state={state} send={send} />);

    fireEvent.click(getByText("Retry"));
    expect(send).toHaveBeenCalledWith({ type: "RESET" });
  });

  test("renders EndGame component with draw message", () => {
    const state = {
      matches: (state) => state === "draw",
      context: {},
    };
    const send = jest.fn();

    const { getByText } = render(<EndGame state={state} send={send} />);

    expect(getByText("It's a draw!")).toBeInTheDocument();

    fireEvent.click(getByText("Retry"));
    expect(send).toHaveBeenCalledWith({ type: "RESET" });
  });
});
