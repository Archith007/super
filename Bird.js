class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,200,100);
    this.image = loadImage("sprites/6758266_preview.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}
