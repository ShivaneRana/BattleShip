import { RealPlayer, ComputerPlayer } from "./player.js";
import { Render, renderBanner, renderTutorialScreen } from "./dom.js";

export const Game = (function () {
  let playerName;
  let player1;
  let player2;
  // player2.gameboard.placeShipRandomly(); // place ship randomly on the enemy board;
  // player1.gameboard.placeShipRandomly();
  function showTutorialScreen() {
    renderTutorialScreen();
  }

  // this is where the player will place their ship
  function showPlacementScreen(name) {
    playerName = name;
    Render.placementScreen(player1);
  }

  function showGameScreen() {
    document.body.textContent = "";
    
    player1 = new RealPlayer("player");
    player2 = new ComputerPlayer("CPU");
    //append the returned element to DOM
    player1.gameboard.placeShipRandomly();
    player2.gameboard.placeShipRandomly();
    document.body.append(Render.gameScreen(player1, player2));
  }

  function restart(){
    renderBanner();
  }

  return {
    restart,
    showTutorialScreen,
    showPlacementScreen,
    showGameScreen,
  };
})();
