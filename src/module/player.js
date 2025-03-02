import { Gameboard } from "../module/gameboard.js";

export class RealPlayer {
  constructor(name) {
    this.name = name;
    this.attackHit = 0;
    this.attackMiss = 0;
    this.round = 0;
    this.gameboard = new Gameboard();
  }

  reset() {
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard.reset();
  }
}

export class ComputerPlayer {
  constructor(name) {
    this.name = name;
    this.attackHit = 0;
    this.attackMiss = 0;
    this.round = 0; // this is kinda useless ngl.
    this.gameboard = new Gameboard();
  }

  reset() {
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard.reset();
  }
}
