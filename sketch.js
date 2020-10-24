const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;
var divisionsHeight = 300;
var division1, division2, division3, division4, division5;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 790, 480, 20);
  division1 = new Division(80, 630 , 10, 300);
  division2 = new Division(160, 630 , 10, 300);
  division3 = new Division(240, 630 , 10, 300);
  division4 = new Division(320, 630 , 10, 300);
  division5 = new Division(400, 630 , 10, 300);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }



  Engine.run(engine);
}

function draw() {
  background(0); 
  Engine.update(engine);

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();

 
  
  

  drawSprites();
}
