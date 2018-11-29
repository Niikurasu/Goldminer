class Coin {

  constructor() {
    this.width = 40;
    this.height = 40;
    this.x = random(width-this.width);
    this.y = -1500 - random(2000);
    this.gravity = 10
    this.img = loadImage("img/coin.png");
  }

  update() {
    this.y += 10;

    if(this.y > height) this.reset();
  }

  show() {
    // fill(255, 215, 0) // Gold color
    // rect(this.x, this.y, this.width, this.height)
    image(this.img, this.x, this.y);

  }

  reset() {
    this.y = -500 - random(2000);
    this.x = random(width-this.width);
  }

  collided() {
    // ADD FUTURE POOINTS
    console.log("HIT!!!")
    score+=1;
    this.reset();
  }

}
