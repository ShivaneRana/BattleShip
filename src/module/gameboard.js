import { Ship } from "./ship.js";

export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.allShip = {
      carrier: new Ship("carrier"), //5
      battleship: new Ship("battleship"), //4
      cruiser: new Ship("cruiser"), // 3
      submarine: new Ship("submarine"), //3
      destroyer: new Ship("destroyer"), //2
    };
    this.visited = new Set();
  }

  print() {
    console.log("GameBoard~");
    this.board.forEach((row) => {
      console.log(row.join("   "));
    });
  }

  placeShip(start, end, name) {
    const ship = this.allShip[name];
    const x = start[0]; // start position x axis
    const y = start[1]; // start position y axis
    const x1 = end[0]; // end position x axis
    const y1 = end[1]; // end position y axis

    if (
      !Array.isArray(start) ||
      !Array.isArray(end) ||
      start.length !== 2 ||
      end.length !== 2
    ) {
      throw new Error("start and end should be arrays of length 2");
    }

    if (typeof name !== "string") throw new Error("name should be a string");

    if (x !== x1 && y !== y1) return false;
    if (x === x1 && y === y1) return false;

    // horizontal placement
    if (x === x1 && y !== y1) {
      for (let i = y; i <= y1; i++) {
        if (this.board[x][i] !== 0) {
          return false;
        }
      }

      for (let i = y; i <= y1; i++) {
        this.board[x][i] = ship.symbol;
      }
      return true;
    }

    // vertical placement
    if (y === y1 && x !== x1) {
      for (let i = x; i <= x1; i++) {
        if (this.board[i][y1] !== 0) {
          return false;
        }
      }

      for (let i = x; i <= x1; i++) {
        this.board[i][y1] = ship.symbol;
      }
      return true;
    }
  }

  //convert an array into a string to store in visted.
  stringfoo(x, y) {
    return `${x}:${y}`;
  }

  receiveAttack(posx, posy) {
    if (posx > 9 || posx < 0) {
      throw new Error("argument out of bound");
    }

    if (posy > 9 || posy < 0) {
      throw new Error("argument out of bound");
    }

    // if the position has already been visited
    if (this.visited.has(this.stringfoo(posx, posy))) {
      return false;
    } else {
      if (this.board[posx][posy] === 0) {
        // no ship was hit, shot missed
        this.board[posx][posy] = 1;
        this.visited.add(this.stringfoo(posx, posy));
        return false;
      }
      if (typeof this.board[posx][posy] === "string") {
        // a ship was hit
        const symbol = this.board[posx][posy];
        this.getShip(symbol).hit(); // hit the specific ship
        this.board[posx][posy] = 1; // make the target board 1 after hitting
        this.visited.add(this.stringfoo(posx, posy));
        return true;
      }
    }
  }

  getShip(value) {
    switch (value) {
      case "C":
        return this.allShip["carrier"];
        break;

      case "B":
        return this.allShip["battlefield"];
        break;

      case "R":
        return this.allShip["cruiser"];
        break;

      case "S":
        return this.allShip["submarine"];
        break;

      case "D":
        return this.allShip["destroyer"];
        break;
    }
  }
}
