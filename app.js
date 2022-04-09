// Setting up the board
// console.log("Test")
// The board is a square, width and height will be equal
// The board has a slim border
// Each square in the board will be slightly smaller than a quarter the size of the height and width 

// Numbers 

// The numbers will be colored differently
// if the number is 2 or 4: they should have a gray color with a black Font
// if number is 8: orange with white font 
// if number is 16: slightly more red orange than 8 with a white font
// if number is 32: slightly more red than 16 with a white font
// if number is 64: even more red than 32 with a white font
// if number is 128: light shade of yellow with a white font
// if number is 256: slightly darker shade of yellow with a white font
// if number is 512: browner shade of yellow with a white font
// if number is 1024: slightly more brown shade of yellow with a white font
// if number is 2048: darkest shade of yellow with a white font

// Variables

let rows = 4;
let columns = 4;
let game;
let board = document.getElementById('board');
// let createDiv = document.createElement('div');
let tiles = []
// let arrowLeft = document.
// Assign each tile with an ID
// Create an array within an array that will display the numbers on the board
function gameBoard () { 

for(let i=0; i < 16; i++) {
    let createDiv = document.createElement('div');
    createDiv.classList.add('tile')
    createDiv.innerHTML = 0;
    board.appendChild(createDiv)
    tiles.push(createDiv)
}
generate()
generate() 
// calling generate twice will generate two two's to start the game
}
gameBoard()

// generate pick a random square 1-16 to set innerHTML to value if square already has value, retry

function generate () {
    let randomBlock = Math.floor(Math.random() * tiles.length)
    let percentage = Math.floor(Math.random() * 100)
    if(percentage <= 90) {
         newNum = 2
    } else {
        newNum = 4
    }
    // console.log(randomBlock)
    console.log(tiles)
    console.log(tiles[randomBlock].innerHTML)
    if(tiles[randomBlock].innerHTML == 0) {
        tiles[randomBlock].innerHTML = newNum
    } else {
        generate()
    }
    
}
// Create a slide function that will modify the array with the new numbers

function changeColor () {
    for(let i = 0; i < tiles.length; i++) {
        switch (parseInt(tiles[i].innerHTML)) {
        case 0:
            tiles[i].style.backgroundColor = "#D1BB9F";
            tiles[i].style.color = "#D1BB9F"
            break;
        case 2:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 4:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 8:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 16:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 32:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 64:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 128:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 256:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 512:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 1024:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
        case 2048:
            tiles[i].style.backgroundColor = "blue";
            tiles[i].style.color = "white"
            break;
    }
}
}
changeColor()
// addEventListener keyup, keydown, keyleft, keyright will respond to the movements
document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
          console.log("Left");
          break;
       case 38:
          console.log("Up");
          break;
       case 39:
          console.log("Right");
          break;
       case 40:
          console.log("Down");
          break;
    }
 };
// document.addEventListener('keydown', slide);
// document.addEventListener('keyup', slide);
// document.addEventListener('keyleft', slide);
// document.addEventListener('keyright', slide);

// The slide should push all numbers to whatever direction the user choses
// If the index is 0 slide to the next index until it hits either: 
//  The wall, a different number, or the same number
// If it hits the same number then the numbers need to combine and double in value

// After every move a 2 will be placed on the board 90% of the time, the other 10% a 4 will be placed somewhere randomly on the board

// If the board is full and no moves are available the player loses

// Reset Game

// Create a button called reset with addEventListener and a function to clear the board and reset it to a new game