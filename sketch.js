
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1, dust2, dust3, ground;
var paper1, groundBody;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundBody = Bodies.rectangle(800,390,1600,10,{isStatic:true});
    World.add(world,groundBody);

	
	paper1 = new Paper(350,350,20)
	paper1.scale = 0.5;
	dust1 = new Dustbin(1300,270,70,100);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
   paper1.show();
  dust1.visible();
  
  
  rect(groundBody.position.x,groundBody.position.y,1600,10);

  if(keyDown(UP_ARROW)){
	  UpArrow();
  }
  if(paper1.x >= 1200 && paper1.y <=270){
	  paper1.hide();
  }
  console.log(paper1.x);
  drawSprites();
 
}

function UpArrow(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});
		}
}

