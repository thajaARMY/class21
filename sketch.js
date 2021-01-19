var fixedRect, movingRect;
var newRect;
function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 300, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  newRect = createSprite(100 ,100 ,40 ,50);
  newRect.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
     movingRect.shapeColor = "red";
     fixedRect.shapeColor = "red";
    
  }
  else if(isTouching(movingRect,newRect)){
    movingRect.shapeColor = "blue";
    newRect.shapeColor = "blue";
 }
   else{
     movingRect.shapeColor = "green";
     fixedRect.shapeColor = "green";
     newRect.shapeColor = "green";
  }
  drawSprites();
}
//obj1 as movingRect and obj2 as any fixedRect


