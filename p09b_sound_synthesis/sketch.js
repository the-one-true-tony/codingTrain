var wave;
var button;
var slider;
var playing = false;
let freq;
let env;

function setup(){
  createCanvas(200,200);
  button = createButton("play/pause")
  slider = createSlider(0, 1, 0, 0.01)

  env = new p5.Env();
  env.setADSR(0.05, 0.1, 0.5, 0.5);
  env.setRange(1.2, 0);
  button.mousePressed(toggle);
  wave = new p5.Oscillator();

}

function toggle(){

  env.play();
  // if (!playing){
  //   wave.start();
  //   wave.amp(0.5,1);
  //   playing = true;
  // } else {
  //   wave.amp(0,1)
  //   // wave.stop();
  //   playing = false;
  // }
}

function draw(){
  playing ? background(255, 0, 255) : background(51);
  freq = map(slider.value(), 0, 1, 100, 500);
  // wave.amp(1);
  wave.setType('sine');
  wave.start();
  wave.freq(400);
  wave.amp(env);

}
