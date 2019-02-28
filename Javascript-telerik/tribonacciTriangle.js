function solve(args) {
    let a = [];
    let b = [];
    let a0 = +args[0];
    let a1 = +args[1];
    let a2 = +args[2];
    let a3;
    let result = '';
    let m = 1;
    let k = 1;
    let index = 0;
    let n = +args[args.length - 1];
    for (let i = 0; i < args.length - 1; i += 1) {
        a.push(+args[i]);
    }
  
    for (let i = 0; i <= n; i += 1) {
        m += i;
    }
    for (let i = 3; i < m; i += 1) {
        a3 = a0 + a1 + a2;
        a0 = a1;
        a1 = a2;
        a2 = a3;
        b.push(a3);
    }
    console.log(b);
    let c = a.concat(b);
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < k; j += 1) {
            result += c[index] + ' ';
            index += 1;
        }

        result += '\n';
        k += 1;
    }
    console.log(result);
}
solve(['1',
    '-1',
    '1',
    '4']);