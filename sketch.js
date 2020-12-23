const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var box;

function setup() {
  createCanvas(800,400);
 //my own engine
  engine= Engine.create();
  //my own world
  world=engine.world;


 

    
   box1 = new Box(200,300,50,50);
   box2 = new Box(220,100,50,100);
   ground = new Ground(400,350,800,50);


}

function draw() {
  background(0);  

  Engine.update(engine)

  box1.display();
  box2.display();
  ground.display();

 
 
  //rect(box.position.x,box.position.y,100,50);
  
}