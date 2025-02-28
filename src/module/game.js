import { RealPlayer, ComputerPlayer } from "./player.js";
import { Render, renderTutorialScreen } from "./dom.js";

export const Game = (function () {
  let player1; //user
  let player2; //CPU

  function showTutorialScreen() {
    renderTutorialScreen();
  }

  // this is where the player will place their ship
  function showPlacementScreen(name) {
    player1 = new RealPlayer((name = "Player"));
    player2 = new ComputerPlayer("CPU");
    const board = player1.gameboard.board;
    Render.placementScreen(board);
  }

  return {
    showTutorialScreen,
    showPlacementScreen,
  };
})();
