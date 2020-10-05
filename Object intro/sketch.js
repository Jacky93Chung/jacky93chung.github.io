// Object Intro

let jacky;
let april;

function setup() {
  createCanvas(windowWidth, windowHeight);
  jacky = new Walker(width/2, height/2, "green");
  april = new Walker(200, 100, "blue");
}

function draw(){
  jacky.move();
  april.move();

  jacky.display();
  april.display();
}

class Walker {
  constructor(x, y, theColor){
    this.x = x;
    this.y = y;
    this.color = theColor;
  }

  move() {
    let choice = random(100);
    if(choice < 25){
      //left
      this.x -= 1;
    }
    else if (choice <50){
      //right
      this.x += 1;
    }
    else if (choice <75){
      //right
      this.y -= 1;
    }
    else{
      this.y += 1;
    }
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x,this.y,5);
  }
}