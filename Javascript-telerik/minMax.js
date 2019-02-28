'use strict';
function solve(params) {
    let n = parseInt(params[0]);
    let k = parseInt(params[1]);

    let s = [];
    let line = "";
    let input = params[2].split(" ");
    for (let i = 0; i < n; i += 1) {
        s[i] = parseInt(input[i]);
    }

    let sum = 0;
    for (let i = 0; i <= n - k; i += 1) {
        let min = 1000000000;
        let max = -1000000000;

        let j = i;
        while (j < k + i) {
            if (s[j] > max) {
                max = s[j];
            }
            if (s[j] < min) {
                min = s[j];
            }

            sum = min + max;
            j += 1;
        }

        line += sum; 
        if(i!==n-k){
            line+=",";
        }
    }
    console.log(line);
}
let params = ['4',
    '2',
    '7 7 8 9 10'];
solve(params);
