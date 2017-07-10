let training = new Array(2000);
let ptron;
let count = 0;

let xmin = -1;
let ymin = -1;
let xmax = 1;
let ymax = 1;

let f = (x) => {
  var y = 0.3 * x + 0.4;
  return y;
};

function setup(){
  createCanvas(800,800);

  ptron = new Perceptron(3, 0.01);

  for (let i = 0; i < training.length; i++) {
    let x = random(xmin, xmax);
    let y = random(ymin, ymax);
    let bais = 1;
    if (y < f(x)) bais = -1;
    training[i] = {
      input: [x, y, 1],
      output: bais
    };
  }
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);
  let x1 = map(xmin, xmin, xmax, 0, width);
  let x2 = map(xmax, xmin, xmax, 0, width);
  let y1 = map(f(xmin), ymin, ymax, height, 0);
  let y2 = map(f(xmax), ymin, ymax, height, 0);
  line(x1, y1, x2, y2);
  stroke(255);
  strokeWeight(2);

  // Draw the line based on the current weights
  // Formula is weights[0]*x + weights[1]*y + weights[2] = 0
  let weights = ptron.getWeights();
  x1 = xmin;
  x2 = xmax;
  y1 = (-weights[2] - weights[0]*x1) / weights[1];
  y2 = (-weights[2] - weights[0]*x2) / weights[1];

  x1 = map(x1, xmin, xmax, 0, width);
  x2 = map(x2, xmin, xmax, 0, width);
  y1 = map(y1, ymin, ymax, height, 0);
  y2 = map(y2, ymin, ymax, height, 0);

  line(x1, y1, x2, y2);

  ptron.train(training[count].input, training[count].output);
  count = (count + 1) % training.length;

  for (var i = 0; i < count; i++) {
    stroke(255);
    strokeWeight(1);
    fill(255);
    let guess = ptron.feedforward(training[i].input);
    if(guess > 0) noFill();
    let x = map(training[i].input[0], xmin, xmax, 0, width);
    let y = map(training[i].input[1], ymin, ymax, height, 0);
    ellipse(x, y, 8, 8);
  }
}
