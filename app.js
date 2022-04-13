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
    // console.log(tiles)
    // console.log(tiles[randomBlock].innerHTML)
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
                        combineRow()
                        slideLeft()
                        console.log("Left");
                        generate()
                        changeColor()

                        
                        break;
                    case 38:
                        slideUp()
                        combineColumn()
                        slideUp()
                        generate()
                        changeColor()
                        console.log("Up");
                        break;
                    case 39:
                        slideRight()
                        combineRow()
                        slideRight()
                        console.log("Right");
                        generate()
                        changeColor()
                        break;
                    case 40:
                        slideDown()
                        combineColumn()
                        slideDown()
                        generate()
                        changeColor()
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

        function count (nums, positions) {
            let counting = 0
            for(let i = 0; i < nums.length; i++) {
                if(positions[nums[i]] !== 1) {
                    counting++
                }
            } 
            return counting;
        }


        function combineRow() {
            for (let i =0; i < 15; i++) {
              if (tiles[i].innerHTML === tiles[i +1].innerHTML) {
                let combinedTotal = parseInt(tiles[i].innerHTML) + parseInt(tiles[i +1].innerHTML)
                tiles[i].innerHTML = combinedTotal
                tiles[i +1].innerHTML = 0
                // score += combinedTotal
                // htmlScore.innerHTML = score
              }
            }
            // checkForWin()
          }

          function combineColumn() {
              for (let i = 0; i < 12; i++) {
                  if (tiles[i].innerHTML === tiles[i + columns].innerHTML) {
                    let combinedTotal = parseInt(tiles[i].innerHTML) + parseInt(tiles[i + columns].innerHTML)
                    tiles[i].innerHTML = combinedTotal
                    tiles[i + columns].innerHTML = 0
                  }
              }
          }

           function combineNums (nums) {
               // grabbing positons of each one
               // creating array of each position
               let positions = checkPositions()
                // if it has value, we assign it with the value
                let placeholder = 0
            let numCount = count(nums, positions)
            console.log(numCount)
            if(numCount === 0) {
                return
            } 
            let index = null
            for(let i = 0; i < nums.length; i++) {
                let currentNum = positions[nums[i]]

                if(currentNum !== 1) {
                    index = i
                    break;
                }
            }
        

            
            
            
            if(numCount === 1 && index !== null) {
                console.log('============================ HERE ===================================')
                tiles[nums[0]].innerHTML = positions[nums[index]]
                if(index !== 0) {
                    console.log('============================ THERE ===================================')
                    tiles[nums[index]].innerHTML = 0
                }
            } else {
                console.log('hey')
                for(let i = index + 1; i < nums.length ; i++) {
                  let currNum = positions[nums[index]]
                   
                    let nextNum = positions[nums[i]]
                    console.log(typeof nextNum)
                    console.log(nextNum)
                    console.log(currNum)
                        if(currNum === nextNum && nextNum !== 1) {
                            console.log('ANYTHING')
                            let value = currNum + nextNum
                            tiles[nums[placeholder]].innerHTML = value 
                            placeholder++
                            tiles[nums[i]].innerHTML = 0
                            if(index !== placeholder) {
                                tiles[nums[index]].innerHTML = 0

                            }
                            
                            changeColor()
                            // nums.splice(i, 1)
                            index++
    
                        } else if(currNum !== nextNum && nextNum !== 1) {
                            tiles[nums[placeholder]].innerHTML = currNum
                            tiles[nums[index]].innerHTML = 0
                            changeColor() 
                            placeholder++
                            index = i
                        } else {
                            tiles[nums[placeholder]].innerHTML = currNum
                        }
    
                    // [4, 4, 8]
    
                }

            } 
            
        }
        

           function slideLeft() {
               //passing in index of each row, looping through every cell
            
                combineRow([0, 1, 2, 3])
                // row 1
                combineRow([4, 5, 6, 7])
                // row 2
                combineRow([8, 9, 10, 11])
                // row 3
                combineRow([12, 13, 14, 15])
              // row 4
          
            for (let i=0; i < 16; i++) {
                if (i % 4 === 0) {
                  let one = tiles[i].innerHTML
                  let two = tiles[i+1].innerHTML
                  let three = tiles[i+2].innerHTML
                  let four = tiles[i+3].innerHTML
                  let row = [parseInt(one), parseInt(two), parseInt(three), parseInt(four)]
                  let filteredRow = row.filter(num => num)
      let missing = 4 - filteredRow.length
      let zeros = Array(missing).fill(0)
      let newRow = filteredRow.concat(zeros)
      tiles[i].innerHTML = newRow[0]
      tiles[i +1].innerHTML = newRow[1]
      tiles[i +2].innerHTML = newRow[2]
      tiles[i +3].innerHTML = newRow[3]
                console.log(newRow)
                
                
            }   

            
        }
    }
            function slideRight() {
                combineRow([0, 1, 2, 3])
                // row 1
                combineRow([4, 5, 6, 7])
                // row 2
                combineRow([8, 9, 10, 11])
                // row 3
                combineRow([12, 13, 14, 15])
              // row 4
          
            for (let i=0; i < 16; i++) {
                if (i % 4 === 0) {
                  let one = tiles[i].innerHTML
                  let two = tiles[i+1].innerHTML
                  let three = tiles[i+2].innerHTML
                  let four = tiles[i+3].innerHTML
                  let row = [parseInt(one), parseInt(two), parseInt(three), parseInt(four)]
                  let filteredRow = row.filter(num => num)
      let missing = 4 - filteredRow.length
      // removing and replacing your zeros with values and moving the zeros to the empty slots
      let zeros = Array(missing).fill(0)
      let newRow = zeros.concat(filteredRow)
      tiles[i].innerHTML = newRow[0]
      tiles[i +1].innerHTML = newRow[1]
      tiles[i +2].innerHTML = newRow[2]
      tiles[i +3].innerHTML = newRow[3]
                
            } 
            
            }
            }
            
