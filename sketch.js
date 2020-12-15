const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;

var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

var polygon;

var sling;

var score=0;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
 

  
  stand1 = new Ground(400,280,130,10);
  stand2 = new Ground(600,200,160,10);

  //level1
  block1 = new Block(540,175,30,40);
  block2 = new Block(570,175,30,40);
  block3 = new Block(600,175,30,40);
  block4 = new Block(630,175,30,40);
  block5 = new Block(660,175,30,40);
  //level 2
  block6 = new Block(570,135,30,40);
  block7 = new Block(600,135,30,40);
  block8 = new Block(630,135,30,40);
  //level3
  block9 = new Block(600,95,30,40);

 //level1
  block10 = new Block(355,255,30,40);
  block11 = new Block(385,255,30,40);
  block12 = new Block(415,255,30,40);
  block13 = new Block(445,255,30,40);
  //level2
  block14 = new Block(385,215,30,40);
  block15 = new Block(415,215,30,40);
  //level3
  block16 = new Block(400,175,30,40);

  polygon = new Polygon(150,300,50,50);

  sling = new SlingShot(polygon.body,{x:43, y:300});

  
 
  
 

}

function draw() {
  background("brown"); 
  Engine.update(engine);

  textSize(20);
  fill(255);
  text ("Score: " +score ,250,50);
  
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  polygon.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  
  block5. score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  
 

 
  stand1.display();
  stand2.display();

  fill("red");
  sling.display();

  

  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
      sling.attach(polygon.body);
  }
}

      

async function getSceneImg(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var JSONresponse=await response.json();
  var dayTime=JSONresponse.datetime;
  var hour=dayTime.slice(11,13);
  if(hour>=06&&hour<=16){
    background("brown"); 
  }
  else{
    background("yellow");
  }

}




