import "./style.css";
import { Game } from "./module/game.js";

const tutorialButton = document.querySelector(".tutorialButton");
const startButton = document.querySelector(".startButton");
const inputName = document.querySelector(".inputName");
const introContainer = document.querySelector(".introContainer");

document.addEventListener("DOMContentLoaded", () => {
    inputName.value = "";
    introContainer.remove();
    Game.showPlacementScreen("shivane");
});

startButton.addEventListener("click", () => {
    let name = inputName.value;
    if(name === ""){
        name = "Player";
    }
});

tutorialButton.addEventListener("click", () => {
  Game.showTutorialScreen();
});