// filter will remove all zeroes from array leaving all non-zero numbers
        // determine if how many non-zeroes numbers we have in the new filtered array
        // create an array of size 'missing' with all zeroes
        // concatenate the zeroes array with the filteredRow array
        // 0,2,0,4 becomes 2,4 .. which means the two values on the right will be 2 and 4
        // new array and values would be 0,0,2,4
       


            function slideUp() {
                //passing in index of each row, looping through every cell
             
            //      combineRow([0, 1, 2, 3])
            //      // row 1
            //      combineRow([4, 5, 6, 7])
            //      // row 2
            //      combineRow([8, 9, 10, 11])
            //      // row 3
            //      combineRow([12, 13, 14, 15])
            //    // row 4
           
             for (let i=0; i < 4; i++) {
                 
                   let one = tiles[i].innerHTML
                   let two = tiles[i+ columns].innerHTML
                   let three = tiles[i+ (columns * 2)].innerHTML
                   let four = tiles[i+ (columns * 3)].innerHTML
                   let row = [parseInt(one), parseInt(two), parseInt(three), parseInt(four)]
                   let filteredRow = row.filter(num => num)
       let missing = 4 - filteredRow.length
       let zeros = Array(missing).fill(0)
       let newRow = filteredRow.concat(zeros)
       tiles[i].innerHTML = newRow[0]
       tiles[i + columns].innerHTML = newRow[1]
       tiles[i + (columns * 2)].innerHTML = newRow[2]
       tiles[i + (columns * 3)].innerHTML = newRow[3]
                 console.log(newRow)
                 
                 
             }   
 
             
         }
            function slideDown() {
                //passing in index of each row, looping through every cell
             
                 combineRow([0, 1, 2, 3])
                 // row 1
                 combineRow([4, 5, 6, 7])
                 // row 2
                 combineRow([8, 9, 10, 11])
                 // row 3
                 combineRow([12, 13, 14, 15])
               // row 4
           
             for (let i=0; i < 4; i++) {
                 
                   let one = tiles[i].innerHTML
                   let two = tiles[i+ columns].innerHTML
                   let three = tiles[i+ (columns * 2)].innerHTML
                   let four = tiles[i+ (columns * 3)].innerHTML
                   let row = [parseInt(one), parseInt(two), parseInt(three), parseInt(four)]
                   let filteredRow = row.filter(num => num)
       let missing = 4 - filteredRow.length
       let zeros = Array(missing).fill(0)
       let newRow = zeros.concat(filteredRow)
       tiles[i].innerHTML = newRow[0]
       tiles[i + columns].innerHTML = newRow[1]
       tiles[i + (columns * 2)].innerHTML = newRow[2]
       tiles[i + (columns * 3)].innerHTML = newRow[3]
                 console.log(newRow)
                 
                 
             }   
 
             
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