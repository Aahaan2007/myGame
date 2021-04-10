var backgroundImg;
var spaceshipImg;
var alien;
var alienImg;
var shoot;
var flag = 0;
var alienGrp;
var shootGrp;

function preload(){
  backgroundImg=loadImage("images/space.jpg");
  spaceshipImg=loadImage("images/spaceship.png");
  alienImg=loadImage("images/alien.png");
  bulletImg=loadImage("images/bullet.png");
}

function setup() {
  createCanvas(600, 600);
  spaceship=createSprite(300, 500, 50, 50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale=0.1
  alienGrp=new Group();
  shootGrp=new Group();
}

function draw() {
  background(backgroundImg);  
  if(keyDown(LEFT_ARROW)){
    spaceship.x -= 5
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x += 5
  }
  if(keyWentDown("space")&& flag===0){
    Shoot();
    flag = 1;
  }

  if(keyWentUp("space")){
    flag=0;
  }
  spawnAliens();

  //destroying bullet and alien
for(var i=0; i<alienGrp.length;i++){
  for(var j=0;j<shootGrp.length;j++){
    if(shootGrp.get(j).isTouching(alienGrp.get(i))){
      shootGrp.get(j).destroy();
      alienGrp.get(i).destroy();
    }
  }
}

  drawSprites();
}

 setInterval(call, 500);
 function call(){
   flag = 0
 }
function Shoot(){
  shoot=createSprite(spaceship.x, spaceship.y, 10, 10);
  shoot.addImage(bulletImg);
  //shoot.debug = true;
  shoot.scale=0.1
  shoot.velocityY=-5;
  shoot.lifetime=100;
  shootGrp.add(shoot);
}

function spawnAliens(){
  if(frameCount%100===0){
  alien=createSprite(random(50, 550), -50, 20, 20);
  alien.addImage(alienImg);
  //alien.debug=true; 
  alien.setCollider("circle", 0, 0, 340);
  alien.scale=0.1;
  alien.velocityY=3;
  alien.lifetime=200;
  alienGrp.add(alien);
  }
}