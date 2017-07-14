var song;
var button;
var sliderPan;
var sliderRate;
var amp;

function preload(){
}
function setup(){
  createCanvas(200,200);
  song = loadSound('hey.mp3', loaded);
  amp = new p5.Amplitude();
  sliderPan = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);
}

function loaded() {
  button = createButton("pause");
  button.mousePressed(togglePlaying);
  song.play();
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


function draw(){
  background(51);

  fill(255, 0, 255);
  ellipse(width/2, height/2, 100, 100)
  song.setVolume(sliderPan.value());
  song.rate(sliderRate.value());
}
