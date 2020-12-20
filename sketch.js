
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

class bob();
bobObject1
bobObject2
bobObject3
bobObject4
bobObject5

class roof;

class rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

constructor(body1, body2, offsetX, offsetY)
{
	this.offsetX = offsetX
	this.offsetY = offsetY

	var options={
		bodyA: body1
		bodyB: body2
		pointB: {x: this.offsetX, y: this.offsetY}
	}
	//console.log(options);
	this.rope = Constraint.create(options)
	World.add(world, this.rope)
}