import "./style.css";
import { Gameflow } from "./module/gameflow.js";

const startButton = document.querySelector(".startButton");
const inputName = document.querySelector(".inputName");

document.addEventListener("DOMContentLoaded", () => {
  inputName.value = "";
});

startButton.addEventListener("click", () => {
  document.body.textContent = "";
  const game = new Gameflow();
  game.start();
});

export function getName() {
  return inputName.value;
}
