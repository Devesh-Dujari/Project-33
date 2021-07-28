const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var snow = [];

function preload() {

  bgImg = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;


}

function draw() {
  background(bgImg);  

  Engine.update(engine);

  //create particle objects
  if(frameCount % 20 === 0)
  {
    snow.push(new Snow(random(-10, 610), -10, 10));
   }

   //display the paricles 
  for(var j = 0; j < snow.length; j++)
  {
    snow[j].display();
  }

  drawSprites();
} 