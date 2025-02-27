import { RealPlayer, ComputerPlayer } from "./player.js";
import { Render } from "./dom.js";

export const Game = (function () {
  let playerName;
  let player1 = new RealPlayer(playerName); //user
  let player2 = new ComputerPlayer("CPU"); //computer

  function start(name) {
    playerName = name;
    player1 = new RealPlayer(playerName); //user
    player2 = new ComputerPlayer("CPU"); //computer
    Render.renderStarterScreen(player1.gameboard.board);
  }

  function play() {
    Render.renderGameScreen(player1, player2);
  }

  function reset() {
    player1.reset();
    player2.reset();
  }

  return {
    start,
    play,
    reset,
  };
})();
