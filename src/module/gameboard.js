import { Ship } from "./ship.js";

export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0)); // this is where the game plays
    // this store all the ship of each board
    this.allShip = {
      carrier: new Ship("carrier"), //5
      battleship: new Ship("battleship"), //4
      cruiser: new Ship("cruiser"), // 3
      submarine: new Ship("submarine"), //3
      destroyer: new Ship("destroyer"), //2
    };

    // this store all the visited boxes
    this.visited = new Set();
  }

  // visually represent the board;
  print() {
    let str = "";
    this.board.forEach((row) => {
      str += row.join(" ") + "\n"; // Append each row followed by a newline
    });
    console.log(str);
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

      // check for the cordinate length
      const len = y1 - y + 1;
      if (len !== this.allShip[name].length) return false;

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

      // check for the cordinate length
      const len = x1 - x + 1;
      if (len !== this.allShip[name].length) return false;

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
        return this.allShip["battleship"];
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

  //check if all the ship in the board have sank
  //if yes then return true
  //else false
  allShipSank() {
    const list = [];
    for (let i of Object.keys(this.allShip)) {
      list.push(i);
    }

    if (list.every((item) => this.allShip[item].sank === true)) {
      return true;
    }
    return false;
  }

  clear() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
  }

  //reset the enitre gameboard including all the ships
  reset() {
    this.clear();
    this.visited.clear();
    for (let i of Object.keys(this.allShip)) {
      this.allShip[`${i}`].reset();
    }
  }

  // place carrier randomly on the gameboard
  randomlyPlaceCarrier() {
    let x, x1, y, y1;
    let placed = false;
    while (!placed) {
      let toss = Math.floor(Math.random() * 2);
      const isHorizontal = toss === 0;
      // place ship horizontally
      if (isHorizontal) {
        x = Math.floor(Math.random() * 10);
        x1 = x;
        y = Math.floor(Math.random() * 6);
        y1 = y + 4;
      } else {
        //place ship vertically
        y = Math.floor(Math.random() * 10);
        y1 = y;
        x = Math.floor(Math.random() * 6);
        x1 = x + 4;
      }

      placed = this.placeShip([x, y], [x1, y1], "carrier"); // if the ship is placed then return true else loop continues
    }
  }

  randomlyPlaceBattleship() {
    let x, x1, y, y1;
    let placed = false;
    while (!placed) {
      let toss = Math.floor(Math.random() * 2);
      const isHorizontal = toss === 0;
      // place ship horizontally
      if (isHorizontal) {
        x = Math.floor(Math.random() * 10);
        x1 = x;
        y = Math.floor(Math.random() * 7);
        y1 = y + 3;
      } else {
        //place ship vertically
        y = Math.floor(Math.random() * 10);
        y1 = y;
        x = Math.floor(Math.random() * 7);
        x1 = x + 3;
      }

      placed = this.placeShip([x, y], [x1, y1], "battleship"); // if the ship is placed then return true else loop continues
    }
  }

  randomlyPlaceCruiser() {
    let x, x1, y, y1;
    let placed = false;
    while (!placed) {
      let toss = Math.floor(Math.random() * 2);
      const isHorizontal = toss === 0;
      // place ship horizontally
      if (isHorizontal) {
        x = Math.floor(Math.random() * 10);
        x1 = x;
        y = Math.floor(Math.random() * 8);
        y1 = y + 2;
      } else {
        //place ship vertically
        y = Math.floor(Math.random() * 10);
        y1 = y;
        x = Math.floor(Math.random() * 8);
        x1 = x + 2;
      }

      placed = this.placeShip([x, y], [x1, y1], "cruiser"); // if the ship is placed then return true else loop continues
    }
  }

  randomlyPlaceSubmarine() {
    let x, x1, y, y1;
    let placed = false;
    while (!placed) {
      let toss = Math.floor(Math.random() * 2);
      const isHorizontal = toss === 0;
      // place ship horizontally
      if (isHorizontal) {
        x = Math.floor(Math.random() * 10);
        x1 = x;
        y = Math.floor(Math.random() * 8);
        y1 = y + 2;
      } else {
        //place ship vertically
        y = Math.floor(Math.random() * 10);
        y1 = y;
        x = Math.floor(Math.random() * 8);
        x1 = x + 2;
      }

      placed = this.placeShip([x, y], [x1, y1], "submarine"); // if the ship is placed then return true else loop continues
    }
  }

  randomlyPlaceDestroyer() {
    let x, x1, y, y1;
    let placed = false;
    while (!placed) {
      let toss = Math.floor(Math.random() * 2);
      const isHorizontal = toss === 0;
      // place ship horizontally
      if (isHorizontal) {
        x = Math.floor(Math.random() * 10);
        x1 = x;
        y = Math.floor(Math.random() * 9);
        y1 = y + 1;
      } else {
        //place ship vertically
        y = Math.floor(Math.random() * 10);
        y1 = y;
        x = Math.floor(Math.random() * 9);
        x1 = x + 1;
      }

      placed = this.placeShip([x, y], [x1, y1], "destroyer"); // if the ship is placed then return true else loop continues
    }
  }

  placeShipRandomly() {
    this.clear();
    this.randomlyPlaceCarrier();
    this.randomlyPlaceBattleship();
    this.randomlyPlaceCruiser();
    this.randomlyPlaceSubmarine();
    this.randomlyPlaceDestroyer();
  }
}
