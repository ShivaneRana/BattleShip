class Ship{
    constructor(name){
        this.length = this.getLength(name);
        this.hitTaken = 0;
        this.sank = false;
    }

    getLength(value){

        if(!value){
            return 3; // return 3 as a default length
        }

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