import "./dom.css";

export const Render = (function(){
  
  function displayStartScreen(array){
    //create Element
    const mainScreen = document.createElement("div");
    const header = document.createElement("h1");
    const board = document.createElement("div");

    //assign classes
    mainScreen.classList.add("startScreen");
    header.classList.add("header");
    board.classList.add("board");

    //assign values
    header.textContent = "Place your ships!";
    renderTiles(array,board);

    
    //append value
    mainScreen.append(header);
    mainScreen.append(board);
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