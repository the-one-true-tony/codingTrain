var song, button, amp;
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
  createCanvas(200,200);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function draw(){
  background(0);
  var vol = amp.getLevel();
  volHistory.push(vol);
  stroke(255);
  noFill();
  translate(width/2, height/2)
  beginShape();
    for (var i = 0; i < 360; i++) {
      let r = map(volHistory[i], 0, 1, 50, 150);
      let x = r * cos(i);
      let y = r * sin(i);
      // let y = map(volHistory[i], 0, 1, height, 0);
      vertex(x, y);
    }
  endShape();

  if(volHistory.length > 360){
    volHistory.shift();
  }
  // stroke(255, 0, 0);
  // line(volHistory.length, 0, volHistory.length, height)
  // console.log(vol);
  // ellipse(100, 100, 200, vol*200);
}
