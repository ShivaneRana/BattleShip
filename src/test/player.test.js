import { player1, player2 } from "../module/player.js";

describe("player.js", () => {
  test("player1 and player2 class exist", () => {
    expect(player1).toBeDefined();
    expect(player2).toBeDefined();
  });
});
