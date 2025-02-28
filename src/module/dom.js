import "./dom.css";
import { Game } from "./game.js";

export const Render = (function () {
  function placementScreen(board) {
    const mainContainer = document.createElement("div");
    const header = document.createElement("h1");            //heading
    const tip = document.createElement("p");
    const boardAndTipHolder = document.createElement("div");
    const buttonHolder = document.createElement("div");
    const randomButton = document.createElement("button");  //randomize
    const clearButton = document.createElement("button");   //clear
    const playButton = document.createElement("button");    //play

    //assign class
    mainContainer.classList.add("placementScreenBackground");
    buttonHolder.classList.add("buttonHolder");
    boardAndTipHolder.classList.add("boardTipHolder");
    randomButton.classList.add("but");
    clearButton.classList.add("but");
    playButton.classList.add("but");

    //assign value
    header.textContent = "Place all the ships!";
    randomButton.textContent = "Randomize";
    clearButton.textContent = "Clear";
    playButton.textContent = "Play";
    tip.textContent = "Press R to rotate the ship";

    //append all content
    boardAndTipHolder.append(renderPlacementBoard(board),tip);
    buttonHolder.append(clearButton,randomButton,playButton);
    mainContainer.append(header,boardAndTipHolder,buttonHolder);
    document.body.append(mainContainer);
  }

  return {
    placementScreen,
  };
})();

// display a tutorial page on how to play the game
export function renderTutorialScreen() {
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

// function to render board for placing ships
function renderPlacementBoard(boardArray){
  const div = document.createElement("div");
  const columnLayer = document.createElement("div");
  const board = document.createElement("div");
  const rowLayer = document.createElement("div");

  boardArray.forEach(array => {
    array.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("tile");
      board.append(div);
    })
  })

  // for column
  for(let i = 0;i <= 9;i++){
    const div = document.createElement("div");
    div.textContent = i;
    columnLayer.append(div);
  }

  // // for row
  for(let i = 65;i <= 74;i++){
    const char = String.fromCharCode(i);
    const div = document.createElement("div");
    div.textContent = char;
    rowLayer.append(div);
  }

  div.classList.add("boardContainer");
  columnLayer.classList.add("columnLayer");
  board.classList.add("board");
  rowLayer.classList.add("rowLayer");

  div.append(columnLayer,rowLayer,board);
  return div;
}

