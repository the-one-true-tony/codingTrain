//module aliases
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;
  // Render = Matter.Render,

var engine;
var box1;
var world;
var ground;
var boxes = [];
var boundaries = [];

function mouseDragged(){
  boxes.push(new Box(mouseX, mouseY, 20, 20))
}

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  // Engine.run(engine);
  boundaries.push(new Boundary(150, 300, width*.6, 20, .3));
  boundaries.push(new Boundary(250, 150, width*.6, 20, -0.3));
  // World.add(world, ground);

}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
}
