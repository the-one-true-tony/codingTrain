var song;
var sliderPan;
var sliderRate;

function preload(){
}
function setup(){
  createCanvas(200,200);
  song = loadSound('hey.mp3', loaded);
  sliderPan = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);
}

function loaded() {
  song.play();
}

function draw(){
  background(0);
  song.setVolume(sliderPan.value());
  song.rate(sliderRate.value());
}
