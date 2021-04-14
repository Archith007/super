const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird; 
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305,10000, 20);

    box1 = new Box(700,150,70,70);
    box2 = new Box(700,100,70,70);
    box3 = new Box(700,50,70,70);
    
    pig1 = new Pig(810, 150,100,100);
    


    bird = new Bird(200,300);

    //log6 = new Log(230,180,80, PI/2);
    Slingshot= new Slingshot(bird.body,{x:200,y:100});
}

function draw(){
    background("orange");
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    pig1.display();
    box1.display()
    box2.display()
    box3.display()

    bird.display();
    platform.display();
    //log6.display();
    Slingshot.display();  

     
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}


