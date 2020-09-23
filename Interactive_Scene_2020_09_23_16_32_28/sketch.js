//Click Mouse for hair to grow
//'r' to reset hairs' length
//mousewheel to control eye size
//move mouse to control where the eyes look


function setup(){
  cnv = createCanvas(windowWidth,windowHeight);
  cnv.mouseWheel(changeSize);
  g = 100;
  hair = 301.59
  hair3 = 198.4
}


//draw face 
function draw() {

  background(200);
  hairface();
  eyeControll();
  smile();
}


let cnv;
let size = 20;

//mouseclick hair grow
function mouseClicked() {
  if (hair > 299) {
    hair = hair - 0.1;
    hair3 = hair3 + 0.1;
  } else {
    hair = hair
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// mousewheel control
function mouseWheel() {
  g = g + 10;
}

function changeSize(event) {
  if (event.deltaY > 0 && size < 34) {
    size = size + 2;
  } else if (event.deltaY < 0 && size > 6) {
    size = size - 2;
  }
}

// key reset for hair
function keyTyped() {
  if (key === 'r') {
    hair = 301.59
    hair3 = 198.4;
  }
}

//drawing the base face layout and eye following ability
function hairface(){
  noFill();
  arc(150, 100, 80, 80, hair, TWO_PI);
  arc(229, 119, 80, 80, 85.3, hair3);
  fill(255,195,170)
  circle(190, 200, 200)
}  


function eyeControll(){
  fill(255)
  circle(142, 167, 50)
  circle(232, 167, 50)

  fill(0)
  if (mouseX < 128) {
    circle(128, 167, size)
  } else if (mouseX > 156) {
    circle(156, 167, size)
  } else {
    circle(mouseX, 167, size)
  }

  if (mouseX < 218) {
    circle(218, 167, size)
  } else if (mouseX > 247) {
    circle(247, 167, size)
  } else {
    circle(mouseX, 167, size)
  }
}

function smile(){
  noFill();
  arc(190, 240, 80, 80, 0, PI)
}