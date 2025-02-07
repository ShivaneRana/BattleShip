const {Gameboard} = require("../module/gameboard.js")

describe("gameboard.js",() => {

    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard()
    });
    
    test("gameboard class exist",() => {
        expect(Gameboard).toBeDefined();
    })


    test("gameboard return object",() => {
        expect(typeof gameboard).toBe("object")
    })
})