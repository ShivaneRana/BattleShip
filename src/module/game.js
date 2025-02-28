import { RealPlayer, ComputerPlayer } from "./player.js";
import { Render, renderTutorialScreen } from "./dom.js";

export const Game = (function () {
  let playerName;
  let player1 = new RealPlayer(playerName);
  let player2 = new ComputerPlayer("CPU");

  function showTutorialScreen() {
    renderTutorialScreen();
  }

  // this is where the player will place their ship
  function showPlacementScreen(name) {
    playerName = name;
    player1 = new RealPlayer(playerName);
    player2 = new ComputerPlayer("CPU");
    Render.placementScreen(player1.gameboard.board);
  }



  function showGameScreen(){
    Render.gameScreen(player1.gameboard.board,player2.gameboard.board);
  }

  return {
    showTutorialScreen,
    showPlacementScreen,
    showGameScreen
  };
})();
