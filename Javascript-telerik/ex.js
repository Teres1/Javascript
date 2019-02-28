'use strict';
function solve(args){
    let n=+args[0];
    let result=+args[1];
    result%=Math.pow(2,10);
    for(let i=2;i<n+1;i+=1){
        if(+args[i]%2===1){
            result*=(+args[i]);
            result%=(Math.pow(2,10));
        }
        else{
            result+=(+args[i]);
            i+=1;
            result%=(Math.pow(2,10));
        }
    }
    console.log(result);

}
solve([
            '10',
            '2',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '0'
          ]);