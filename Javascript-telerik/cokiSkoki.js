'use strict';
function solve(args){
    let n=+args[0];
    let result=+args[1];
    if(result%2===1){
    result%=Math.pow(2,10);
    for(let i=2;i<n+1;i+=1){
        if((+args[i]%2)===0){
            result+=(+args[i]);
            
            result%=(Math.pow(2,10));
            i+=1;
            
        }
        else {
            result*=(+args[i]);
            result%=(Math.pow(2,10));
            
        }
    }
}
else{
    result%=Math.pow(2,10);
    for(let i=3;i<n+1;i+=1){
        if((+args[i]%2)===0){
            result+=(+args[i]);
            
            result%=(Math.pow(2,10));
            i+=1;
            
        }
        else {
            result*=(+args[i]);
            result%=(Math.pow(2,10));
            
        }
    }

}
    console.log(result);

}
solve([
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9'
  ]);