var PLAY = 1;
var END = 0;
var gameState = PLAY;
var forest, forestImg; 
var car, carImg; 
var bomb, bombImg, bombGroup;
var zombie1, zombie1Img, zombie1Group; 
var score = 0;
var gameOver,gameOverImg;
function preload(){
    forestImg = loadImage("edit img/forestjpg.jpg");
    carImg = loadImage("edit img/red car edit.png");
    bombImg = loadImage("edit img/bomb edit 2.png");
    zombie1Img = loadImage("edit img/zombie edit.png");
    gameOverImg = loadImage("edit img/gameOver.png");
}



function setup(){
    createCanvas(1000,600);
    forest = createSprite(1000,300);
    forest.addImage(forestImg);
    forest.velocityX = -6;
    forest.scale = 2.3;
     
    
    
    car = createSprite(200,550);
    car.addImage(carImg);
    car.scale = 0.3;

    zombie1Group = new Group;
     bombGroup  = new Group;


     
edges = createEdgeSprites();
     score = 0;
stroke("red");
fill("red");
textSize(20);

}

function draw(){
    background(0);

   if(forest.x < 0){
            forest.x = 100;
        }
        
if(keyDown("space")){
  bomb = createSprite(car.x,car.y);
  bomb.addImage(bombImg);
  bomb.velocityX = 5;
  bombGroup.add(bomb);
  bomb.scale = 0.1;

}


if(bombGroup.isTouching(zombie1Group)){
  zombie1Group[0].destroy();
  bombGroup[0].destroy();
  score = score+25;
  bomb.visible = false;
}

if(zombie1Group.isTouching(car)){
  zombie1Group.setVelocityXEach(0);
  zombie1Group.setVisibleEach(false);
  forest.velocityX=0;
  car.velocityX =0;

  gameOver = createSprite(400,150);
 gameOver.addImage(gameOverImg);
 gameOver.scale = 0.5;
  
}
       
 spawnzombies();
    drawSprites();
    text("Score: " + score, 300, 50);
}




function spawnzombies(){
    if(frameCount % 150 === 0){
    zombie1 = createSprite(900,500);
    //zombie1.x = Math.round(random(10,10));
    zombie1.addImage(zombie1Img);
    zombie1.scale = 0.3;
    zombie1.velocityX = -(6+score/100);
    //zombie1.x = Math.round(random(1100,500));
    zombie1Group.add(zombie1);
    zombie1Group.lifetime = 150;
 
   
    }
   
}

 












