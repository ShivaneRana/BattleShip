const {Ship} = require('../module/ship.js');

describe("Ship class",() => {
    let ship1;
    let Carrier;
    let Battleship;
    // let Submarine;
    let Cruiser;
    let Destroyer;

    beforeEach(() => {
        ship1 = new Ship();
        Carrier = new Ship(5);
        Battleship = new Ship(4);
        Cruiser = new Ship(3);
        // Submarine = new Ship(3);
        Destroyer = new Ship(2);
    })

    test("Ship class is defined",() => {
        expect(Ship).toBeDefined();
    })

    test("Ship class has lenght,hitTaken and Sank",() => {
        expect(new Ship().length).toBeDefined();
        expect(new Ship().hitTaken).toBeDefined();
        expect(new Ship().sank).toBeDefined();
    })

    test("check for hit function",() => {
        expect(ship1.hitTaken).toBe(0);
        ship1.hit();
        ship1.hit();
        expect(ship1.hitTaken).toBe(2);
    })

    test("check if the ship can sink",() => {
        ship1.hit();
        ship1.hit();
        expect(ship1.isSunk()).toBeFalsy();
        ship1.hit();
        expect(ship1.isSunk()).toBeTruthy();
    });

    test("Check if ship length give correct name",() => {
        expect(Carrier.symbol).toBe("Carrier");
        expect(Battleship.symbol).toBe("Battleship");
        expect(Cruiser.symbol).toBe("Cruiser");
        expect(Destroyer.symbol).toBe("Destroyer");
    })
})