// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const GRIDSIZE = 9;
let cellSize;
let grid;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);

  if (width < height) {
    cellSize = width / GRIDSIZE;
  }
  else {
    cellSize = height / GRIDSIZE;
  }
  grid = placemine(GRIDSIZE);
}

function draw() {
  background(220);
  displayGrid();

}
function displayGrid() {
  //squares
  for (let y=0; y<GRIDSIZE; y++) {
    for (let x=0; x<GRIDSIZE; x++) {
      strokeWeight(1);
      fill("white");
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function startGame() {
  if (key === "s") {
    grid = generateRandomGrid(9);
  }
} 

function placemine(){
  let grid = [];
  for (let i=0; i<GRIDSIZE; i++) {
    grid.push([]);
    for (let j=0; j<GRIDSIZE; j++) {
      if (random(100) < 50) {
        grid[i].push("no mine");
      }
      else {
        grid[i].push("mine");
      }
    }
  }
  return grid;
}
