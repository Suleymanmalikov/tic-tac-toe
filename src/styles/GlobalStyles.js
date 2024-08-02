import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Roboto:wght@500&display=swap");

  * {
    position: relative;
    box-sizing: border-box;
  }

  :root {

  }

  html {
    background-color: #bababa;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }

  body {
    display: grid;
    place-items: center;
  }
`;
