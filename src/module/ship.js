export class Ship {
  constructor(name = "none") {
    this.length = this.getLength(name);
    this.symbol = this.getSymbol(name);
    this.hitTaken = 0;
    this.sank = false;
  }

  // return specific length for each ship
  getLength(value) {
    const chart = {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2,
    };

    if (!chart[value]) {
      throw new Error("invalid name provided");
    }

    return chart[value];
  }

  // return specific symbol for each ship
  getSymbol(value) {
    const chart = {
      carrier: "C",
      battleship: "B",
      cruiser: "R",
      submarine: "S",
      destroyer: "D",
    };

    if (!chart[value]) {
      throw new Error("invalid name provided");
    }

    return chart[value];
  }

  hit() {
    if (this.hitTaken < this.length) {
      this.hitTaken++;
    }

    if (this.hitTaken === this.length) {
      this.sank = true;
    }
  }

  isSunk() {
    return this.sank;
  }

  reset(){
    this.hitTaken = 0;
    this.sank = false;
  }
}
