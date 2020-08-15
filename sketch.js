
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1;
var line1;
var line2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(width/2,400,width,10);

	 dustbin1=new Dustbin ();
	 paper = new Paper();
	 line1=new Line(450,600,20,100);
	 line2=new Line(350,600,20,100);
	
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  ground.display();
  dustbin1.display();
  paper.display();
 
line1.display();
line2.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-300});
	}
}



