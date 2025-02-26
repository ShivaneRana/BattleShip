import { Gameboard } from "../module/gameboard.js";

describe("gameboard.js", () => {
  let gameboard;
  function stringfoo(x, y) {
    return `${x}:${y}`;
  }

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("gameboard class exist", () => {
    expect(Gameboard).toBeDefined();
  });

  test("gameboard has board object", () => {
    expect(gameboard.board).toBeDefined();
    expect(Array.isArray(gameboard.board)).toBeTruthy();
  });
});

describe("placeShip function", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("gameboard has placeShip function", () => {
    expect(gameboard.placeShip).toBeDefined();
    expect(typeof gameboard.placeShip).toBe("function");
  });

  test("check if argument type are correct in placeShip", () => {
    expect(() => gameboard.placeShip("shivane", [0, 1], "carrier")).toThrow(
      "start and end should be arrays of length 2",
    );

    expect(() => gameboard.placeShip([0, 1], "shivane", "carrier")).toThrow(
      "start and end should be arrays of length 2",
    );

    expect(() => gameboard.placeShip([0, 1], [0, 1], 90)).toThrow(
      "name should be a string",
    );
  });

  test("check if coordinates length is equal to ship length(1)", () => {
    expect(gameboard.placeShip([0, 0], [0, 5], "carrier")).toBeFalsy();
  });

  test("check if coordinates length is equal to ship length(1)", () => {
    expect(gameboard.placeShip([4, 4], [9, 4], "submarine")).toBeFalsy();
  });

  test("check argument length for placeship", () => {
    expect(() => gameboard.placeShip([0, 9, 0], [0, 1], "carrier")).toThrow(
      "start and end should be arrays of length 2",
    );
    expect(() => gameboard.placeShip([0, 9], [0, 1, 0], "carrier")).toThrow(
      "start and end should be arrays of length 2",
    );
  });

  test("check for invalid placement(1)", () => {
    expect(gameboard.placeShip([0, 0], [0, 0], "carrier")).toBeFalsy();
  });

  test("check for invalid placement(2)", () => {
    expect(gameboard.placeShip([1, 2], [3, 4], "carrier")).toBeFalsy();
  });

  test("check for invalid placement(3)", () => {
    expect(gameboard.placeShip([0, 0], [4, 4], "carrier")).toBeFalsy();
  });

  test("place ship in gameboard", () => {
    gameboard.placeShip([0, 0], [0, 4], "carrier");
    for (let i = 0; i <= 4; i++) {
      expect(gameboard.board[0][i]).toBe("C");
    }
  });

  test("place ship in gameboard(1)", () => {
    gameboard.placeShip([6, 0], [6, 2], "submarine");
    for (let i = 0; i <= 2; i++) {
      expect(gameboard.board[6][i]).toBe("S");
    }
  });

  test("place ship in gameboard(2)", () => {
    gameboard.placeShip([5, 0], [8, 0], "battleship");
    for (let i = 5; i <= 8; i++) {
      expect(gameboard.board[i][0]).toBe("B");
    }
  });

  test("place ship in gameboard(3)", () => {
    gameboard.placeShip([5, 8], [7, 8], "cruiser");
    for (let i = 5; i <= 7; i++) {
      expect(gameboard.board[i][8]).toBe("R");
    }
  });
});

