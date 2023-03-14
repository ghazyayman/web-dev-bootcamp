function fibonacciGenerator(n) {
    var output = [];
  
    if (n === 1) {
      output = [0];
    } 
    else if (n === 2) {
      output = [0, 1];
    } 
    else if (n > 2) {
      output = [0, 1];
      for (var i = 2; i < n; i++) {
        output.push(output[i - 2] + output[i - 1]);
      }
    }
  
    return output;
  }

  console.log(fibonacciGenerator(1)); // [0]
  console.log(fibonacciGenerator(2)); // [0, 1]
  console.log(fibonacciGenerator(5)); // [0, 1, 1, 2, 3]
  console.log(fibonacciGenerator(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  