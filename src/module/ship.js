class Ship{
    constructor(length = 3){
        this.length = length;
        this.hitTaken = 0;
        this.sank = false;
        this.symbol = this.getSymbol(length);
    }

    hit(){
        if(this.hitTaken < this.length){
            this.hitTaken++;
        }

        if(this.hitTaken === this.length){
            this.sank = true;
        }
    }

    getSymbol(value){
        switch(value){
            case 5:
                return "Carrier";
                break;
            case 4:
                return "Battleship"
                break;
            case 3:
                return "Cruiser";
                break;
            case 3:
                return "Submarine";
                break;
            case 2:
                return "Destroyer";
                break;
        }
    }

    isSunk(){
        return this.sank;
    }
}

module.exports = {
    Ship,
}