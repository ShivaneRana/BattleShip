class Ship{
    constructor(name = "none"){
        this.length = this.getLength(name);
        this.hitTaken = 0;
        this.sank = false;
    }

    getLength(value){

        const chart = {
            "carrier":5,
            "battleship":4,
            "cruiser":3,
            "submarine":3,
            "destroyer":2,
        }

        return chart[value];
    }

    hit(){
        if(this.hitTaken < this.length){
            this.hitTaken++;
        }

        if(this.hitTaken === this.length){
            this.sank = true;
        }
    }

    isSunk(){
        return this.sank;
    }
}

module.exports = {
    Ship,
}