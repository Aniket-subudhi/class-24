const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(240,100,50,50);
    box3 = new Box(200,200,50,50);
    box4 = new Box(240,200,50,50);
    log2 = new Log(220,150,60,PI/2);
    log = new Log(200,250,100,PI/2);

    ground = new Ground(200,height,400,20)
    pig = new Pig(280,380);
    
    bird = new Bird(50,250)
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    bird.display();
    box3.display();
    box4.display();
    log2.display();
}