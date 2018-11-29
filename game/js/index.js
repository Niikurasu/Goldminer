let grassHeight = 50;
var player;
var goldCoins = [];
var enemies = [];
var numberEnemies=4;
let numberCoins = 2;

var score = 0

function setup() {
  frameRate(60);
  createCanvas(1000, 600);
  noStroke();

  player = new Player();
  for (var i = 0; i < numberCoins; i++) {
    goldCoins[i] = new Coin();
  }

  for (var i = 0; i < numberEnemies; i++) {
    enemies[i] = new Enemy();
  }

}

function draw() {
  background(100, 175, 255); // light blue backgrond
  // draw grass
  fill(124, 204, 25); // color of grass
  rect(0, height-grassHeight, width, height); // height of grass = 50px
  // draw Player
  player.update();
  player.show();

  for (var i = 0; i < goldCoins.length; i++) {
    goldCoins[i].show();
    goldCoins[i].update();
  }
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].show();
    enemies[i].update();
  }

  // Chech for collisions
  mineGoldCollisionCheck();
  mineEnemyCollisionTest();
  drawScore();
}

function keyPressed() {
  player.checkIfPressed()
}

function keyReleased() {
  player.checkifDown()
}


function mineGoldCollisionCheck() {
  for (var i = 0; i <goldCoins.length; i++) {
    //check for collision with cart
    // goldcoins = 1, player = 2
    // 1. linke seite von 1 ist mehr links als rechte seite von 2
    // 2. rechte seite von 1 ist mehr rechts als linke seite von 2
    // 3. obere seite von 1 ist höher als untere seite von 2
    // 4. untere seite von 1 ist niedriger als obere seite von 2
    if(goldCoins[i].x < player.x + player.width) {
      if(goldCoins[i].x + goldCoins[i].width > player.x) {
        if(goldCoins[i].y < player.y + player.height) {
          if(goldCoins[i].y + goldCoins[i].height > player.y) {
            goldCoins[i].collided();
            // SCORE
          }
        }
      }
    }
  }
}



function mineEnemyCollisionTest() {
  for (var i = 0; i <enemies.length; i++) {
    //check for collision with cart
    // goldcoins = 1, player = 2
    // 1. linke seite von 1 ist mehr links als rechte seite von 2
    // 2. rechte seite von 1 ist mehr rechts als linke seite von 2
    // 3. obere seite von 1 ist höher als untere seite von 2
    // 4. untere seite von 1 ist niedriger als obere seite von 2
    if(enemies[i].x < player.x + player.width) {
      if(enemies[i].x + enemies[i].width > player.x) {
        if(enemies[i].y < player.y + player.height) {
          if(enemies[i].y + enemies[i].height > player.y) {
            enemies[i].collided();
            // SCORE
          }
        }
      }
    }
  }
}



function drawScore() {
  textSize(34);
  fill(28);
  text("Score: " + score, 20, 50)
}
