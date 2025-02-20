import {Gameboard} from "../module/gameboard.js";

export class RealPlayer{
  constructor(name = "Player1"){
    this.name = name;
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard = new Gameboard();
  }
}

export class ComputerPlayer{
  constructor(name = "Player2") {
    this.name = name;
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard = new Gameboard();
  }
}
