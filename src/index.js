import "./style.css";
import { Game } from "./module/game.js";

const tutorialButton = document.querySelector(".tutorialButton");
const startButton = document.querySelector(".startButton");
const inputName = document.querySelector(".inputName");
const introContainer = document.querySelector(".introContainer");

document.addEventListener("DOMContentLoaded", () => {
  inputName.value = "";
});

startButton.addEventListener("click", () => {
  let name = inputName.value;
  if (name === "") {
    name = "Player";
  }
  introContainer.remove();
  Game.showPlacementScreen(name);
});

tutorialButton.addEventListener("click", () => {
  Game.showTutorialScreen();
});
