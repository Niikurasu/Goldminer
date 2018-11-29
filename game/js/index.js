let grassHeight = 50;
var player;
var goldCoins = [];
let numberCoins = 2;
function setup() {
  createCanvas(1000, 600);
  noStroke();
  player = new Player();
  for (var i = 0; i < numberCoins; i++) {
    goldCoins[i] = new Coin();
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

  // Chech for collisions
  mineGoldCollisionCheck();
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
