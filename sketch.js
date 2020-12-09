
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob(400,450,70);
	bob2=new Bob(330,450,70);
	bob3=new Bob(260,450,70);
	bob4=new Bob(470,450,70);
	bob5=new Bob(540,450,70);
	ground = Bodies.rectangle(400,250,200,30,{isStatic: true});
	rope1= new Rope(bob1.body, ground, -140*2, 0);
	rope2=new Rope(bob2.body,ground,-140*2,0);
	rope3= new Rope(bob3.body, ground, -140*2, 0);
	rope4=new Rope(bob4.body,ground,-140*2,0);
	rope5=new Rope(bob5.body,ground,-140*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  rectMode(CENTER);
  ground=rect(400,250,300,30);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}



