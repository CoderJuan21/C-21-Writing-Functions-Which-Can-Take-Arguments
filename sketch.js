var fixedRect, movingRect;

var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(200,100,50,50);
  gameobject1.shapeColor = "orange";

  gameobject2 = createSprite(400,100,50,50);
  gameobject2.shapeColor = "blue";

  gameobject3 = createSprite(600,100,50,50);
  gameobject3.shapeColor = "red";

  gameobject4 = createSprite(800,100,50,50);
  gameobject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameobject4)){
    movingRect.shapeColor = "blue";
  gameobject4.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  gameobject4.shapeColor = "green";
}

  bounceOff(movingRect,fixedRect);
  drawSprites();
}



/*var frect, mrect;

function setup() {
  createCanvas(1200,800);
  frect = createSprite(600, 400, 50, 80);
  frect.shapeColor = "green";
  mrect = createSprite(400,200,80,30);
  mrect.shapeColor = "green";

  mrect.velocityY = -5;
  frect.velocityY = 5;
}

function draw() {
  background(0);  

  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  mrect.bounceOff(frect);
  if(mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2){
    mrect.velocityX = mrect.velocityX*(-1);
    frect.velocityX = frect.velocityX*(1);
    }

    if(mrect.y-frect.y<frect.height/2+mrect.height/2
      && frect.y-mrect.y<frect.height/2+mrect.height/2){
        mrect.velocityY = mrect.velocityY*(-1);
        frect.velocityY = frect.velocityY*(1);
      }

  /*if(mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2
    && mrect.y-frect.y<frect.height/2+mrect.height/2
    && frect.y-mrect.y<frect.height/2+mrect.height/2){
    mrect.shapeColor = "red";
    frect.shapeColor = "red";
  }
  else{
    mrect.shapeColor = "green";
    frect.shapeColor = "green";
  }
  drawSprites();
}*/