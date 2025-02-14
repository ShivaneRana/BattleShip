const {Gameboard} = require("../module/gameboard.js")

describe("gameboard.js",() => {

    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard()
    });
    
    test("gameboard class exist",() => {
        expect(Gameboard).toBeDefined();
    })

    test("gameboard has board object",() => {
        expect(gameboard.board).toBeDefined();
        expect(Array.isArray(gameboard.board)).toBeTruthy()
    })

    test("gameboard has placeShip function",() => {
        expect(gameboard.placeShip).toBeDefined();
        expect(typeof gameboard.placeShip).toBe("function");
    })

    test("check if argument type are correct in placeShip",() => {
        expect(() => gameboard.placeShip("shivane",[0,1],"carrier")).toThrow("start should be an array");
        expect(() => gameboard.placeShip([0,1],"shivane","carrier")).toThrow("end should be an array");
        expect(() => gameboard.placeShip([0,1],[0,1],90)).toThrow("name should be a string");
    })

    test("check if start and end position are the same",() => {
        expect(() => gameboard.placeShip([0,1],[0,1],"carrier")).toThrow("start and end position cannot be same");
    })

    test("check argument length for placeship",() => {
        expect(() => gameboard.placeShip([0,9,0],[0,1],"carrier")).toThrow("array length should be 2");
        expect(() => gameboard.placeShip([0,9],[0,1,0],"carrier")).toThrow("array length should be 2");
    })


    test("place ship in gameboard",() => {
        gameboard.placeShip([0,0],[0,4],"Carrier")
        for(let i = 0;i < 4;i++){
            expect(gameboard.board[0][i]).toBe("C");
        }
    })

    test("place ship in gameboard(2)",() => {
        gameboard.placeShip([5,0],[9,0],"BattleShip")
        for(let i = 5;i < 9;i++){
            expect(gameboard.board[i][0]).toBe("B")
        }
    })

})

