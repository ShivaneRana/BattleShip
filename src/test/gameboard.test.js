import { Gameboard } from "../module/gameboard.js";

describe("gameboard.js", () => {
  let gameboard;
  function stringfoo(x,y){
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

  test("gameboard has placeShip function", () => {
    expect(gameboard.placeShip).toBeDefined();
    expect(typeof gameboard.placeShip).toBe("function");
  });

  test("check if argument type are correct in placeShip", () => {
    expect(() => gameboard.placeShip("shivane", [0, 1], "carrier")).toThrow(
      "start and end should be arrays",
    );
    expect(() => gameboard.placeShip([0, 1], "shivane", "carrier")).toThrow(
      "start and end should be arrays",
    );
    expect(() => gameboard.placeShip([0, 1], [0, 1], 90)).toThrow(
      "name should be a string",
    );
  });

  test("check argument length for placeship", () => {
    expect(() => gameboard.placeShip([0, 9, 0], [0, 1], "carrier")).toThrow(
      "array length should be 2",
    );
    expect(() => gameboard.placeShip([0, 9], [0, 1, 0], "carrier")).toThrow(
      "array length should be 2",
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
    gameboard.placeShip([6, 0], [6, 3], "submarine");
    for (let i = 0; i <= 3; i++) {
      expect(gameboard.board[6][i]).toBe("S");
    }
  });

  test("place ship in gameboard(2)", () => {
    gameboard.placeShip([5, 0], [9, 0], "battleship");
    for (let i = 5; i <= 9; i++) {
      expect(gameboard.board[i][0]).toBe("B");
    }
  });

  test("place ship in gameboard(3)", () => {
    gameboard.placeShip([5, 8], [7, 8], "cruiser");
    for (let i = 5; i <= 7; i++) {
      expect(gameboard.board[i][8]).toBe("R");
    }
  });

  test("receiveAttack function is created",() => {
    expect(gameboard.receiveAttack).toBeDefined();
    expect(typeof gameboard.receiveAttack).toBe("function")
  })

  test("receiveAttack function return false on missing shots",() => {
    expect(gameboard.receiveAttack(0,0)).toBeFalsy();
  })

  test("recieveAttack function return true on hitting a ship",() => {
    gameboard.placeShip([0,0],[0,4],"carrier");
    expect(gameboard.receiveAttack(0,0)).toBeTruthy();
  })

  test("receiveAttack function convert target position to to 1 if already occupied",() => {
    gameboard.placeShip([0,0],[0,4],"carrier");
    gameboard.receiveAttack(0,0);
    expect(gameboard.board[0][0]).toBe(1);
  })

  test("receiveAttack function convert target position to 1 if its empty",() => {
    gameboard.receiveAttack(0,0);
    expect(gameboard.board[0][0]).toBe(1);
  })

  test("receiveAttack function return false on targeting already visited function",() => {
    gameboard.receiveAttack(0,0);
    expect(gameboard.receiveAttack(0,0)).toBeFalsy();
  })

  test("all recieveAttack position are stored in visited set",() => {
    gameboard.receiveAttack(0,0);
    expect(gameboard.visited.has(stringfoo(0,0))).toBeTruthy();
    expect(gameboard.visited.has(stringfoo(0,1))).toBeFalsy();
  })
});
