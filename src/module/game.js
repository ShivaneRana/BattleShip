import { RealPlayer, ComputerPlayer } from "./player.js";
import { getName } from "../index.js";
import { Render } from "./dom.js";

export class Game{
  constructor() {
    this.player1 = new RealPlayer(getName()); //user
    this.player2 = new ComputerPlayer("CPU"); //computer
  }

  start(){
    Render.renderStarterScreen(this.player1.gameboard.board);
  }
}
