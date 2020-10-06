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

}


function draw() {
  background(220);
  displayGrid();

}

let closeMine;
function mousePressed() {
  let spaceX = floor((mouseX - (width/2 - cellSize*4.5))/cellSize  );
  let spaceY = floor((mouseY  - (height/2 - cellSize*4.5))/cellSize);
  digBomb(spaceX ,spaceY);
  findMine(spaceX, spaceY);
}
function findMine(spaceX, spaceY){
  closeMine = 0;
  
  if (spaceX >= 0 && spaceX < GRIDSIZE && spaceY >= 0 && spaceY < GRIDSIZE) {
    for(let i=-1;i<=1;i++){
      for (let j=-1;j<=1;j++){
        if (grid[spaceY+i][spaceX+j] === "mine"){
          closeMine = closeMine+1;
        }
      }
    }
  }
 console.log(closeMine);
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


// function showMine(){


  
// for(let i=-1;i<=1;i++){
//   for (let j=-1;j<=1;j++){
//     if(y+i>=0&& y+i<GRIDSIZE&&x+j>=0&&x+j<GRIDSIZE){
//       neighbors+= grid[y+i][x+j];
//     }
//   }
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
        // textSize(cellSize * 0.8);
        // textAlign(CENTER, CENTER);
        // text(closeMine;
        //showNumber();
      }
      else if (grid[y][x] === "blow up"){
        fill("red");
        //gameover();
      }
      else{
        fill("green");
      }
      rect(x*cellSize + windowWidth/2 - cellSize*4.5, y*cellSize+ windowHeight/2 - cellSize*4.5, cellSize, cellSize);
    }
  }
}