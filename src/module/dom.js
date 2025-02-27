import "./dom.css";
import { Game } from "./game.js";

export const Render = (function () {
  function renderStarterScreen(board) {
    //create element
    const starterScreen = document.createElement("div");
    const heading = document.createElement("h1"); 
    const boardContainer = document.createElement("div"); // holds board
    const buttonHolder = document.createElement("div"); // hold all the button
    const randomButton = document.createElement("button");  //random button
    const playButton = document.createElement("button");  //play button
    const clearButton = document.createElement("button"); //clear button

    //assign screen
    starterScreen.classList.add("starterScreen");
    heading.classList.add("header");
    buttonHolder.classList.add("buttonHolder");
    randomButton.classList.add("randomButton");
    boardContainer.classList.add("boardContainer");

    //assign value
    heading.textContent = "Place all ships!";
    randomButton.textContent = "Randomize";
    clearButton.textContent = "Clear";
    playButton.textContent = "Play";
    boardContainer.append(renderGameBoard(board));


    //append
    buttonHolder.append(clearButton, randomButton, playButton);
    starterScreen.append(heading, boardContainer, buttonHolder);
    document.body.append(starterScreen);

    playButton.addEventListener("click", () => {
      Game.play();
    });

    clearButton.addEventListener("click",() => {
      boardContainer.textContent = "";
      boardContainer.append(renderGameBoard(board));
    })
  }

  function renderGameScreen(player1, player2) {
    //create element
    document.body.textContent = "";
    const gameScreen = document.createElement("div");
    const turnCounter = document.createElement("h1");
    const playerTurnIndicator = document.createElement("h1");
    const leftSide = document.createElement("div");
    const leftSideName = document.createElement("p");
    const leftBoardHolder = document.createElement("div");
    const leftCountHolder = document.createElement("div");
    const leftHit = document.createElement("p");
    const leftMiss = document.createElement("p");
    const rightSide = document.createElement("div");
    const rightSideName = document.createElement("p");
    const rightBoardHolder = document.createElement("div");
    const rightCountHolder = document.createElement("div");
    const rightHit = document.createElement("p");
    const rightMiss = document.createElement("p");


    //assign class
    gameScreen.classList.add("gameScreen");
    turnCounter.classList.add("turnCounter");
    playerTurnIndicator.classList.add("playerTurnIndicator");
    leftSide.classList.add("leftSide");
    leftBoardHolder.classList.add("boardHolder");
    leftCountHolder.classList.add("countHolder");
    rightSide.classList.add("rightSide");
    rightBoardHolder.classList.add("boardHolder");
    rightCountHolder.classList.add("countHolder");

    //assign value
    playerTurnIndicator.textContent = "Enemy Turn!";
    leftHit.textContent = "Hit: 0";
    leftMiss.textContent = "Miss: 0";
    rightHit.textContent = "Hit: 0";
    rightMiss.textContent = "Miss: 0";
    turnCounter.textContent = "Round: 0";
    leftSideName.textContent = player1.name;
    rightSideName.textContent = player2.name;

    //append element
    leftBoardHolder.append(leftSideName);
    leftBoardHolder.append(renderGameBoard(player1.gameboard.board));
    leftCountHolder.append(leftHit, leftMiss);
    leftSide.append(leftBoardHolder, leftCountHolder);
    
    rightBoardHolder.append(rightSideName);
    rightBoardHolder.append(renderGameBoard(player2.gameboard.board));
    rightCountHolder.append(rightHit, rightMiss);
    rightSide.append(rightBoardHolder, rightCountHolder);


    gameScreen.append(leftSide, rightSide);
    gameScreen.append(playerTurnIndicator, turnCounter);
    document.body.append(gameScreen);
  }

  return {
    renderStarterScreen,
    renderGameScreen,
  };
})();

