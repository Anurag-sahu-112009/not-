const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  ground = new Ground(600,300,100,20)
}

function draw() {
  background(2,2,5); 
  ground.display(); 
  drawSprites();
}