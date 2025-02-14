import {Ship} from "../module/ship.js";

describe("Ship class", () => {
  let ship1;

  beforeEach(() => {
    ship1 = new Ship("submarine");
  });

  test("Ship class is defined", () => {
    expect(Ship).toBeDefined();
  });

  test("Ship class has lenght,hitTaken and Sank", () => {
    expect(new Ship("submarine").length).toBeDefined();
    expect(new Ship("submarine").hitTaken).toBeDefined();
    expect(new Ship("submarine").sank).toBeDefined();
  });

  test("Ship class with no argument", () => {
    expect(() => new Ship()).toThrow("invalid name provided");
  });

  test("check for hit function", () => {
    expect(ship1.hitTaken).toBe(0);
    ship1.hit();
    ship1.hit();
    expect(ship1.hitTaken).toBe(2);
  });

  test("ship for correct length based on name", () => {
    expect(new Ship("carrier").length).toBe(5);
    expect(new Ship("battleship").length).toBe(4);
    expect(new Ship("cruiser").length).toBe(3);
    expect(new Ship("submarine").length).toBe(3);
    expect(new Ship("destroyer").length).toBe(2);
  });

  test("check if the ship can sink", () => {
    ship1.hit();
    ship1.hit();
    expect(ship1.isSunk()).toBeFalsy();
    ship1.hit();
    expect(ship1.isSunk()).toBeTruthy();
  });
});
