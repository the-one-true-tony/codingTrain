class Perceptron {
  constructor(n, lr){
    this.weights = new Array(n);
    this.lr = lr;  // learning rate
    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1,1);
    }
  }

  train(inputs, desired){
    let guess = this.feedforward(inputs);
    let error = desired - guess;
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * this.lr;
    }
  }

  feedforward(inputs){
    let sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    // the activate function just returns 1 or -1
    return this.activate(sum);
  }

  activate(num){
    if (num > 0) return 1;
    else return -1;
  }

  getWeights(){
    return this.weights;
  }

}
