var song;
var slider;

function preload(){
}
function setup(){
  createCanvas(200,200);
  song = loadSound('hey.mp3', loaded);
  slider = createSlider(0, 1, 0.5, 0.01);
}

function loaded() {
  song.play();
}

function draw(){
  background(0);
  song.setVolume(slider.value());
}
