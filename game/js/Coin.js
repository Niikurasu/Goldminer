class Coin {

  constructor() {
    this.width = 20;
    this.height = 20;
    this.x = random(width-this.width);
    this.y = -1500 - random(2000);
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

  collided() {
    // ADD FUTURE POOINTS
    console.log("HIT!!!")
    this.reset();
  }

}
