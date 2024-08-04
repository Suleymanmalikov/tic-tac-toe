# Tic-Tac-Toe Game

Welcome to the Tic-Tac-Toe game project! This project is a front-end web application built with React, XState, and Styled Components. Users can select the board size and choose between different game modes.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Project Link](#project-link)

## Overview

This project is a simple implementation of Tic-Tac-Toe with the following features:

- After Starting Game users can select the board size (3x3 or 4x4).
- Options to play against an AI or with another player.
- A game board that updates with each move.
- Detection of the game outcome (win, draw, or ongoing).
- A reset button to start a new game.

## Features

- **Board Size Selection:** Choose between a 3x3 or 4x4 board.
- **Game Modes:** Play against another player or an AI.
- **State Management:** Uses XState for managing game states and transitions.
- **Styling:** Styled Components for a clean and responsive UI.
- **Unit Testing:** Comprehensive tests for game functionality and state management.

## Technologies Used

- **React:** For building the user interface with functional components and hooks.
- **XState:** For state management with finite state machines.
- **Styled Components:** For modular and reusable styling.
- **Jest and React Testing Library:** For unit testing.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Suleymanmalikov/tic-tac-toe.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd tic-tac-toe
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

## Running the Project

To run the project locally, use the following command:

```bash
npm start
```

This will start the development server and open the game in your default web browser.

## Testing

To run the unit tests for the project, use:

```bash
npm test
```

This will execute the tests defined in the `__tests__` directory and provide feedback on the functionality and state management.

## Project Link

You can view and interact with the project <a href="https://tictactoefun.vercel.app/" target="_blank">here</a>
