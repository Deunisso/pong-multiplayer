let xRacket = 5;
let yRacket = 150;
let wRacket = 10;
let hRacket = 100;

let xRacket2 = 585;
let yRacket2 = 150;

let speedRacket = 10;

function showRacket(x, y){
  rect(x, y, wRacket, hRacket);
}

function moveRacket(){
  if (keyIsDown(87) && yRacket > 0){
    yRacket -= speedRacket;
  }
  
  if (keyIsDown(83) && yRacket < 300){
    yRacket += speedRacket;
  }
}

function moveRacket2(){
  if (keyIsDown(UP_ARROW) && yRacket2 > 0){
    yRacket2 -= speedRacket;
  }

  if (keyIsDown(DOWN_ARROW) && yRacket2 < 300){
    yRacket2 += speedRacket;
  }
}

function collisionRacket(){
  if (xBall - rBall - wRacket - 2 < xRacket &&
  yBall + rBall > yRacket &&
  yBall - rBall < yRacket + hRacket){
    xSpeedBall *= -1.1;

    hit.play();
  }

  if (xBall + rBall + 2 > xRacket2 &&
  yBall + rBall > yRacket2 &&
  yBall - rBall < yRacket2 + hRacket){
    xSpeedBall *= -1.1;

    hit.play();
  }
}
