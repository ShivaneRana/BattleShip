import "./style.css";
import { renderTutorialScreen } from "./module/dom.js";
import { Game } from "./module/game.js";

const tutorialButton = document.querySelector(".tutorialButton");
const startButton = document.querySelector(".startButton");
const inputName = document.querySelector(".inputName");

document.addEventListener("DOMContentLoaded", () => {
  inputName.value = "";
});

startButton.addEventListener("click", () => {
  const game = new Game();
  game.start();
});

tutorialButton.addEventListener("click",() => {
  renderTutorialScreen();
})

// return the player input to the game class
export function getName() {
  return inputName.value;
}
