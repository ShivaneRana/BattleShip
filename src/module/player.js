import {Gameboard} from "../module/gameboard.js";

export class RealPlayer{
  constructor(){
    this.gameboard = new Gameboard();
  }
}

export class ComputerPlayer{
  constructor() {
    this.gameboard = new Gameboard();
  }
}
