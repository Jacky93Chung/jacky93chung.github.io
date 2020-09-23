function setup() {
  createCanvas(windowWidth, windowHeight);



  x = 0;
  y = 0;
  let ifmoving = true;
  let ifleft = false;
  let ifup = false;
  let ifdown = false;
}

function draw() {
  background(220);

  fill(0);
  square(x, y, 50);
  change();
  go();
  




}

function go() {
  if (ifmoving === true) {
    x += 5;
  } else if (ifdown === true) {
    y += 5;
  } else if (ifleft === true) {
    x -= 5;
  } else if (ifup === true) {
    y -= 5;
  }
}

function change() {
  if (x === 0 && y <= 0) {
    x = 0;
    y = 0;
    ifmoving = true;
    ifup = false;
  } else if (x >= windowWidth - 50 && y === 0) {
    x = windowWidth - 50;
    y = 0;
    ifdown = true;
    ifmoving = false;
  } else if (x >= windowWidth - 50 && y >= windowHeight - 50) {
    x = windowWidth - 50;
    y = windowHeight - 50;
    ifleft = true;
    ifdown = false;
  } else if (x <= 0 && y === windowHeight - 50) {
    x = 0
    y = windowHeight - 50;
    ifup = true;
    ifleft = false;
  }
}