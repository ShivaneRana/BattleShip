import "./style.css";
import { Gameflow } from "./module/gameflow.js";

const startButton = document.querySelector(".startButton");
const inputName = document.querySelector(".inputName");

startButton.addEventListener("click",() => {
    document.body.textContent = "";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#ffffff";
    new Gameflow();
})

export function getName(){
    return inputName.value;
}
