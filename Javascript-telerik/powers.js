'use strict';
function solve(params) {
    let input = params[0].split(" ");
    let n = parseInt(input[0]);
    let k = parseInt(input[1]);
    input = params[1].split(" ");
    let result = 0;
    let s=[];
    for(let j=0;j<n;j+=1){
    s[j] = parseInt(input[j]);
    }
    let a = [];
    a = s.slice();
    console.log(s);
    for (let j = 0; j < k; j += 1) {
        for (let i = 0; i < s.length; i += 1) {
            if (i === 0) {
                if (s[i] === 0) {
                    a[i] = Math.abs(s[1] - s[n - 1]);

                }
                else if (s[i] % 2 === 0 && s[i] != 0) {
                    a[i] = Math.max(s[1], s[n - 1]);
                }
                else if (s[i] === 1) {
                    a[i] = (s[1] + s[n - 1]);
                }
                else if (s[i] % 2 === 1 && s[i] != 1) {
                    a[i] = Math.min(s[1], s[n - 1]);
                }
            } else if (i === (n - 1)) {
                if (s[i] === 0) {
                    a[i] = (Math.abs(s[n - 2] - s[0]));
                }
                else if (s[i] % 2 === 0 && s[i] != 0) {
                    a[i] = Math.max(s[0], s[n - 2]);
                }
                else if (s[i] === 1) {
                    a[i] = (s[0] + s[n - 2]);
                }
                else if (s[i] % 2 === 1 && s[i] != 1) {
                    a[n - 1] = Math.min(s[n - 2], s[0]);
                }
            } else {


                if (s[i] === 0) {
                    a[i] = Math.abs(s[i + 1] - s[i - 1]);

                }
                else if (s[i] % 2 === 0 && s[i] != 0) {
                    a[i] = Math.max(s[i - 1], s[i + 1]);
                }
                else if (s[i] === 1) {
                    a[i] = (s[i - 1] + (s[i + 1]));

                }
                else if (s[i] % 2 === 1 && s[i] != 1) {
                    a[i] = Math.min(+s[i - 1], +s[i + 1]);
                }
            }
        }
    
            
            s = a.slice();
            console.log(s);
    }
        for (let i=0;i<n;i+=1){
            result+=s[i];
        }
        console.log(result);

    }
let params = ['10 3',
    '1 9 1 9 1 9 1 9 1 9'];
solve(params);