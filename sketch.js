var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 50);
  fixedRect.velocityY=3;
  movingRect = createSprite(600,700,60,40);
  movingRect.velocityY=-3

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

function draw() {
  background(0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2) {
      fixedRect.velocityX=(-1)*fixedRect.velocityX;
      movingRect.velocityX=(-1)*movingRect.velocityX;
    //fixedRect.shapeColor = "red";
    //movingRect.shapeColor = "red"; 
  }//else {
    //fixedRect.shapeColor = "green";
    //movingRect.shapeColor = "green";
  //}
  if (fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
      fixedRect.velocityY=(-1)*fixedRect.velocityY;
      movingRect.velocityY=(-1)*movingRect.velocityY;
  }
  drawSprites();
}