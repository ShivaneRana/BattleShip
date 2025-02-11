class Gameboard{
    constructor(){
        this.board = Array.from({length:10},() => Array(10).fill(0));
    }

    print(){
        console.log("GameBoard~");
        this.board.forEach(row => console.log(row.join(" ")));
    }

    placeShip(start,end,name){
        if(!(Array.isArray(start))){
            throw new Error("start should be an array");
        }

        if(start.length !== 2){
            throw new Error("array length should be 2");
        }

        if(!(Array.isArray(end))){
            throw new Error("end should be an array");
        }

        if(end.length !== 2){
            throw new Error("array length should be 2");
        }

        if(typeof name !== "string"){
            throw new Error("name should be a string");
        }
    }
};

module.exports = {
    Gameboard
}