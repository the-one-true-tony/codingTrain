var wave;
var button;
var slider;
var playing = false;
let freq;
function setup(){
  createCanvas(200,200);
  button = createButton("play/pause")
  slider = createSlider(0, 1, 0, 0.01)
  button.mousePressed(toggle);
  wave = new p5.Oscillator();
  wave.setType('sine');
}

function toggle(){
  if (!playing){
    wave.start();
    wave.amp(0.5,1);
    playing = true;
  } else {
    wave.amp(0,1)
    // wave.stop();
    playing = false;
  }
}

function draw(){
  playing ? background(255, 0, 255) : background(51);
  freq = map(slider.value(), 0, 1, 100, 500);
  // wave.amp(1);
  wave.freq(freq);

}
