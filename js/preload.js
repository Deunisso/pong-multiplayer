let menu;
let theme;
let hit;
let score;
let start;
let victory;
let awesome;
let nice;

let menuImage;
let menuImage2;

function preload(){
  arcadeFont = loadFont('media/arcade.ttf');
  bold = loadFont('media/bold.otf');
  
  menu = loadSound('media/menu.mp3');
  theme = loadSound('media/theme.mp3');
  hit = loadSound('media/hit.mp3');
  score = loadSound('media/score.mp3');
  start = loadSound('media/start.mp3');
  victory = loadSound('media/victory.mp3');
  awesome = loadSound('media/awesome.wav');
  nice = loadSound('media/nice.wav');

  menuImage = loadImage('media/menu.png');
  menuImage2 = loadImage('media/menu2.png');

  menu.setVolume(0.2);
  theme.setVolume(0.15);
  hit.setVolume(0.2);
  score.setVolume(0.2);
  start.setVolume(0.2);
  victory.setVolume(0.2);
  awesome.setVolume(0.2);
  nice.setVolume(0.2);
}

function amplification(){
  if (keyIsDown(97) || (keyIsDown(49))){
    menu.setVolume(0.1);
    theme.setVolume(0.05);
    hit.setVolume(0.1);
    score.setVolume(0.1);
    start.setVolume(0.1);
    victory.setVolume(0.1);
    awesome.setVolume(0.1);
    nice.setVolume(0.1);
  }

  if (keyIsDown(98) || (keyIsDown(50))){
    menu.setVolume(0.2);
    theme.setVolume(0.15);
    hit.setVolume(0.2);
    score.setVolume(0.2);
    start.setVolume(0.2);
    victory.setVolume(0.2);
    awesome.setVolume(0.2);
    nice.setVolume(0.2);
  }

  if (keyIsDown(99) || (keyIsDown(51))){
    menu.setVolume(0.3);
    theme.setVolume(0.25);
    hit.setVolume(0.3);
    score.setVolume(0.3);
    start.setVolume(0.3);
    victory.setVolume(0.3);
    awesome.setVolume(0.3);
    nice.setVolume(0.3);
  }

  if (keyIsDown(100) || (keyIsDown(52))){
    menu.setVolume(0.4);
    theme.setVolume(0.35);
    hit.setVolume(0.4);
    score.setVolume(0.4);
    start.setVolume(0.4);
    victory.setVolume(0.4);
    awesome.setVolume(0.4);
    nice.setVolume(0.4);
  }

  if (keyIsDown(101) || (keyIsDown(53))){
    menu.setVolume(0.5);
    theme.setVolume(0.45);
    hit.setVolume(0.5);
    score.setVolume(0.5);
    start.setVolume(0.5);
    victory.setVolume(0.5);
    awesome.setVolume(0.5);
    nice.setVolume(0.5);
  }

  if (keyIsDown(102) || (keyIsDown(54))){
    menu.setVolume(0.6);
    theme.setVolume(0.55);
    hit.setVolume(0.6);
    score.setVolume(0.6);
    start.setVolume(0.6);
    victory.setVolume(0.6);
    awesome.setVolume(0.6);
    nice.setVolume(0.6);
  }

  if (keyIsDown(103) || (keyIsDown(55))){
    menu.setVolume(0.7);
    theme.setVolume(0.65);
    hit.setVolume(0.7);
    score.setVolume(0.7);
    start.setVolume(0.7);
    victory.setVolume(0.7);
    awesome.setVolume(0.7);
    nice.setVolume(0.7);
  }

  if (keyIsDown(104) || (keyIsDown(56))){
    menu.setVolume(0.8);
    theme.setVolume(0.75);
    hit.setVolume(0.8);
    score.setVolume(0.8);
    start.setVolume(0.8);
    victory.setVolume(0.8);
    awesome.setVolume(0.8);
    nice.setVolume(0.8);
  }

  if (keyIsDown(105) || (keyIsDown(57))){
    menu.setVolume(0.9);
    theme.setVolume(0.85);
    hit.setVolume(0.9);
    score.setVolume(0.9);
    start.setVolume(0.9);
    victory.setVolume(0.9);
    awesome.setVolume(0.9);
    nice.setVolume(0.9);
  }

  if (keyIsDown(96) || (keyIsDown(48))){
    menu.setVolume(0);
    theme.setVolume(0);
    hit.setVolume(0);
    score.setVolume(0);
    start.setVolume(0);
    victory.setVolume(0);
    awesome.setVolume(0);
    nice.setVolume(0);
  }
}
