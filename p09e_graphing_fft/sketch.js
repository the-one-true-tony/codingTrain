var song, button, fft;
var w;
var volHistory = [];

function preload(){
  song = loadSound('hey.mp3')
}

function toggleSong(){
  if (song.isPlaying()){
    song.pause();
  } else {
    song.play();
  }
}

function setup(){
  createCanvas(256,256);
  // colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 256);
  w = width /64;
}

function draw(){
  background(0);
  let spectrum = fft.analyze();
  // console.log(spectrum);
  noStroke();
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 40, 100);
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x,y);
    // fill(i, 255, 255);
    // rect(i*w, y, w, height -y);
  }
  endShape();
}
