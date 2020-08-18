var ground1;

function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);

  ground1 = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255);  
ground.display();




  drawSprites();
}