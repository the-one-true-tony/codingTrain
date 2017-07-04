var txt;
var counts = {};
var keys = [];

function preload(){
  txt = loadStrings('rainbow.txt');
}

function setup(){
  var allWords = txt.join("\n");
  var tokens = allWords.split(/\W+/);
  // console.log(tokens);
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if(!/\d+/.test(word)){
      if(counts[word] === undefined){
        counts[word] = 1;
        keys.push(word);
      } else {
        counts[word] += 1;
      }
    }
  }

  keys.sort(compare);

  function compare(a,b){
    var countA = counts[a];
    var countB = counts[b];
    return countB - countA;
  }
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    createDiv(key + " " + counts[key]);
  }


  noCanvas();
}
