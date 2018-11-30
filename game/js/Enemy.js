class Enemy {
  constructor() {
    this.width = 80;
    this.height = 80;
    this.x = random(width-this.width);
    this.y = -1500 - random(2000);
    this.gravity = 10
    this.img = loadImage("img/bomb.png")
  }

  update() {
    this.gravity= 10 + score/3;
    this.y = this.y + this.gravity
    if(this.y > height) this.reset();
  }

  show() {
    // fill(255, 0, 0) // Gold color
    // rect(this.x, this.y, this.width, this.height)
    image(this.img, this.x, this.y);


  }

  reset() {
    this.y = -1000 - random(10000);
    this.x = random(width-this.width);
  }

  collided() {
    // ADD FUTURE POOINTS
    alert("You lost! You scored " + score + " points");
    setup();
  }
}
