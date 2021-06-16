var garden, gardenImg;
var cat;
var mouse;

function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    cat = loadImage("cat1.png");
    mouse = loadImage("mouse1.png");
    catImg1 = loadImage("cat2.png","cat3.png");
    mouseImg1 = loadImage("mouse2.png","mouse3.png");
    catImg2 = loadImage("cat4.png");
    mouseImg2 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = craeteSprite(500,400);
    garden.addImage(gardenImg);
    tom = craeteSprite(850,500,30,30);
    tom.addImage(cat);
    tom.scale=0.2;
    jerry = craeteSprite(200,500,10,10);
    jerry.addImage(mouse);
    jerry.scale=0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if(tom.x - jerry.x < (tom.width - jerry.width)/2){
   jerry.addAnimation("mouseSmiling", mouse);
   jerry.changeAnimation("mouseSmiling");
   tom.addAnimation("catSmiling", catImg2);
   tom.changeAnimation("catSmiling");
   tom.velocityX = 0;
}
    
    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
   jerry.addAnimation("mouseTeasing", mouseImg1);
   jerry.changeAnimation("mouseTeasing");
   jerry.frameDelay=25;
   tom.addAnimation("catWalking", catImg1);
   tom.changeAnimation("catWalking");
   tom.velocityX = tom.velocityX - 10;
}

}
