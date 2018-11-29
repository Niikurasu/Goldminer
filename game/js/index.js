let grassHeight = 50;
var player;
function setup() {
  createCanvas(1000, 600);
  noStroke();
  player = new Player()
}

function draw() {
  background(100, 175, 255); // light blue backgrond
  // draw grass
  fill(124, 204, 25); // color of grass
  rect(0, height-grassHeight, width, height); // height of grass = 50px
  // draw Player
  player.update();
  player.show();
}




class Player {
  constructor() {
    this.width = 135;
    this.height = 80;
    this.y = height - grassHeight - this.height;
    this.x = width/2 - this.width/2;
    this.velocity = 10;
    this.isJumping = false;
    this.gravity = 15;
    this.maxY = 300;
  }

  update() {
     this.checkKeys()
     this.placeInBorder()
     this.jump()
  }

  show() {
    fill(128, 128, 128) // grey color
    rect(this.x, this.y, this.width, this.height) // for the beginning the player is a rectangle, change to picture!
  }

  placeInBorder() {
    if(this.x < 0) this.x = 0;
    if(this.x+this.width > width) this.x = width-this.width;
  }

  checkKeys() {
    // Check keys
    if(keyIsDown(LEFT_ARROW)) { // left
      if(this.x > 0) {
        this.x -= this.velocity
      }
    } else if (keyIsDown(RIGHT_ARROW)) { // right
      if(this.x < width) {
        this.x += this.velocity
      }
    } else if (keyIsDown(UP_ARROW)) {
      if(this.y == height - grassHeight - this.height) {
        this.isJumping = true;

    }

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


}
