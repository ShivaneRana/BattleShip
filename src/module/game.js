import { RealPlayer, ComputerPlayer } from "./player.js";
import { Render, renderTutorialScreen } from "./dom.js";

export const Game = (function () {
  let playerName;
  let player1;
  let player2;

  function showTutorialScreen() {
    renderTutorialScreen();
  }

  // this is where the player will place their ship
  function showPlacementScreen(name) {
    playerName = name;
    player1 = new RealPlayer(playerName);
    player2 = new ComputerPlayer("CPU");
    Render.placementScreen(player1.gameboard);
  }

  function showGameScreen(){
    document.body.textContent = "";
    //append the returned element to DOM
    document.body.append(Render.gameScreen(player1,player2));
  }

  return {
    showTutorialScreen,
    showPlacementScreen,
    showGameScreen
  };
})();
