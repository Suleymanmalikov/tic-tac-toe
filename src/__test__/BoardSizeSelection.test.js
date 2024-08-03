import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BoardSizeSelection from "../components/BoardSizeSelection";
import "@testing-library/jest-dom";

describe("BoardSizeSelection Component", () => {
  test("renders buttons and heading", () => {
    const mockSend = jest.fn();
    render(<BoardSizeSelection send={mockSend} />);

    expect(screen.getByText("Select Board Size")).toBeInTheDocument();
    expect(screen.getByText("3x3")).toBeInTheDocument();
    expect(screen.getByText("4x4")).toBeInTheDocument();
    expect(screen.getByText("Go Back")).toBeInTheDocument();
  });

  test("triggers send function with correct parameters on button click", () => {
    const mockSend = jest.fn();
    render(<BoardSizeSelection send={mockSend} />);

    fireEvent.click(screen.getByText("3x3"));
    expect(mockSend).toHaveBeenCalledWith({ type: "SELECT_SIZE", size: 3 });

    fireEvent.click(screen.getByText("4x4"));
    expect(mockSend).toHaveBeenCalledWith({ type: "SELECT_SIZE", size: 4 });

    fireEvent.click(screen.getByText("Go Back"));
    expect(mockSend).toHaveBeenCalledWith({ type: "IDLE" });
  });
});
