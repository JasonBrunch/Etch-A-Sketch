const testBtn = document.querySelector('#testBtn');
const gridContainer = document.querySelector('#gridContainer');

//START POINT
//MAKE THE GRID CONTENT DIVS BASED ON INPUT
CreateGridContents()

function CreateGridContents(){
    addDivsToContainer(256,16);   
}

//SET THE GRID COLUMNS AND ROWS IN CSS
function addDivsToContainer(amount, columnAmt){
    //CLEARS CONTENTS OF CONTAINER
    gridContainer.innerHTML = "";
    //SET THE COLUMN AMOUNT
    gridContainer.style.setProperty("grid-template-columns", `repeat(${columnAmt},1fr)`);
    //ADD NEW DIVS TO CONTAINER BASED ON AMOUNT ENTERED
    for(let i = 0; i < amount; i++){
        //CREATES THE EMPTY DIV ELEMENT
        let newDiv = document.createElement("div");      
        //ADD A unqiue ID TO THE DIV
        newDiv.setAttribute("id",`button${i}`);
        gridContainer.appendChild(newDiv);
        //ADDS THE CHANGE COLOR EVENT TO THE GRID ITEM
        newDiv.addEventListener("click", changeColour);
    }
}
function changeColour(){
    const buttonID = "#" + this.id;
    buttonElement = document.querySelector(buttonID);
    buttonElement.style.setProperty("background-color","yellow");
}

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

if(mouseDown){
    console.log("CRICKEY");
  }

//object.addEventListener("mousedown", onDownFunc());
function testFunction(){
    alert("YEAH BOYS")
}