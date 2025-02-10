class Gameboard{
    constructor(){
        this.gameboard = Array.from({length:10},() => Array(10).fill(0));
    }

    print(){
        console.log("GameBoard~");
        this.gameboard.forEach(row => console.log(row.join(" ")));
    }
};


module.exports = {
    Gameboard
}

// const gameboard = Array.from({length:10},() => Array(10).fill(0));
// const gameb = document.querySelector(".gameb");
// const dragObject = document.querySelector(".dragObject")
// const newH = (gameb.offsetHeight)/10;
// const newW = (gameb.offsetWidth)/10;
// let selected = null;
// let temp = 0;
// let temp2 = 0;


// gameboard.forEach(item => {
// 	item.forEach(item => {
// 		const div = document.createElement("div");
// 		div.setAttribute("data-x",temp);
// 		div.setAttribute("data-y",temp2);
// 		div.style.height = `${newH}px`;
// 		div.style.width = `${newW}px`;
// 		div.style.outline = "1px solid black";
// 		gameb.append(div);
		
// 		div.addEventListener("click",() => {
// 			console.log(`x: ${div.dataset.x} and y:${div.dataset.y}`);
// 		})
		
// 		div.addEventListener("dragover",(e) => {
// 			e.preventDefault();
// 		})
		
// 		div.addEventListener("drop",(e) => {
// 			e.preventDefault();
// 			if(selected){
// 				div.append(selected);
// 			}
// 		})
// 		temp2++;
// 	})
// 	temp++;
// 	temp2 = 0;
// })

// dragObject.addEventListener("dragstart",(e) => {
// 	selected = e.target;
// })