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
}

function keyPressed() {
  player.checkIfPressed()
}

function keyReleased() {
  player.checkifDown()
}



class Player {
  constructor() {
    this.width = 135;
    this.height = 80;
    this.y = height - grassHeight - this.height;
    this.x = width/2 - this.width/2;
    this.velocity = 10;
    this.isJumping = false;
    this.gravity = 11;
    this.maxY = 300;
    this.moveLeft = false;
    this.moveRight = false;
  }

  update() {
     this.placeInBorder()
     this.jump()
     this.move();
  }

  show() {
    fill(128, 128, 128) // grey color
    rect(this.x, this.y, this.width, this.height) // for the beginning the player is a rectangle, change to picture!
  }

  placeInBorder() {
    if(this.x < 0) this.x = 0;
    if(this.x+this.width > width) this.x = width-this.width;
  }

  checkIfPressed() {
    // Check keys
    if(keyCode == LEFT_ARROW) { // left
      if(this.x > 0) {
        this.moveLeft = true;
      }
    } else if (keyCode == RIGHT_ARROW) { // right
      if(this.x < width) {
        this.moveRight = true;
      }
    } else if (keyCode == UP_ARROW) {
      if(this.y == height - grassHeight - this.height) {
        this.isJumping = true;

    }
    }
  }

  checkifDown() {
    if(keyCode == LEFT_ARROW) { // left
      this.moveLeft = false;
    } else if (keyCode == RIGHT_ARROW) { // right
      this.moveRight = false;
    }
  }

  jump() {
    if(this.isJumping) {
      this.y -= this.gravity;
      if(this.y < this.maxY) this.isJumping = false;
      console.log(this.y)
    } else {
      if(this.y < height-grassHeight-this.height) this.y += this.gravity;
    }
  }

    move() {
      if (this.moveLeft) {
        this.x -= this.velocity
      } else if (this.moveRight) {
        this.x += this.velocity
      }
    }


}

class Coin {

  constructor() {
    this.width = 20;
    this.height = 20;
    this.x = random(width-this.width);
    this.y = -500 - random(2000);
    this.gravity = 10
  }

  update() {
    this.y += 10;

    if(this.y > height) this.reset();
  }

  show() {
    fill(255, 215, 0) // Gold color
    rect(this.x, this.y, this.width, this.height)

  }

  reset() {
    this.y = -500 - random(2000);
    this.x = random(width-this.width);
  }

}
