MENU = 0;

let redScreen = Math.floor(Math.random() * 201);
let greenScreen = Math.floor(Math.random() * 201);
let blueScreen = Math.floor(Math.random() * 201);

function setup(){
  createCanvas(600, 400);
  menu.loop();
}

function draw(){
  if (MENU == 0) {
    image(menuImage, 0, 0, 600, 400);

    amplification()
  }

  if (MENU == 1) {
    background(redScreen, greenScreen, blueScreen);
    line(300, 0, 300, 400);
  
    showBall();
    moveBall();
    collisionBorder();
    addScore();
    speedColors();
    limitSpeed();
  
    showRacket(xRacket, yRacket);
    showRacket(xRacket2, yRacket2);
    moveRacket();
    moveRacket2();
    collisionRacket();

    amplification();

    if (MENU == 1 && mouseButton == RIGHT) {
      MENU = 0;
      resetar();
      theme.stop();
      menu.loop();
    }
  } 

  if (MENU == 2) {
    textFont(arcadeFont)
    textSize(80);
    text('P l a y e r 1', 300, 190);
    text('W i n s', 300, 260);
    textFont(bold);
    textSize(20);
    text('CLIQUE NA TELA PARA VOLTAR AO MENU', 300, 370);
    theme.stop();
    amplification();
  } 

  if (MENU == 3) {
    textFont(arcadeFont)
    textSize(80);
    text('P l a y e r 2', 300, 190);
    text('W i n s', 300, 260);
    textFont(bold);
    textSize(20);
    text('CLIQUE NA TELA PARA VOLTAR AO MENU', 300, 370);
    theme.stop();
    amplification();
  } 

  if (MENU == 4) {
    image(menuImage2, 0, 0, 600, 400);
    amplification();

    if (MENU == 4 && mouseButton == RIGHT) {
      MENU = 0;
      resetar();
    }
  }
}

function mouseClicked(){
  if (MENU == 0){
    if (mouseX < 360 && mouseX > 230) {
      if (mouseY < 300 && mouseY > 170) {
        MENU = 1;
        start.play();
        menu.stop();
        theme.loop();
      }
    }
  }

  if (mouseX < 185 && mouseX > 110) {
    if (mouseY < 275 && mouseY > 195) {
      MENU = 4;
    }
  }

  if (MENU == 2 || MENU == 3){
    resetar();
    MENU = 0;
    menu.loop();
  }
}
