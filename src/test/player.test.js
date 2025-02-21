import { RealPlayer, ComputerPlayer } from "../module/player.js";

describe("player.js", () => {
  test("realPlayer and computerPlayer class exist", () => {
    expect(RealPlayer).toBeDefined();
    expect(ComputerPlayer).toBeDefined();
  });

  test("RealPlayer have a gamboard object", () => {
    expect(new RealPlayer().gameboard).toBeDefined();
  });

  test("ComputerPlayer have a gamboard object", () => {
    expect(new ComputerPlayer().gameboard).toBeDefined();
  });
});
