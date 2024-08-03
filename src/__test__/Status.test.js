import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Status from "../components/Status";

test("renders Status component with message", () => {
  const message = "Player X wins!";

  const { getByText } = render(<Status message={message} />);

  expect(getByText(message)).toBeInTheDocument();
});
