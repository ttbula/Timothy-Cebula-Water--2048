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

let tiles = []

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
// calling generate twice will generate two two's or four to start the game
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
// Create a changeColor function that will modify the background colors and font colors of the blocks
function changeColor () {
    for(let i = 0; i < tiles.length; i++) {
        switch (parseInt(tiles[i].innerHTML)) {
            case 0:
                tiles[i].style.backgroundColor = "#D1BB9F";
                tiles[i].style.color = "#D1BB9F"
                break;
            case 2:
                 tiles[i].style.backgroundColor = "silver";
                 tiles[i].style.color = "black"
                 break;
            case 4:
                tiles[i].style.backgroundColor = "silver";
                tiles[i].style.color = "black"
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
                        slideLeft()
                        console.log("Left");
                        generate()
                        break;
                    case 38:
                        slideUp()
                        generate()
                        console.log("Up");
                        break;
                    case 39:
                        slideRight()
                        generate()
                        console.log("Right");
                        break;
                    case 40:
                        slideDown()
                        generate()
                        console.log("Down");
                        break;
                    }
        };
                            // document.addEventListener('keydown', slide);
                            // document.addEventListener('keyup', slide);
                            // document.addEventListener('keyleft', slide);
                            // document.addEventListener('keyright', slide);
           
           function multiplyNums (nums) {
               let product = 1;
               for(let i = 0; i < nums.length; i++) {
                product *= nums[i]
               }
                return product;
           }
           
           function checkPositions () {
               let positions = []
               for(let i = 0; i < tiles.length; i++) {
                    // console.log(tiles[i].innerHTML)
                    if(tiles[i].innerHTML !== '0') {
                      let value = parseInt(tiles[i].innerHTML)
                    
                        positions[i] = value
                    } else {
                        positions[i] = 1

                    }
                }
                console.log(positions)
               return positions;
                
               
           }

           function removeOnes (nums, positions) {
               for(let i = 0; i < nums.length; i++) {
                   let current = positions[nums[i]]
                   console.log(current)
                if(current === 1) {
               nums.splice(i, 1)
               // splices each value  containing 1
           }
        }
        return nums
    }

           function combineNums (nums) {
               // grabbing positons of each one
               // creating array of each position
               let positions = checkPositions()
                // if it has value, we assign it with the value
            }
            let index = null
            for(let i = 0; i < nums.length; i++) {
                let currentNum = positions[nums[i]]

                if(currentNum !== 1) {
                    index = i
                    break;
                }
            }

            let placeholder = 0
            if(index && index !== nums.length - 1) {
                console.log('hey')
                for(let i = index + 1; i < nums.length ; i++) {
                  
                   
                    let nextNum = positions[nums[i]]
                    console.log(typeof nextNum)
                    console.log(nextNum)
                    console.log(positions[nums[index]])
                        if(positions[nums[index]] === nextNum && nextNum !== 1) {
                            console.log('ANYTHING')
                            let value = positions[nums[index]] + nextNum
                            tiles[nums[placeholder]].innerHTML = value 
                            placeholder++
                            tiles[nums[i]].innerHTML = 0
                            tiles[nums[index]].innerHTML = 0
                            
                            changeColor()
                            // nums.splice(i, 1)
                            index++
    
                        } else if(positions[nums[index]] !== nextNum && nextNum !== 1) {
                            tiles[nums[placeholder]].innerHTML = positions[nums[index]]
                            tiles[nums[index]].innerHTML = 0
                            changeColor() 
                            placeholder++
                            index++
                        }
    
                    // [4, 4, 8]
    
                }

            } 
            
           }


           function slideLeft() {
               //passing in index of each row, looping through every cell
            
                combineNums([0, 1, 2, 3])
                // row 1
                combineNums([4, 5, 6, 7])
                // row 2
                combineNums([8, 9, 10, 11])
                // row 3
                combineNums([12, 13, 14, 15])
              // row 4
            //   for(let i  = 0; i < tiles.length; i++) {
            //     if(i % 4 !== 0) {
            //         tiles[i].innerHTML = 0
            //         positions[i] = 1
            //     }
            // }
                generate()
                changeColor()
            }    

            function slideRight() {
                let positions = checkPositions()
                tiles[3].innerHTML = positions[0] * positions[1] * positions[2] * positions[3]
                tiles[7].innerHTML = positions[4] * positions[5] * positions[6] * positions[7]
                tiles[11].innerHTML = positions[8] * positions[9] * positions[10] * positions[11]
                tiles[15].innerHTML = positions[12] * positions[13] * positions[14] * positions[15]

                for(let i  = 0; i < tiles.length; i++) {
                    if(i % 4 !== 3) {
                        tiles[i].innerHTML = 0
                        positions[i] = 1
                    }
                }
                generate()
                changeColor()
            }    
            
            function slideUp() {
                let positions = checkPositions()
                tiles[0].innerHTML = positions[0] * positions[4] * positions[8] * positions[12]
                tiles[1].innerHTML = positions[1] * positions[5] * positions[9] * positions[13]
                tiles[2].innerHTML = positions[2] * positions[6] * positions[10] * positions[14]
                tiles[3].innerHTML = positions[3] * positions[7] * positions[11] * positions[15]

                for(let i  = 0; i < tiles.length; i++) {
                    if(i >= 4) {
                        tiles[i].innerHTML = 0
                        positions[i] = 1
                    }
                }
                generate()
                changeColor()
            }    
            
            function slideDown() {
                let positions = checkPositions()
                tiles[12].innerHTML = positions[0] * positions[1] * positions[2] * positions[3]
                tiles[13].innerHTML = positions[4] * positions[5] * positions[6] * positions[7]
                tiles[14].innerHTML = positions[8] * positions[9] * positions[10] * positions[11]
                tiles[15].innerHTML = positions[12] * positions[13] * positions[14] * positions[15]

                for(let i  = 0; i < tiles.length; i++) {
                    if(i <= 12) {
                        tiles[i].innerHTML = 0
                        positions[i] = 1
                    }
                }
                generate()
                changeColor()
            }    
// Create a slide function that will modify the array with the new numbers
  // The slide should push all numbers to whatever direction the user choses
// If the index is 0 slide to the next index until it hits either: 
//  The wall, a different number, or the same number
// If it hits the same number then the numbers need to combine and double in value

// After every move a 2 will be placed on the board 90% of the time, the other 10% a 4 will be placed somewhere randomly on the board

// If the board is full and no moves are available the player loses

// Reset Game

// Create a button called reset with addEventListener and a function to clear the board and reset it to a new game