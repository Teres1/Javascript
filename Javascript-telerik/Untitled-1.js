function solve(args) {
    let n = args[0];
   
    if (+n >=0) {
        while (Math.abs(n) > 9) {
            let sum = 0;
            if (n > 0) {
                for (let i = 0; i < n.length; i += 1) {
                    if(n[i]!=='.'){
                    sum += +n[i];

                }
            }
                n = ' ' + sum;
            }
        }
    } else {
        while (Math.abs(n) > 9) {
            let sum = 0;
            for (let i = 1; i < n.length; i += 1) {
                if(n[i]!=='.'){
                sum += +n[i];
            }
        }
            n = ' ' + sum;
        }
    }
    console.log(+n);
}

solve(['-2.000981']);