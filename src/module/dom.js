import "./dom.css";

export const Render = (function () {
  function startScreen(arrayOfArray) {
    //create all element
    const mainContainer = document.createElement("div"); //this div will hold other html elements
    const secondaryContainer = document.createElement("div"); // contains board and ships
    const h1 = document.createElement("h1"); //heading

    //assign classes
    h1.classList.add("heading");
    mainContainer.classList.add("startScreen");
    secondaryContainer.classList.add("secondaryContainer");

    //assinging value
    h1.textContent = "Place you ships!";

    secondaryContainer.append(createGrid(arrayOfArray)); //append the board
    mainContainer.append(h1); //heading
    mainContainer.append(secondaryContainer); //append everying to the mainContainer
    document.body.append(mainContainer); //append to body
  }

  return {
    startScreen,
  };
})();

function createGrid(arrayOfArray) {
  const holder = document.createElement("div");
  holder.classList.add("holder");
  const side = 45;

  arrayOfArray.forEach((array) => {
    array.forEach((item) => {
      const div = document.createElement("div");
      div.style.height = `${side}px`;
      div.style.width = `${side}px`;
      div.style.outline = "1px solid black";
      holder.append(div);
    });
  });

  return holder;
}
