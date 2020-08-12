const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;
  //ground = new Ground(600,height,1200,20);
  stand1 = new Ground(600,height,400,25);
  block1 = new Block(120,235,30,40);
  block2 = new Block(150,235,30,40);
  block3 = new Block(180,235,30,40);
  block4 = new Block(210,235,30,40);
  block5 = new Block(240,235,30,40);
  block6 = new Block(270,235,30,40);
  block7 = new Block(300,235,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);

}

function draw() {
  background(255,255,255); 
  //ground.display();
  stand1.display();
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
  
  drawSprites();
} 