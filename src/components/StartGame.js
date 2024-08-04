import { StartButton, StartComponent, Footer } from "../styles/StartGameStyles";
import { Heading } from "../styles/StyledComponents";

const StartGame = ({ state, send }) => {
  return (
    <StartComponent>
      <Heading>Tic Tac Toe</Heading>
      <p>
        Welcome to the classic game of Tic Tac Toe!
        <br />
        Challenge your friends. Let's see who wins the game!
      </p>
      <StartButton onClick={() => send({ type: "START" })}>
        Start Game
      </StartButton>
      <Footer>
        <h2>
          <a href="https://github.com/Suleymanmalikov" target="_blank">
            Created by: Suleymanguly Malikov
          </a>
        </h2>
      </Footer>
    </StartComponent>
  );
};

export default StartGame;
