import "./style.css";
import { renderTutorialScreen } from "./module/dom.js";
import { Game } from "./module/game.js";

const tutorialButton = document.querySelector(".tutorialButton");
const startButton = document.querySelector(".startButton");
const inputName = document.querySelector(".inputName");

document.addEventListener("DOMContentLoaded", () => {
  const playerName = inputName.value;
  Game.start();
});

startButton.addEventListener("click", () => {});

tutorialButton.addEventListener("click", () => {
  renderTutorialScreen();
});
