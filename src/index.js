import "./style.css";

const startButton = document.querySelector(".startButton");
const inputName = document.querySelector(".inputName");

document.addEventListener("DOMContentLoaded", () => {
  inputName.value = "";
});

startButton.addEventListener("click", () => {});

export function getName() {
  return inputName.value;
}
