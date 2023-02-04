//GLOBAL VARIABLES RESTING PLACE
const gridContainer = document.querySelector('#gridContainer');
let mouseDown = false;
let level = 0;
let gridSize = "256, 16";

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
        newDiv.style.setProperty("background-color","blue");
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
    buttonElement.style.setProperty("background-color","transparent");
    //buttonElement.style.setProperty("visibility","hidden");
}

function levelUp()
{
    if(level < 1){
        level++
        CreateGridContents(gridSize);
        changeImgQuote();
    }
}

function changeImgQuote(){
    let imageSource = document.getElementById("gameImage");
    let quoteText = document.getElementById("quote");
    switch(level){
        case 0: 
            imageSource.src = "eldenRing.jpeg";
            quoteText.innerHTML = "\"Join The Serpent King As Family. Together, We Shall Devour The Very Gods.\""
            break;
        case 1: imageSource.src = "portal.jpg";
            quoteText.innerHTML = "\"Because despite your violent behavior, the only thing you've managed to break so far is my heart.\""
            break;
    }
    //"\"A string inside double quote\"";
}

document.getElementById("testBtn").addEventListener("click", levelUp);

//DEVELOPMENT WORKPAD AREA
/*
//CHECK IF MOUSE IS DOWN WHEN ENTERING





//CODE FOR MOUSE ENTERING AND LEAVE AND CLICKING - SAVE THESE ALL TO YOUR SHEET
document.getElementById("testBtn").addEventListener("mousedown", gridItemMouseDown);
document.getElementById("testBtn").addEventListener("mouseup", myFunction2);



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