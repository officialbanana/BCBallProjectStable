
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var dustbin;
var groundObj;
var sideObj, sideObj2;
var topObj;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	dustbin = new dustBin("TEST");
	Engine.run(engine);
	groundObj = Matter.Bodies.rectangle(width/2, height-10, width, 10,{isStatic:true})
	World.add(world,groundObj);
	topObj = Matter.Bodies.rectangle(width/2, 9, width, 10,{isStatic:true})
	World.add(world,topObj)
	sideObj = Matter.Bodies.rectangle(0,350,10,height,{isStatic:true})
	World.add(world,sideObj);
	sideObj2 = Matter.Bodies.rectangle(width,350,10,height,{isStatic:true})
	World.add(world,sideObj2)
	var groundSprite=createSprite(width/2, height-9, width,10);
	groundSprite.shapeColor=color(255)
	ball = new Ball(30,660,70);
}


function draw() {
  rectMode(CENTER);
  background(240);
  ball.display();
  dustbin.display();
  drawSprites();
  
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:320,y:-245})
	  console.log("up key is pressed")
	  
	}
	if (keyCode===LEFT_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-10,y:1})
		  console.log("Left arrow Pressed")
		  
		}
		if (keyCode===RIGHT_ARROW) {
			Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-245})
			  console.log("up key is pressed")
			  
			}
			if (keyCode===DOWN_ARROW) {
				Matter.Body.setPosition(ball.body,{x:30,y:680})

				  
				}
  }

 