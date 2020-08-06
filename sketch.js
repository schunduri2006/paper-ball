
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  box1 = new Box(600,650,200,20);
  box2 = new Box(500,610,20,100);
  box3 = new Box(700,610,20,100);
  ground = new Ground(200,670,2000,20);
  paper1 = new Paper(40,640,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
box2.display();
box3.display();
ground.display();
paper1.display();
 
  drawSprites();
}



function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:34,y:-34});
}
}