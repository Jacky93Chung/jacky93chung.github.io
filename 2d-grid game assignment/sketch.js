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
let mineMap;

 
function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
  

  if (width < height) {
    cellSize = width / GRIDSIZE;
  }
  else {
    cellSize = height/ GRIDSIZE - 10 ;
  }

  
  

  grid = placemine(GRIDSIZE);
  mineMap = showMap(GRIDSIZE);
}


function draw() {
  background(220);
  displayGrid();
 
}

let closeMine;
function mousePressed() {
  let spaceX = floor((mouseX - (width/2- cellSize*(GRIDSIZE/2)))/cellSize  );
  let spaceY = floor((mouseY  - (height/2- cellSize*(GRIDSIZE/2)))/cellSize);
  // let spaceY = floor(mouseY/cellSize);
  digBomb(spaceX ,spaceY);
  // findMine(spaceX, spaceY);
}

// function findMine(spaceX, spaceY){
 
//   closeMine = 0;
//   if (spaceX>= 0 && spaceX < GRIDSIZE && spaceY - 1>= 0 && spaceY + 1  < GRIDSIZE) {
//     for(let i=-1;i<=1;i++){
//       for (let j=-1;j<=1;j++){
//         if (grid[spaceY+i][spaceX+j] === "mine"){
//           closeMine = closeMine+1;
//         }
//       }
     
//     }
//   }
//   else if (spaceX>= 0 && spaceX < GRIDSIZE && spaceY + 1> 0 && spaceY + 1  < GRIDSIZE) {
//     for(let i=0;i<=1;i++){
//       for (let j=-1;j<=1;j++){
//         if (grid[spaceY+i][spaceX+j] === "mine"){
//           closeMine = closeMine+1;
//         }
//       }
     
//     }

//   }
//   else{
//     for(let i=-1;i<=0;i++){
//       for (let j=-1;j<=1;j++){
//         if (grid[spaceY+i][spaceX+j] === "mine"){
//           closeMine = closeMine+1;
//         }
//       }
  
     
//     }

//   }
//   console.log(closeMine);
// }
  

// function findMine(x, y){
//   let mineMap= [];
//   closeMine = 0;
//   if (x >= 0 && x < GRIDSIZE && y >= 0 && y < GRIDSIZE) {
//     for(let i=-1;i<=1;i++){
//       mineMap.push([]);
//       for (let j=-1;j<=1;j++){
//         if (grid[y+i][x+j] === "mine"){
//           closeMine = closeMine+1;
//         }
//       }
//       mineMap[i].push(closeMine);
//     }
//   }
 
// console.log(closeMine);
// }
  
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

function showMap(){
  let  mineMap = [];
  for (let y=0; y<GRIDSIZE; y++) {
    mineMap.push([]);
    for (let x=0; x<GRIDSIZE; x++) {
      let closeMine = 0;
      if (x>= 0 && x< GRIDSIZE && y - 1>= 0 && y + 1  < GRIDSIZE) {
        for(let i=-1;i<=1;i++){
          for (let j=-1;j<=1;j++){
            if (grid[y+i][x+j] === "mine"){
              closeMine = closeMine+1;
            }
          }
          
        }
        mineMap[y].push(closeMine);
      }
      else if (x>= 0 && x < GRIDSIZE && y + 1> 0 && y + 1  < GRIDSIZE) {
        for(let i=0;i<=1;i++){
          for (let j=-1;j<=1;j++){
            if (grid[y+i][x+j] === "mine"){
              closeMine = closeMine+1;
            }
          }
          
        }
        mineMap[y].push(closeMine);
      }
      else{
        for(let i=-1;i<=0;i++){
          for (let j=-1;j<=1;j++){
            if (grid[y+i][x+j] === "mine"){
              closeMine = closeMine+1;
            }
          }
         
        }
        mineMap[y].push(closeMine);
       
      }
      
    }
    

  }
  return mineMap;
}

function displayGrid() {
  //squares
  for (let y = 0; y<GRIDSIZE; y++) {
    for (let x= 0; x<GRIDSIZE; x++) {
      strokeWeight(1);
      
      if (grid[y][x] === "pressed"){
        fill("white");
        rect(x*cellSize + windowWidth/2 - cellSize*(GRIDSIZE/2), y*cellSize+ windowHeight/2 - cellSize*(GRIDSIZE/2), cellSize, cellSize);
        fill("black");
        textSize(cellSize * 0.8);
        textAlign(CENTER, CENTER);
        text(mineMap[y][x],x*cellSize + windowWidth/2 - cellSize*(GRIDSIZE/2) +cellSize/2, y*cellSize+ windowHeight/2 - cellSize*(GRIDSIZE/2) + cellSize/2);
        
        
        // textSize(cellSize * 0.8);
        // textAlign(CENTER, CENTER);
        // text(closeMine;
        //showNumber();
      }
      else if (grid[y][x] === "blow up"){
        fill("red");
        rect(x*cellSize + windowWidth/2 - cellSize*(GRIDSIZE/2), y*cellSize+ windowHeight/2 - cellSize*(GRIDSIZE/2), cellSize, cellSize);
        //gameover();
      }
      else{
        fill("green");
        rect(x*cellSize + windowWidth/2 - cellSize*(GRIDSIZE/2), y*cellSize+ windowHeight/2 - cellSize*(GRIDSIZE/2), cellSize, cellSize);
      }
      
    // rect(x*cellSize + windowWidth/2 - cellSize*4.5, y*cellSize, cellSize, cellSize);
    }
    
  }
}