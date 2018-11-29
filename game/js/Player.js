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
    this.img = loadImage("img/cart.png");
  }

  update() {
     this.placeInBorder()
     this.jump()
     this.move();
  }

  show() {
    // fill(128, 128, 128) // grey color
    // rect(this.x, this.y, this.width, this.height) // for the beginning the player is a rectangle, change to picture!
    image(this.img, this.x, this.y)
  }

  placeInBorder() {
    if(this.x < 0) this.x = 0;
    if(this.x+this.width >= width-5) this.x = width-this.width-5;
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
