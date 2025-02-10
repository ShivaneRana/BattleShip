class Ship{
    constructor(length = 3){
        this.length = length;
        this.hitTaken = 0;
        this.sank = false;
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