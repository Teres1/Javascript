'use strict';
function solve(params) {
    let n = +params[0];
    let answer = 0;
    let count=1;
    if(n===0){
        return 0;
    }
    for (let i = 2; i <= n; i += 1) {
        
        if (+params[i - 1] > +params[i]) {

            count += 1;

        }
    }
   answer=count;
   return answer;
}
let params = ['9', '1', '8', '8', '7', '6', '5', '7','7','6'];
console.log(solve(params));