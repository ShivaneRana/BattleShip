import { Ship } from "./ship.js";

export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.allShip = {
      carrier: new Ship("carrier"),
      destroyer: new Ship("destroyer"),
      cruiser: new Ship("cruiser"),
      battleship: new Ship("battleship"),
      submarine: new Ship("submarine"),
    };
  }

  print() {
    console.log("GameBoard~");
    this.board.forEach((row) => console.log(row.join(" ")));
  }

  placeShip(start, end, name) {
    const ship = this.allShip[name];

    if (!Array.isArray(start)) {
      throw new Error("start should be an array");
    }

    if (!Array.isArray(end)) {
      throw new Error("end should be an array");
    }

    if (start.length !== 2 || end.length !== 2) {
      throw new Error("array length should be 2");
    }

    if (typeof name !== "string") {
      throw new Error("name should be a string");
    }

    if (start[0] !== end[0] && start[1] !== end[1]) {
      throw new Error("invalid placement");
    }

    if (start[0] === end[0] && start[1] === end[1]) {
      throw new Error("invalid placement");
    }

    if (start[0] === end[0]) {
      for (let i = start[1]; i <= end[1]; i++) {
        if (this.board[start[0]][i] !== 0) {
          throw new Error("position already occupied");
        }
      }

      for (let i = start[1]; i <= end[1]; i++) {
        this.board[start[0]][i] = ship.symbol;
      }
    }

    if (start[1] === end[1]) {
      for (let i = start[0]; i <= end[0]; i++) {
        if (this.board[i][end[1]] !== 0) {
          throw new Error("position already occupied");
        }
      }

      for (let i = start[0]; i <= end[0]; i++) {
        this.board[i][end[1]] = ship.symbol;
      }
    }
  }
}
