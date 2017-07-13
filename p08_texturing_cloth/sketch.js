var img;

function setup(){
  createCanvas(600,400, WEBGL);
  img = loadImage('./cats.jpg');
}

function draw(){
  background(51);
  stroke(255);
  fill(127);
  beginShape();
  texture(img);
    vertex(200,200, 0, 0);
    vertex(300,200, 600, 0);
    vertex(300,300, 600, 600);
    vertex(200,300, 0, 600);
  endShape(CLOSE);
}
