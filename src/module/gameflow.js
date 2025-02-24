import { RealPlayer, ComputerPlayer } from "./player.js";
import { getName } from "../index.js";

export class Gameflow {
  constructor() {
    this.player1 = new RealPlayer(getName()); //user
    this.player2 = new ComputerPlayer("CPU"); //computer
  }
}
