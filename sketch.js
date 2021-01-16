 //namespacing
 const Engine=Matter.Engine;
 const World=Matter.World;
 const Bodies=Matter.Bodies;

var canvas;
var object,world,engine,object,ground,ball;
function setup()
{
canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var objects_options={ isStatic: true}
var ground_options={ isStatic: true}
var ball_options={ 'restitution' : 1}

object=Bodies.rectangle(200,100,50,50,objects_options);
World.add(world,object);

console.log(object);

ground=Bodies.rectangle(200,390,20,20,ground_options);
World.add(world,ground);
//console.log(object.type);
//console.log(object.position.x);
//console.log(object.position.y);

ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);


}


function draw()
{
background("gold");
Engine.update(engine);
rectMode(CENTER);
ellipseMode(RADIUS);
//rect(200,200,50,50);
rect(object.position.x,object.position.y,50,50);
rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,20,20);



}