// display a tutorial page on how to play the game
export function renderTutorialScreen(){
  const dialog = document.createElement("dialog");
  const wrapper = document.createElement("div");
  const headingHolder = document.createElement("div");
  const header = document.createElement("h1");
  const paraHolder = document.createElement("div");
  const closeButton = document.createElement("button");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const p6 = document.createElement("p");

  dialog.classList.add("tutorialD");
  wrapper.classList.add("tutorialW");
  paraHolder.classList.add("paraHolder");
  headingHolder.classList.add("headingHolder");

  header.textContent = "How TO Play";
  closeButton.textContent = "X";
  p1.textContent =
    "1. Battleship is a two-player strategy game where the goal is to sink all of your opponent’s ships before they sink yours.";
  p2.textContent =
    "2. Each player has a 10x10 grid labeled with letters (A-J) for rows and numbers (1-10) for columns";
  p3.textContent =
    "3. Players secretly place five ships on their grid: a Carrier (5 spaces), a Battleship (4 spaces), a Cruiser (3 spaces), a Submarine (3 spaces), and a Destroyer (2 spaces).";
  p4.textContent =
    "4. Ships can be placed horizontally or vertically but cannot overlap or extend beyond the grid.";
  p5.textContent =
    "5. Players take turns attacking one another, If a coordinate contains an enemy ship, it is a hit; otherwise, it is a miss.";
  p6.textContent =
    "6. The game continues until one player has sunk all five enemy ships. The first player to sink all of their opponent’s ships wins the game.";

  paraHolder.append(p1, p2, p3, p4, p5, p6);
  headingHolder.append(header, closeButton);
  wrapper.append(headingHolder, paraHolder);
  dialog.append(wrapper);
  document.body.append(dialog);

  dialog.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      dialog.close();
    }
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.showModal();
}

// render the board where the player place ship at start
function renderStarterBoard(board){
  // create element
  const container = document.createElement("div"); //holds the columnlayer, rowlayer and board itself
  const boardLayer = document.createElement("div"); //board render here
  const columnLayer = document.createElement("div"); //display columns
  const rowsLayer = document.createElement("div"); //display rows
  let row = 0;
  let col = 0;

  // assign class
  container.classList.add("container");
  boardLayer.classList.add("boardLayer");
  columnLayer.classList.add("columnLayer");
  rowsLayer.classList.add("rowLayer");

  // insert content
  board.forEach((arr) => {
    arr.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("tile");
      div.setAttribute("data-row", row);
      div.setAttribute("data-col", col);
      boardLayer.append(div);
      col++;
    });
    row++;
    col = 0;
  });

  //assign value to rows
  for (let i = 65; i <= 74; i++) {
    const div = document.createElement("div");
    div.classList.add("sideItem");
    const character = String.fromCharCode(i);
    div.textContent = character;
    rowsLayer.append(div);
  }

  //assign value to columns
  for (let i = 0; i <= 9; i++) {
    const div = document.createElement("div");
    div.classList.add("sideItem");
    const character = i;
    div.textContent = character;
    columnLayer.append(div);
  }

  container.append(columnLayer, rowsLayer, boardLayer);
  return container;
}


// render the game board where the actual game take place
function renderGameBoard(board) {
  // create element
  const container = document.createElement("div"); //holds the columnlayer, rowlayer and board itself
  const boardLayer = document.createElement("div"); //board render here
  const columnLayer = document.createElement("div"); //display columns
  const rowsLayer = document.createElement("div"); //display rows
  let row = 0;
  let col = 0;

  // assign class
  container.classList.add("container");
  boardLayer.classList.add("boardLayer");
  columnLayer.classList.add("columnLayer");
  rowsLayer.classList.add("rowLayer");

  // insert content
  board.forEach((arr) => {
    arr.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("tile");
      div.setAttribute("data-row", row);
      div.setAttribute("data-col", col);
      boardLayer.append(div);
      col++;
    });
    row++;
    col = 0;
  });

  //assign value to rows
  for (let i = 65; i <= 74; i++) {
    const div = document.createElement("div");
    div.classList.add("sideItem");
    const character = String.fromCharCode(i);
    div.textContent = character;
    rowsLayer.append(div);
  }

  //assign value to columns
  for (let i = 0; i <= 9; i++) {
    const div = document.createElement("div");
    div.classList.add("sideItem");
    const character = i;
    div.textContent = character;
    columnLayer.append(div);
  }

  container.append(columnLayer, rowsLayer, boardLayer);
  return container;
}
