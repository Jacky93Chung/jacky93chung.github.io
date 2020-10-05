// Minesweeper
// Jacky Chung
// October 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const GRIDSIZE = 9;
let cellSize;
let grid;
let cellWidth;
let cellHeight;

 
function setup() {
  createCanvas(windowWidth, windowHeight);
  

  if (width < height) {
    cellSize = width / GRIDSIZE;
  }
  else {
    cellSize = height/ GRIDSIZE  - 10 ;
  }
  grid = placemine(GRIDSIZE);
  cellWidth = width - cellSize+ windowWidth/2 - cellSize*4.5 / grid[0].length;
  cellHeight = height / grid.length ;
}


function draw() {
  background(220);
  displayGrid();

}


function mousePressed() {
  let spaceX = floor(mouseX / cellWidth);
  let spaceY = floor(mouseY / cellHeight);
  digBomb(spaceX,spaceY);
}

function digBomb(spaceX, spaceY) {
  if (spaceX >= 0 && spaceX < GRIDSIZE && spaceY >= 0 && spaceY < GRIDSIZE) {
    if (grid[spaceY][spaceX] === "no mine" ||grid[spaceY][spaceX] === "pressed"  ) {
      grid[spaceY][spaceX] = "pressed";
    }
    else {
      grid[spaceY][spaceX] = "blow up";
    }
  }
}


// function ShowMine(){
//   let closeMine = 0;
//   for ()
// }

function placemine(){
  let grid = [];
  for (let i=0; i<GRIDSIZE; i++) {
    grid.push([]);
    for (let j=0; j<GRIDSIZE; j++) {
      if (random(100) < 70) {
        grid[i].push("no mine");
      }
      else {
        grid[i].push("mine");
      }
    }
  }
  return grid;
}

function displayGrid() {
  //squares
  for (let y = 0; y<GRIDSIZE; y++) {
    for (let x= 0; x<GRIDSIZE; x++) {
      strokeWeight(1);
      if (grid[y][x] === "pressed"){
        fill("white");
        //showNumber();
      }
      else if (grid[y][x] === "blow up"){
        fill("red");
        //gameover();
      }
      else{
        fill("green");
      }
      rect(x*cellSize+ windowWidth/2 - cellSize*4.5, y*cellSize+ windowHeight/2 - cellSize*4.5, cellSize, cellSize);
    }
  }
}
