import { RealPlayer, ComputerPlayer } from "./player.js";
import { Render } from "./dom.js";

export const Game = (function(){
  let playerName;
  let player1 = new RealPlayer(playerName); //user
  let player2 = new ComputerPlayer("CPU"); //computer

  function start(name){
    playerName = name;
    player1 = new RealPlayer(playerName); //user
    player2 = new ComputerPlayer("CPU"); //computer
    console.log(player1);
    Render.renderStarterScreen(player1.gameboard.board);
  }

  function play(){
    Render.renderGameScreen();
  }

  return {
    start,
    play
  }
})();
