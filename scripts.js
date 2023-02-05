//GLOBAL VARIABLES RESTING PLACE
const gridContainer = document.querySelector('#gridContainer');
let mouseDown = false;
let level = 0;
let gridSize = "256, 16";
let answer = "ELDEN RING";
let score = 0;
let arrayOfLevelsCompleted = [false,false,false,false,false]

//START POINT
//MAKE THE GRID CONTENT DIVS BASED ON INPUT
CreateGridContents()
levelTextUpdate();
updateScore();

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
        newDiv.style.setProperty("background-color","black");
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
function checksIfLevelCompleted(){
    let currentLevel = arrayOfLevelsCompleted[level];
    if(currentLevel == true){
        alert("LEVEL COMPLETED");
    }
    else{console.log("LEVEL NOT COMPLETed")};
}


function levelUp(){
    if(level < 4){
        level++
        console.log("LEVEL UP " + level);
        levelTextUpdate();
        CreateGridContents();
        changeImgQuote();
        
    }
}
function levelDown(){
    if(level > 0){
        level--
        console.log("LEVEL DOWN: " + level);
        levelTextUpdate();
        CreateGridContents();
        changeImgQuote();
    }
}
function guess(){
    if(arrayOfLevelsCompleted[level] == false){
        let response = document.getElementById("answer").value;
        response = response.toUpperCase();
        //CHECK IF ANSWER CONTAINS THE ANSWER STRING
        console.log("CHECKING  " + response +  "AGAINST: "+ answer);
        if(response.includes(answer)){   
            document.getElementById("response").innerHTML = "Correct!";
            score++;
            //SETS LEVEL COMPLETED TO TRUE FOR THE TEXT AND SUBMIT BUTTON TO KNOW ABOUT IT;
            arrayOfLevelsCompleted[level] = true;
            updateScore();
            levelUp();
        }
            else{
                document.getElementById("response").innerHTML = "Try Again";
            }
    }
    document.getElementById("answer").value = "";
}
function updateScore()
{
    let scoreText = document.getElementById("scoreText");
    console.log("UPDATING SCORE, CURRENT SCORE = " +score);
    scoreText.innerHTML = "Score: " + score + " / 5";
    //CHECKS WIN CONDITION
    if(score == 5){
        document.getElementById("response").innerHTML = "YOU WIN!"
    }
}



function changeImgQuote(){
    let imageSource = document.getElementById("gameImage");
    let quoteText = document.getElementById("quote");
    switch(level){
        case 0: 
            imageSource.src = "eldenRing.jpg";
            quoteText.innerHTML = "\"Join The Serpent King As Family. Together, We Shall Devour The Very Gods.\""
            answer = "ELDEN RING";
            break;
        case 1: imageSource.src = "portal.jpg";
            quoteText.innerHTML = "\"Because despite your violent behavior, the only thing you've managed to break so far is my heart.\""
            answer = "PORTAL";
            console.log("SET ANSWER TO PORTAL");
            break;
        case 2: imageSource.src = "castlevania.jpg";
            quoteText.innerHTML = "\"What is a man? [flings his wine glass aside] A miserable little pile of secrets! But enough talk! Have at you!\""
            answer = "CASTLEVANIA";
            break;
        case 3: imageSource.src = "metalGear.png";
            quoteText.innerHTML = "\"Were not tools of the government or anyone else. Fighting was the only thing I was good at, but at least I always fought for what I believed in.\""
            answer = "METAL GEAR";
            break;
        case 4: imageSource.src = "lastofus.jpg";
            quoteText.innerHTML = "\"Ive struggled a long time with surviving, but no matter what you have to find something to fight for.\""
            answer = "LAST OF US";
            break;
        }       

}
function changeSize(amt){
    let total = amt * amt;
    let columns = amt;
    addDivsToContainer(total,columns);
    console.log("ADDING TOTAL OF" + total + "AND THIS MANY COLUMNS" + columns);
}
function levelTextUpdate(){
    checksIfLevelCompleted()
    let levelHeader = document.querySelector("#levelText");
    let levelUpdated = level + 1;
    levelHeader.innerHTML = "Level: " + levelUpdated;
}

//const changeSize1 = changeSize(8);
//ADDS THE EVENT TO THE LEVELUP BUTTON
document.getElementById("levelUp").addEventListener("click", levelUp);
document.getElementById("levelDown").addEventListener("click", levelDown);
document.getElementById("sizeBtn1").addEventListener("click", function(){changeSize(8)},false)
document.getElementById("sizeBtn2").addEventListener("click", function(){changeSize(16)},false)
document.getElementById("sizeBtn3").addEventListener("click", function(){changeSize(32)},false);
document.getElementById("submit").addEventListener("click", guess);

//addEventListener('change',function() {
 //   getSelection(self)
//},false);


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