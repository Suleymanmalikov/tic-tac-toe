import React from "react";
import { WinningMessage } from "../styles/StatusStyles";

const Status = ({ message }) => {
  return (
    <div>
      <WinningMessage>{message}</WinningMessage>
    </div>
  );
};

export default Status;
