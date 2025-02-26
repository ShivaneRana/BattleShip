import { Gameboard } from "../module/gameboard.js";

export class RealPlayer {
  constructor(name = "player") {
    this.name = assingName(name);
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard = new Gameboard();
  }
}

function assingName(name){
  if(name === ""){
    return "player";
  }else{
    return name;
  }
}

export class ComputerPlayer {
  constructor(name = "CPU"){
    this.name = name;
    this.attackHit = 0;
    this.attackMiss = 0;
    this.gameboard = new Gameboard();
  }
}
