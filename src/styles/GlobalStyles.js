import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Roboto:wght@500&display=swap");

  * {
    position: relative;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-5:  #343d46;
    --color-4: 	#4f5b66;
    --color-3:  #65737e;
    --color-2:  #a7adba;
    --color-1: 	#c0c5ce;

    --color-5-transparent: rgba(52, 61, 70, 0.9);

    --x-color: #011f4b;
    --o-color: #ff0000;    

    --header-color: #f9f9f9;
  }

  html {
    background-color: var(--color-5);
    font-family: "Roboto", sans-serif;
  }

  body {
    display: grid;
    /* place-items: center; */
    /* min-height: 100vh; */
    margin: 0;
  }
`;
