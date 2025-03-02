import { RealPlayer, ComputerPlayer } from "./player.js";
import { Render, renderBanner, renderTutorialScreen } from "./dom.js";

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
    Render.placementScreen(player1);
  }

  //display game screen
  function showGameScreen() {
    document.body.textContent = "";
    player2.gameboard.placeShipRandomly();
    document.body.append(Render.gameScreen(player1, player2));
  }

  function showBanner() {
    renderBanner();
  }

  //restart new game
  function restart() {
    document.body.textContent = "";
    player1.reset(); //reset player1
    player2.reset(); //reset player2
    Render.placementScreen(player1);
  }

  return {
    restart,
    showBanner,
    showTutorialScreen,
    showPlacementScreen,
    showGameScreen,
  };
})();
