// Traffic Light
// Jacky Chung
// Sept 23, 2020

let state = "green";
let lastLightSwitchTime = 0;
let greenLightDuration = 4000;
let yellowLightDuration = 1000;
let redLightDuration = 4000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
let switchlight = millis() - lastLightSwitchTime;
function draw() {
  background(220);
  drawOutlineofLights();
  lightcolor();
  chooseWhichLightToDisplay();
}


function  chooseWhichLightToDisplay(){
  if (state === "green"){
    if (millis()> lastLightSwitchTime + greenLightDuration){
      state = "yellow";
      lastLightSwitchTime = millis();
    }
  }
  if (state === "yellow"){
    if (millis()> lastLightSwitchTime + yellowLightDuration){
      state = "red";
      lastLightSwitchTime = millis();
    }
  }
  if (state === "red"){
    if (millis()> lastLightSwitchTime + redLightDuration){
      state = "green";
      lastLightSwitchTime = millis();
    }
  }
}

function drawOutlineofLights(){
  //box
  rectMode(CENTER);
  fill("black");
  rect(width/2, height/2, 75, 200, 10);
  
  //lights
  fill("white");
  circle(width/2,height/2 - 65,50); //top
  circle(width/2,height/2,50); //middle
  circle(width/2,height/2 + 65,50); //bottom
}
function lightcolor(){
  if (state === "green"){
    fill  ("white");
    circle(width/2,height/2 - 65,50);
    circle(width/2,height/2,50);
    fill ("green ");
    circle(width/2,height/2 + 65,50);
  }
  else if (state === "yellow"){
    fill  ("white");
    circle(width/2,height/2 - 65,50);
    circle(width/2,height/2 + 65,50);
    fill("yellow");
    circle(width/2,height/2,50); 
  }
  else if (state === "red"){
    fill  ("white");
    circle(width/2,height/2,50);
    circle(width/2,height/2 + 65,50);
    fill("red");
    circle(width/2,height/2 - 65,50); 
  }
}

