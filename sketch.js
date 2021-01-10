const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var boyI
var tree,treeI
var stone,stoneI
var m1,m2,m3,mangoI
var ground
var launcher

function preload()
{
boyI=loadImage("boy.png")	
mangoI=loadImage("mango.png")
treeI=loadImage("tree.png")
stoneI=loadImage("stone.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree=new Tree(1050,340,50,40);
ground=new Ground(600,height,1300,20);
stone= new Stone(235,420,10)
m1=new Mango(1100,250,30)
m2=new Mango(1200,300,30)
m3=new Mango(1010,185,30)
launcher=new Rope(stone.body,{x:260,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boyI,200,340,340,340)
  tree.display();
  ground.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  launcher.display();
  collision(stone,m1)
  collision(stone,m2)
  collision(stone,m3)
}

function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keycode===32){
body.setPosition(stone.body,{x:235,y:420})
launcher.attach(stone.body)
	}
}

function collision(s,m){
	mBody=m.body.position
sBody=s.body.position  
var distance=dist(sBody.x,sBody.y,mBody.x,mBody.y)
if(distance<=m.radius+s.radius){
	Body.setStatic(m.body,false)
}
}