// test suite for receiveAttack function
describe("receiveAttack function", () => {
  let gameboard;

  function stringfoo(x, y) {
    return `${x}:${y}`;
  }

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("receiveAttack function is created", () => {
    expect(gameboard.receiveAttack).toBeDefined();
    expect(typeof gameboard.receiveAttack).toBe("function");
  });

  test("recieveAttack function arg is out of bound", () => {
    expect(() => gameboard.receiveAttack(0, 10)).toThrow(
      "argument out of bound",
    );
    expect(() => gameboard.receiveAttack(-100, 0)).toThrow(
      "argument out of bound",
    );
  });

  test("receiveAttack function return false on missing shots", () => {
    expect(gameboard.receiveAttack(0, 0)).toBeFalsy();
  });

  test("recieveAttack function return true on hitting a ship", () => {
    gameboard.placeShip([0, 0], [0, 4], "carrier");
    expect(gameboard.receiveAttack(0, 0)).toBeTruthy();
  });

  test("receiveAttack function convert target position to to 1 if already occupied", () => {
    gameboard.placeShip([0, 0], [0, 4], "carrier");
    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0][0]).toBe(1);
  });

  test("receiveAttack function convert target position to 1 if its empty", () => {
    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0][0]).toBe(1);
  });

  test("receiveAttack function return false on targeting already visited function", () => {
    gameboard.receiveAttack(0, 0);
    expect(gameboard.receiveAttack(0, 0)).toBeFalsy();
  });

  test("all recieveAttack position are stored in visited set", () => {
    gameboard.receiveAttack(0, 0);
    expect(gameboard.visited.has(stringfoo(0, 0))).toBeTruthy();
    expect(gameboard.visited.has(stringfoo(0, 1))).toBeFalsy();
  });

  test("receiveAttack function hits a ship: carrier", () => {
    gameboard.placeShip([0, 0], [0, 4], "carrier");
    gameboard.receiveAttack(0, 0); //hit
    gameboard.receiveAttack(0, 1); //hit
    expect(gameboard.allShip["carrier"].hitTaken).toBe(2);
  });

  test("receiveAttack function hits a ship: destroyer", () => {
    gameboard.placeShip([4, 7], [4, 9], "destroyer");
    gameboard.receiveAttack(0, 0); //miss
    gameboard.receiveAttack(0, 1); //miss
    expect(gameboard.allShip["destroyer"].hitTaken).toBe(0);
  });

  test("receiveAttack function hits a ship: submarine", () => {
    gameboard.placeShip([0, 0], [2, 0], "submarine");
    gameboard.receiveAttack(0, 0); // hit
    gameboard.receiveAttack(0, 1); //miss
    expect(gameboard.allShip["submarine"].hitTaken).toBe(1);
  });

  // check if the board position is 1 after hitting a ship
  test("receiveAttack function changes target after hitting", () => {
    gameboard.placeShip([0, 0], [0, 4], "carrier");
    gameboard.receiveAttack(0, 0); //hit
    gameboard.receiveAttack(0, 1); //hit
    gameboard.receiveAttack(0, 2); //hit
    gameboard.receiveAttack(0, 3); //hit
    expect(gameboard.board[0][0]).toBe(1);
    expect(gameboard.allShip["carrier"].hitTaken).toBe(4);
  });
});

describe("allShipSank", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
    gameboard.placeShip([0, 0], [0, 4], "carrier");
    gameboard.placeShip([1, 0], [1, 3], "battleship");
    gameboard.placeShip([2, 0], [2, 2], "cruiser");
    gameboard.placeShip([3, 0], [3, 2], "submarine");
    gameboard.placeShip([4, 0], [4, 1], "destroyer");
  });

  test("allShipSank function exist", () => {
    expect(gameboard.allShipSank).toBeDefined();
  });

  test("allShipSank is a function", () => {
    expect(typeof gameboard.allShipSank).toBe("function");
  });

  test("allShipSank return false by default", () => {
    expect(gameboard.allShipSank()).not.toBeUndefined();
    expect(gameboard.allShipSank()).toBeFalsy();
  });

  test("allShipSank return true when all ship sank", () => {
    for (let i = 0; i <= 4; i++) {
      gameboard.receiveAttack(0, i);
    }

    for (let i = 0; i <= 3; i++) {
      gameboard.receiveAttack(1, i);
    }

    for (let i = 0; i <= 2; i++) {
      gameboard.receiveAttack(2, i);
    }

    for (let i = 0; i <= 2; i++) {
      gameboard.receiveAttack(3, i);
    }

    for (let i = 0; i <= 1; i++) {
      gameboard.receiveAttack(4, i);
    }

    expect(gameboard.allShipSank()).toBeTruthy();
  });
});

describe("clear board", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
    gameboard.placeShip([0, 0], [0, 4], "carrier");
    gameboard.placeShip([1, 0], [1, 3], "battleship");
    gameboard.placeShip([2, 0], [2, 2], "cruiser");
    gameboard.placeShip([3, 0], [3, 2], "submarine");
    gameboard.placeShip([4, 0], [4, 1], "destroyer");
  });

  test("clear function is defined", () => {
    expect(gameboard.clear).toBeDefined();
  });

  test("clear function is a function", () => {
    expect(typeof gameboard.clear).toBe("function");
  });

  test("clear function happy path(1)", () => {
    gameboard.clear();
    gameboard.board.forEach((arr) => {
      arr.forEach((item) => {
        expect(item).toBe(0);
      });
    });
  });
});
