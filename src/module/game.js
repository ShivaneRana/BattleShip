import { RealPlayer, ComputerPlayer } from "./player.js";
import { Render, renderTutorialScreen } from "./dom.js";

export const Game = (function () {
  let playerName;
  let player1 = new RealPlayer("Shivane");
  let player2 = new ComputerPlayer("CPU");

  function showTutorialScreen() {
    renderTutorialScreen();
  }

  // this is where the player will place their ship
  function showPlacementScreen(name) {
    // playerName = name;
    // player1 = new RealPlayer(playerName);
    // player2 = new ComputerPlayer("CPU");
    // Render.placementScreen(player1);
  }

  function showGameScreen() {
    document.body.textContent = "";
    player2.gameboard.placeShipRandomly(); // place ship randomly on the enemy board;
    player1.gameboard.placeShipRandomly();
    //append the returned element to DOM
    document.body.append(Render.gameScreen(player1, player2));
  }

  return {
    showTutorialScreen,
    showPlacementScreen,
    showGameScreen,
  };
})();
