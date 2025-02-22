import "./dom.css";

export const Render = (function(){
  
  function displayStartScreen(array){
    //create Element
    const mainScreen = document.createElement("div");
    const header = document.createElement("h1");
    const board = document.createElement("div"); 
    const buttonHolder = document.createElement("div");
    const randomButton = document.createElement("button");
    const howToButton = document.createElement("button");

    //assign classes
    mainScreen.classList.add("startScreen");
    buttonHolder.classList.add("buttonHolder");
    header.classList.add("header");
    board.classList.add("board");
    

    //assign values
    header.textContent = "Place your ships!";
    howToButton.textContent = "How to Play?";
    randomButton.textContent = "Randomize";
    renderTiles(array,board);

    
    //append value
    mainScreen.append(header);
    mainScreen.append(board);
    buttonHolder.append(howToButton,randomButton);
    mainScreen.append(buttonHolder);
    document.body.append(mainScreen);

  }

  return{
    displayStartScreen
  }

}());

function renderTiles(array,holder){
  array.forEach(arr => {
      arr.forEach(element => {
          const div = document.createElement("div");
          div.classList.add("tiles");
          holder.append(div);
      })
  })

}