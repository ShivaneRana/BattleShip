import "./dom.css";
import { Game } from "./game.js";

export const Render = (function () {
  function placementScreen(playerObject) {
    const mainContainer = document.createElement("div");
    const header = document.createElement("h1"); //heading
    const tip = document.createElement("p");
    const boardAndTipHolder = document.createElement("div");
    const buttonHolder = document.createElement("div");
    const randomButton = document.createElement("button"); //randomize
    const clearButton = document.createElement("button"); //clear
    const playButton = document.createElement("button"); //play
    let isPlayable = false;

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
    boardAndTipHolder.append(renderPlacementBoard(playerObject), tip);
    buttonHolder.append(clearButton, randomButton, playButton);
    mainContainer.append(header, boardAndTipHolder, buttonHolder);
    document.body.append(mainContainer);

    playButton.addEventListener("click", () => {
      document.body.textContent = "";
      Game.showGameScreen();
    });

    clearButton.addEventListener("click", () => {
      playerObject.gameboard.clear();
      boardAndTipHolder.textContent = "";
      boardAndTipHolder.append(renderPlacementBoard(playerObject), tip);
    });

    randomButton.addEventListener("click", () => {
      playerObject.gameboard.clear();
      playerObject.gameboard.placeShipRandomly();
      boardAndTipHolder.textContent = "";
      boardAndTipHolder.append(renderPlacementBoard(playerObject), tip);
    });
  }

  function gameScreen(player, computer) {
    document.body.textContent = "";
    const mainContainer = document.createElement("div");
    const playerSide = document.createElement("div");
    const enemySide = document.createElement("div");
    const playerBoard = renderPlayerBoard(player,computer);
    const enemyBoard = renderEnemyBoard(player,computer);

    //assign class
    mainContainer.classList.add("gameScreenBackground");
    playerSide.classList.add("playerSide");
    enemySide.classList.add("enemySide");

    playerSide.append(playerBoard, renderStats(player));
    enemySide.append(enemyBoard);
    mainContainer.append(renderRound(1), renderTurn(0), playerSide, enemySide);
    return mainContainer;
  }
  
  return {
    placementScreen,
    gameScreen,
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
function renderPlacementBoard(playerObject) {
  const boardArray = playerObject.gameboard.board;
  const div = document.createElement("div");
  const columnLayer = document.createElement("div");
  const boardLayer = document.createElement("div");
  const rowLayer = document.createElement("div");
  let horizontalPlacement = true;
  let row = 0;
  let col = 0;

  document.body.addEventListener("keydown", (e) => {
    if (e.key === "r" || e.key === "R") {
    }
  });

  boardArray.forEach((array) => {
    array.forEach((item) => {
      const div = document.createElement("div");
      div.setAttribute("data-row", row);
      div.setAttribute("data-col", col);
      div.classList.add("tile");
      boardLayer.append(div);

      if (item === "C") {
        div.textContent = "C";
        div.classList.add("ship");
      }

      if (item === "R") {
        div.textContent = "R";
        div.classList.add("ship");
      }

      if (item === "B") {
        div.textContent = "B";
        div.classList.add("ship");
      }

      if (item === "S") {
        div.textContent = "S";
        div.classList.add("ship");
      }

      if (item === "D") {
        div.textContent = "D";
        div.classList.add("ship");
      }

      col++;
    });
    col = 0;
    row++;
  });

  // for column
  for (let i = 0; i <= 9; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    columnLayer.append(div);
  }

  // // for row
  for (let i = 65; i <= 74; i++) {
    const char = String.fromCharCode(i);
    const div = document.createElement("div");
    div.textContent = char;
    rowLayer.append(div);
  }

  div.classList.add("boardContainer");
  columnLayer.classList.add("columnLayer");
  boardLayer.classList.add("board");
  rowLayer.classList.add("rowLayer");

  div.append(columnLayer, rowLayer, boardLayer);
  return div;
}

function renderPlayerBoard(playerObject,computerObject) {
  const boardArray = playerObject.gameboard.board;
  const div = document.createElement("div");
  const columnLayer = document.createElement("div");
  const boardLayer = document.createElement("div");
  const rowLayer = document.createElement("div");
  let row = 0;
  let col = 0;

  boardArray.forEach((array) => {
    array.forEach((item) => {
      const div = document.createElement("div");
      div.setAttribute("data-row", row);
      div.setAttribute("data-col", col);
      div.classList.add("tile");
      boardLayer.append(div);

      if (item === "C") {
        div.textContent = "C";
        div.classList.add("ship");
      }

      if (item === "R") {
        div.textContent = "R";
        div.classList.add("ship");
      }

      if (item === "B") {
        div.textContent = "B";
        div.classList.add("ship");
      }

      if (item === "S") {
        div.textContent = "S";
        div.classList.add("ship");
      }

      if (item === "D") {
        div.textContent = "D";
        div.classList.add("ship");
      }

      div.style.userSelect = "none";
      div.style.pointerEvents = "none";
      col++;
    });
    col = 0;
    row++;
  });

  // for column
  for (let i = 0; i <= 9; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    columnLayer.append(div);
  }

  // // for row
  for (let i = 65; i <= 74; i++) {
    const char = String.fromCharCode(i);
    const div = document.createElement("div");
    div.textContent = char;
    rowLayer.append(div);
  }

  div.classList.add("boardContainer");
  columnLayer.classList.add("columnLayer");
  boardLayer.classList.add("board");
  rowLayer.classList.add("rowLayer");

  div.append(columnLayer, rowLayer, boardLayer);
  return div;
}

function renderEnemyBoard(playerObject,computerObject) {
  const boardArray = computerObject.gameboard.board;
  const div = document.createElement("div");
  const columnLayer = document.createElement("div");
  const boardLayer = document.createElement("div");
  const rowLayer = document.createElement("div");
  let row = 0;
  let col = 0;

  boardArray.forEach((array) => {
    array.forEach((item) => {
      const div = document.createElement("div");
      div.setAttribute("data-row", row);
      div.setAttribute("data-col", col);
      div.classList.add("enemyTile");
      boardLayer.append(div);

      
      if (item === "C") {
        div.textContent = "C";
        div.classList.add("ship");
      }

      if (item === "R") {
        div.textContent = "R";
        div.classList.add("ship");
      }

      if (item === "B") {
        div.textContent = "B";
        div.classList.add("ship");
      }

      if (item === "S") {
        div.textContent = "S";
        div.classList.add("ship");
      }

      if (item === "D") {
        div.textContent = "D";
        div.classList.add("ship");
      }

      div.addEventListener("click", () => {
        const x = +div.dataset.row;
        const y = +div.dataset.col;
        const gboard = computerObject.gameboard;

        //if receiveAttack is true then a ship has been hit
        if (gboard.receiveAttack(x, y)) {
          div.classList.add("enemyHit");
          gboard.print();
        } else if (!gboard.receiveAttack(x, y)) {
          div.classList.add("enemyMiss");
        }

        //check if all ship sank or not for starting new game
        if (computerObject.gameboard.allShipSank()) {
          Game.showBanner();
        }

        // ensure that the player cant interact with already selected tiles.
        div.style.userSelect = "none";
        div.style.pointerEvents = "none";
      });

      col++;
    });
    col = 0;
    row++;
  });

  // for column
  for (let i = 0; i <= 9; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    columnLayer.append(div);
  }

  // // for row
  for (let i = 65; i <= 74; i++) {
    const char = String.fromCharCode(i);
    const div = document.createElement("div");
    div.textContent = char;
    rowLayer.append(div);
  }

  div.classList.add("boardContainer");
  columnLayer.classList.add("columnLayer");
  boardLayer.classList.add("board");
  rowLayer.classList.add("rowLayer");

  div.append(columnLayer, rowLayer, boardLayer);
  return div;
}

function renderRound(value) {
  const roundCount = document.createElement("h1");
  roundCount.classList.add("roundCount");
  roundCount.textContent = `Round: ${value}`;

  return roundCount;
}

function renderTurn(value) {
  const turnIndicator = document.createElement("h1");
  turnIndicator.classList.add("turnIndicator");

  if (value === 0) {
    turnIndicator.textContent = "Player's turn!";
  } else {
    turnIndicator.textContent = "Enemy's turn!";
  }

  return turnIndicator;
}

function renderStats(entity) {
  const div = document.createElement("div");
  const hitTaken = document.createElement("p");
  const hitMiss = document.createElement("p");
  hitTaken.textContent = `Hit taken: ${entity.attackHit}`;
  hitMiss.textContent = `Hit miss: ${entity.attackMiss}`;
  div.classList.add("stats");
  div.append(hitTaken, hitMiss);
  return div;
}

export function renderBanner(){
  const div = document.createElement("dialog");
  const wrapper = document.createElement("div");
  const restartButton = document.createElement("button");
  const h1 = document.createElement("h1");

  h1.textContent = "Player Won!";
  restartButton.textContent = "Restart";
  div.classList.add("banner");
  
  wrapper.append(h1,restartButton);
  div.append(wrapper);
  document.body.append(div);
  div.showModal();

  restartButton.addEventListener("click",() => {
    Game.restart();
  })

  div.addEventListener('cancel', (event) => {
    event.preventDefault();
  });
}