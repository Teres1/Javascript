function solve(args) {
    let n = +args[0];
    let a = [];
    let result = '';
    let b = [];
    let max = 0;
    let maxIndex = 0;
    for (let i = 1; i <= n; i += 1) {
      let prime = true;
      for (let j = 2; j <= Math.sqrt(i); j += 1) {
        if ((i % j) === 0) {
          prime = false; break;
        }
      }
      if (prime) {
        a.push(1);
        maxIndex = i;
        if (max < maxIndex) {
          max = maxIndex;
        }
      } else {
        a.push(0);
      }
  
    }
    for (let i = 0; i < max + 1; i += 1) {
      let index = 0;
      if (a[i] === 0) {
        index += 1;
      } else if (a[i] === 1) {
        for (let j = 0; j <= i + index; j += 1) {
  
          result += a[j];
  
        }
        if (i !== max - 1) {
          result += '\n';
        }
      }
    }
    console.log(result);
  }
  solve(['101']);