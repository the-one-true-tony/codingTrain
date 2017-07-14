var wave;

function setup(){
  createCanvas(200,200);
  wave = p5.Oscillator();
  wave.setType('sine');
  wave.amp(1);
  wave.freq(300);
  wave.start();
}

function draw(){
  background(51);
}
