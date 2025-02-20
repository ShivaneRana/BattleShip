import "./style.css";

const startButton = document.querySelector(".startButton");

startButton.addEventListener("click",() => {
    document.body.textContent = "";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#ffffff";
})