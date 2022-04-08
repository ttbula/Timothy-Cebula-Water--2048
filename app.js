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
//    tiles = [
//     [].filter(Number),     //filter(Number) only filters out the 0's in the array
//     [].filter(Number),
//     [].filter(Number),
//     [].filter(Number),
// ]

for(let i=0; i < 16; i++) {
    let createDiv = document.createElement('div');
    createDiv.classList.add('tile')
    createDiv.innerHTML = 0;
    board.appendChild(createDiv)
    tiles.push.createDiv
}
generate()
}
gameBoard()

// generate pick a random square 1-16 to set innerHTML to value if square already has value, retry

function generate () {
    let randomBlock = Math.floor(Math.random() * tiles.length)
    console.log(randomBlock)
    
}
// Create a slide function that will modify the array with the new numbers

function slide () {

}


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