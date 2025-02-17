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
    this.board.forEach((row) => {
      console.log(row.join(" "))
    });
  }

  placeShip(start, end, name) {
    const ship = this.allShip[name];
    const x = start[0]; // start position x axis
    const y = start[1]; // start position y axis
    const x1 = end[0];  // end position x axis
    const y1 = end[1];  // end position y axis

    if (!Array.isArray(start) || !Array.isArray(end)) {
      throw new Error("start and end should be arrays");
    }

    if (start.length !== 2 || end.length !== 2) {
      throw new Error("array length should be 2");
    }

    if (typeof name !== "string") {
      throw new Error("name should be a string");
    }

    if (x !== x1 && y !== y1) {
      throw new Error("invalid placement");
    }

    if (x === x1 && y === y1) {
      throw new Error("invalid placement");
    }

    if (x === x1) {
      for (let i = y; i <= y1; i++) {
        if (this.board[x][i] !== 0) {
          throw new Error("position already occupied");
        }
      }
      for (let i = y; i <= y1; i++) {
        this.board[x][i] = ship.symbol;
      }
    }

    if (y === y1) {
      for (let i = x; i <= x1; i++) {
        if (this.board[i][y1] !== 0) {
          throw new Error("position already occupied");
        }
      }
      for (let i = x; i <= x1; i++) {
        this.board[i][y1] = ship.symbol;
      }
    }
  }

  receiveAttack([posx,posy]) {
    if(this.board[posx][posy] === 0){
      this.board[posx][posy] = 1;
      return false;
    }
    return true;
  }
}

// const game = new Gameboard();
// game.board[0][0] = 1;
// console.log(game.receiveAttack([0,0]));
// game.print();