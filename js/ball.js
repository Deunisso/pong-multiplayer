function resetar(){
xBall = 300;
yBall = 200;
dBall = 20;
rBall = dBall * 0.5;

xSpeedBall = 5;
ySpeedBall = 5;

score1 = 0;
score2 = 0;

redBall = 255;
greenBall = 255;
blueBall = 255;
}

let xBall = 300;
let yBall = 200;
let dBall = 20;
let rBall = dBall * 0.5;

let xSpeedBall = 5;
let ySpeedBall = 5;

let score1 = 0;
let score2 = 0;

let redBall = 255;
let greenBall = 255;
let blueBall = 255;

function showBall(){
  fill(redBall, greenBall, blueBall);
  circle(xBall, yBall, dBall);
}

function moveBall(){
  xBall += xSpeedBall;
  yBall += ySpeedBall;
}

function collisionBorder(){
  if (xBall + rBall > width){
    xBall = 500;
    yBall = 200;
    xSpeedBall = 5;
    ySpeedBall = 5;
    xSpeedBall *= -1;
    score1 += 1;
    redBall = 255;
    greenBall = 255;
    blueBall = 255;
    speedRacket = 10; 
    redScreen = Math.floor(Math.random() * 201);
    greenScreen = Math.floor(Math.random() * 201);
    blueScreen = Math.floor(Math.random() * 201);

    score.play();
  }

  if (xBall - rBall < 0){
    xBall = 100;
    yBall = 200;
    xSpeedBall = 5;
    ySpeedBall = 5;
    ySpeedBall *= -1;
    score2 += 1;
    redBall = 255;
    greenBall = 255;
    blueBall = 255;
    speedRacket = 10;  
    redScreen = Math.floor(Math.random() * 201);
    greenScreen = Math.floor(Math.random() * 201);
    blueScreen = Math.floor(Math.random() * 201);    
     
    score.play(); 
  }

  if (yBall + rBall > height ||
  yBall - rBall < 0){
    ySpeedBall *= -1;
  }
}

function addScore(){
  stroke(255);
  textFont(arcadeFont);
  textAlign(CENTER);
  textSize(80);
  fill(255);
  text(score1, 200, 80);
  text(score2, 400, 80);

  if (score1 > 2){
    MENU = 2;
    victory.play();
    awesome.play();  
  }

  if (score2 > 2){
    MENU = 3;
    victory.play();
    nice.play();
  }
}

function speedColors(){
  if (redScreen > greenScreen && xSpeedBall > 9 ||
  redScreen > blueScreen && xSpeedBall > 9 ){
    redBall = 0;
    greenBall = 0;
    blueBall = 0;
    speedRacket = 15;
  }

  if (redScreen < greenScreen && xSpeedBall > 9 ||
  redScreen < blueScreen && xSpeedBall > 9){    
    redBall = 255;
    greenBall = 0;
    blueBall = 0;
    speedRacket = 15;
  }
}

function limitSpeed(){
  if (xSpeedBall > 18){
    xSpeedBall -= 1;
  }
}
