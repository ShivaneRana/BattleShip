import { Gameboard } from "../module/gameboard.js";

export class RealPlayer {
  constructor(name) {
    this.name =  name;
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard = new Gameboard();
  }

  reset() {
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard.reset();
  }
}

export class ComputerPlayer {
  constructor(name = "CPU") {
    this.name = name;
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard = new Gameboard();
  }

  reset(){
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard.reset();
  }
}
