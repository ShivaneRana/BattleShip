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

    //adding functionality
    howToButton.addEventListener("click",() => {
      renderTutorialScreen();
    })
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

function renderTutorialScreen(){
  const dialog = document.createElement("dialog");
  const wrapper = document.createElement("div");

  dialog.classList.add("tutorialD");
  wrapper.classList.add("tutorialW");
  
  dialog.append(wrapper);
  document.body.append(dialog);

  dialog.addEventListener("click",(e) => {
      if(!wrapper.contains(e.target)){
        dialog.close();
      }
  })

  dialog.showModal();
}