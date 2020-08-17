//Global Variables
var bananaImage,obstacleImage,ObstaclesGroup,FoodGroup;
var score=0;
var jungle,backgrd_img;
var monkey,monkey_running;
var invisible_ground;

function preload(){
  backgrd_img=loadImage("jungle2.jpg");
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03. png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("Bananas.png");
  obstacleImage=loadImage("stone.png");
}

function setup() {
      createCanvas(600,300);
      jungle=createSprite(0,0,600,300);
      jungle.addImage("background",backgrd_img);
      jungle.scale=1.5;
      jungle.velocityX=-6;
      jungle.x=jungle.width/2;
      monkey=createSprite(50,250,10,10);
      monkey.addAnimation("monkey",monkey_running);
      monkey.scale=0.1
      FoodGroup=new Group();
      ObstaclesGroup=new Group();
      invisible_ground=createSprite(300,285,600,5);
      invisible_ground.visible=false;
      invisible_ground.velocityX=-6;
      invisible_ground.x=invisible_ground.width/2;
}

function draw(){

      background(150);

      if(jungle.x<0){
      jungle.x=jungle.width/2;
       }
  
       if(invisible_ground.x<0){
         invisible_ground.x=invisible_ground.width/2;
       }

      if(keyDown("space")){
        monkey.velocityY=-10;
      }
  
      monkey.velocityY=monkey.velocityY+0.8;
      monkey.collide(invisible_ground);
  
      if(FoodGroup.isTouching(monkey)) {
       FoodGroup.destroyEach();
       score=score+2;
     }
  
      switch(score){
       case 10:monkey.scale=0.12;
               break;
       case 20:monkey.scale=0.14;
               break;
       case 30:monkey.scale=0.18;
               break;
       default:break;        

     }
     if(ObstaclesGroup.isTouching(monkey)) {
       monkey.scale=0.07;
     }

      spawnFood();
      spawnObstacles();
  
      drawSprites();
  
      stroke("white");
      textSize(20);
      fill("white");
      text("Score:"+score,500,50);
}
function spawnFood(){
  if(frameCount%80===0){
      var banana=createSprite(600,50,10,10);
      banana.addImage(bananaImage);
      banana.scale=0.02;
      banana.velocityX=-6;
      banana.lifetime=100;
      banana.y=Math.round(random(70,140));
      FoodGroup.add(banana);
    
     }
}
function spawnObstacles(){
  if(frameCount%300===0){
      var stone=createSprite(600,250,10,10);
      stone.addImage(obstacleImage);
      stone.scale=0.15;
      stone.velocityX=-6;
      stone.lifetime=100;
      ObstaclesGroup.add(stone);
     }
}

