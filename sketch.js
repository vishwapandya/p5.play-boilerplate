var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(400,300,50,80);
  movingRect.shapeColor = "blue"
  movingRect.debug = true;

}

function draw() {
  background("black");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  } else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  drawSprites();
}
