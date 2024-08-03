import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StartGame from "../components/StartGame";
import "@testing-library/jest-dom";

test("renders StartGame component and handles start button click", () => {
  const state = { matches: () => false };
  const send = jest.fn();

  const { getByText } = render(<StartGame state={state} send={send} />);

  expect(getByText("Start Game")).toBeInTheDocument();

  fireEvent.click(getByText("Start Game"));
  expect(send).toHaveBeenCalledWith({ type: "START" });
});
