var song;
var button;
var sliderPan;
var sliderRate;

function preload(){
}
function setup(){
  createCanvas(200,200);
  song = loadSound('hey.mp3', loaded);
  button = createButton("pause");
  sliderPan = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);
  button.mousePressed(togglePlaying);
}

function togglePlaying() {
  if(!song.isPlaying()){
    song.play();
    button.html("pause")
  } else {
    button.html("play")
    song.pause();
  }
}

function loaded() {
  song.play();
}

function draw(){
  background(random(), random(), random());
  song.setVolume(sliderPan.value());
  song.rate(sliderRate.value());
}
