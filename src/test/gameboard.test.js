const {Gameboard} = require("../module/gameboard.js")

describe("gameboard.js",() => {

    let gameB;
    beforeEach(() => {
        gameB = new Gameboard()
    });
    
    test("gameboard class exist",() => {
        expect(Gameboard).toBeDefined();
    })


    test("gameboard return object",() => {
        expect(typeof gameB).toBe("object")
    })

    test("gameboard exist",() => {
        expect(gameB.gameboard).toBeDefined();
    })


})

