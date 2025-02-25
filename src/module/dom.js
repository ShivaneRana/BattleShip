import "./dom.css";

export const Render = (function () {
  function displayStartScreen(array) {
    //create Element
    const mainScreen = document.createElement("div");
    const header = document.createElement("h1");
    const board = document.createElement("div");
    const buttonHolder = document.createElement("div");
    const randomButton = document.createElement("button");
    const howToButton = document.createElement("button");

    //assign classes
    mainScreen.classList.add("startScreen");
    buttonHolder.classList.add("buttonHolder");
    header.classList.add("header");
    board.classList.add("board");

    //assign values
    header.textContent = "Place your ships!";
    howToButton.textContent = "How to Play?";
    randomButton.textContent = "Randomize";
    renderTiles(array, board);

    //append value
    mainScreen.append(header);
    mainScreen.append(board);
    buttonHolder.append(howToButton, randomButton);
    mainScreen.append(buttonHolder);
    document.body.append(mainScreen);

    //adding functionality
    howToButton.addEventListener("click", () => {
      renderTutorialScreen();
    });
  }

  function displayGameScreen(p1,p2){
    const mainScreen = document.createElement("div");
    const leftScreen = document.createElement("div");
    const rightScreen = document.createElement("div");
    
    mainScreen.classList.add("gameScreen");
    leftScreen.classList.add("leftScreen");
    rightScreen.classList.add("rightScreen");
    document.body.append(mainScreen);
  }

  return {
    displayStartScreen,
    displayGameScreen
  };
})();

function renderTiles(array, holder) {
  let row = 0;
  let col = 0;
  array.forEach((arr) => {
    arr.forEach((element) => {
      const div = document.createElement("div");
      div.setAttribute("data-row",row);
      div.setAttribute("data-col",col);
      div.classList.add("tile");
      holder.append(div);

      div.addEventListener("mouseover",() => {
        div.classList.add("highlight");
      });
      
      div.addEventListener("mouseleave",() => {
        div.classList.remove("highlight");
      });
      col++;
    });
    row++;
    col = 0;
  });
}

function renderTutorialScreen() {
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
