class Gameboard{
    constructor(){
        this.board = Array.from({length:10},() => Array(10).fill(0));
    }

    print(){
        console.log("GameBoard~");
        this.board.forEach(row => console.log(row.join(" ")));
    }
};

module.exports = {
    Gameboard
}