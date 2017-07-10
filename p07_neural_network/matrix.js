class Matrix {
  constructor(rows, cols){
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];

    for (var i = 0; i < this.rows; i++) {
      this.matrix[i] = [];
      for (var j = 0; j < this.cols; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  add(n){
    if (n instanceof Matrix){
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.matrix[i][j] += n.matrix[i][j];
        }
      }
    } else {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.matrix[i][j] += n;
        }
      }
    }
  }

  multiply(n){
    if (n instanceof Matrix){
      
    } else {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.matrix[i][j] *= n;
        }
      }
    }
  }

  randomize(){
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.matrix[i][j] = Math.floor(Math.random() * 10);
      }
    }
  }

}
