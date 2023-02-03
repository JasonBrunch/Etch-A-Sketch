//GLOBAL VARIABLES RESTING PLACE
const gridContainer = document.querySelector('#gridContainer');
let mouseDown = false;

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
        //EVENTS THAT TURN ON THE COLOURING WHEN MOUSE BUTTON IS DOWN
        newDiv.addEventListener("mousedown", gridItemMouseDown);
        newDiv.addEventListener("mouseup", gridItemMouseUp);        
        newDiv.addEventListener("mouseenter", gridItemMouseEnter);  
    }
}
function gridItemMouseDown(){
    console.log("THE MOUSE IS DOWN");
    mouseDown = true;
    const buttonID = "#" + this.id;
    changeColour(buttonID);
}
function gridItemMouseUp(){
    console.log("MOUSE IS UP!");
    mouseDown = false;
}
function gridItemMouseEnter(){
    console.log("MOUSE ENTER -- MOUSES DOWN = " + mouseDown);
    if(mouseDown === true){
        const buttonID = "#" + this.id;
        changeColour(buttonID);
    }
}

function changeColour(buttonID){ 
    buttonElement = document.querySelector(buttonID);
    buttonElement.style.setProperty("background-color","yellow");
}


//DEVELOPMENT WORKPAD AREA
/*
//CHECK IF MOUSE IS DOWN WHEN ENTERING





//CODE FOR MOUSE ENTERING AND LEAVE AND CLICKING - SAVE THESE ALL TO YOUR SHEET
document.getElementById("testBtn").addEventListener("mousedown", gridItemMouseDown);
document.getElementById("testBtn").addEventListener("mouseup", myFunction2);


document.getElementById("testBtn").addEventListener("mouseenter", mouseEnter);
document.getElementById("testBtn").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    console.log("MOUSE ENTER");
  }
  
  function mouseLeave() {
    console.log("MOUSE LEAVE");
  }


function myFunction() {
  console.log("MOUSE DOWN");
}function myFunction2(){console.log("MOUSE UP")};
*/