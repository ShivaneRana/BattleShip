import "./style.css";
import { Game } from "./module/game.js";

const tutorialButton = document.querySelector(".tutorialButton");
const startButton = document.querySelector(".startButton");
const inputName = document.querySelector(".inputName");
const introContainer = document.querySelector(".introContainer");

document.addEventListener("DOMContentLoaded", () => {});

startButton.addEventListener("click", () => {
  const name = inputName.value;
  introContainer.remove();
  Game.showPlacementScreen(name);
});

tutorialButton.addEventListener("click", () => {
  Game.showTutorialScreen();
});
