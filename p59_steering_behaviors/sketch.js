var font;
var vehicles = [];

function preload() {
  font = loadFont('SnackerComic.ttf')
}

// steering = desire - velocity
// this allows for more realistic movements
function setup() {
  createCanvas(800, 500);
  background(51);
  // textFont(font);
  // textSize(158);
  // fill(255);
  // noStroke();
  // text('train', 75, 200);

  var points = font.textToPoints('Mana', 85, 350, 400);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  console.log(vehicles.length);
}

function draw(){
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
