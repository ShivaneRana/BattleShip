import "./dom.css";

export const Render = (function(){

    function startScreen(arrayOfArray){
        //create all element
        const mainContainer = document.createElement("div");  //this div will hold other html elements
        const secondaryContainer = document.createElement("div");   // contains board and ships
        const shipContainer = document.createElement("div");    //contains all the ship
        const h1 = document.createElement("h1");    //heading
        const carrier = document.createElement("div");
        const battleship = document.createElement("div");
        const cruiser = document.createElement("div");
        const submarine = document.createElement("div");
        const destroyer = document.createElement("div");
        
        //assign classes
        carrier.classList.add("carrier");
        battleship.classList.add("battleship");
        cruiser.classList.add("cruiser");
        destroyer.classList.add("destroyer");
        submarine.classList.add("submarine");
        h1.classList.add("heading");
        mainContainer.classList.add("startScreen");
        secondaryContainer.classList.add("secondaryContainer");
        shipContainer.classList.add("shipContainer");

        //assinging value
        h1.textContent = "Place you ships!";

        
        //appending
        shipContainer.append(carrier,battleship,cruiser,destroyer,submarine);
        secondaryContainer.append(createGrid(arrayOfArray));    //append the board
        secondaryContainer.append(shipContainer);   //contains all the ships
        mainContainer.append(h1);   //heading
        mainContainer.append(secondaryContainer);   //append everying to the mainContainer
        document.body.append(mainContainer);    //append to body
    }



    return {
        startScreen
    }

})();

function createGrid(arrayOfArray){
    const holder = document.createElement("div");
    holder.classList.add("holder");
    const s = holder.offsetHeight;

    

    return holder;
}