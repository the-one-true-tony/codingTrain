var song, button, fft;
var w;
var volHistory = [];

function preload(){
  song = loadSound('Illenium - Fractures Trivecta Remix.mp3')
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
  fft = new p5.FFT(0.8, 256);
  w = width /64;
}

function spreadSpectrum(n){
  let newSpec = new Array(n.length);
  let direction = true;
  for (var i = 0; i < n.length; i++) {
    if(direction){
      newSpec[i] = n[i];
    } else{
      newSpec[n.length-(1+i/2)] = n[i];
    }
    direction = !direction;
  }
  return newSpec;
}

function draw(){
  background(0);
  let spectrum = fft.analyze();
  spectrum = spreadSpectrum(spectrum);
  // console.log(spectrum);
  // noStroke();
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 60, 100);
    let x = r * cos(angle);
    let y = r * sin(angle);
    strokeWeight(3);
    stroke(100, 255, 255);
    // line(0, 0, x, y);
    vertex(x,y);
    // fill(i, 255, 255);
    // rect(i*w, y, w, height -y);
  }
  endShape(CLOSE);
}
