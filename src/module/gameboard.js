class Gameboard{
    constructor(){
        this.gameboard = Array.from({length:10},() => Array(10).fill(0));
    }

    print(){
        console.log("GameBoard~");
        this.gameboard.forEach(row => console.log(row.join(" ")));
    }
};


module.exports = {
    Gameboard
}