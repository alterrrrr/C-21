var fixedRect, movingRect, fixedRect2, fixedRect3, fixedRect4, fixedRect5, newRect1, newRect2;

function setup() {
  createCanvas(1200,800);
  newRect1 = createSprite(200,200,50,80);
  newRect1.shapeColor = "green";
  newRect1.debug = true;
  newRect1.velocityX = 5
  newRect2 = createSprite(500,200,50,80);
  newRect2.shapeColor = "green";
  newRect2.debug = true;
  newRect2.velocityX = -5
  fixedRect5 = createSprite(200,400,50,80);
  fixedRect5.shapeColor = "green";
  fixedRect5.debug = true;
  fixedRect4 = createSprite(300,400,50,80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug = true;
  fixedRect3 = createSprite(400,400,50,80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  fixedRect2 = createSprite(500,400,50,80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    //fixedRect2.shapeColor = "red";
    //fixedRect3.shapeColor = "red";
   // fixedRect4.shapeColor = "red";
    //fixedRect5.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    //fixedRect2.shapeColor = "green";
    //fixedRect3.shapeColor = "green";
   // fixedRect4.shapeColor = "green";
    //fixedRect5.shapeColor = "green";
  }
  if(isTouching(movingRect,fixedRect2)){
   fixedRect2.shapeColor = "red"
   movingRect.shapeColor = "red";
   
  }else{
    fixedRect2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(newRect1,newRect2);
  drawSprites();
}
