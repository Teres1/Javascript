'use strict';
function solve(params){
    let s=+params[0],
    c1=+params[1],
    c2=+params[2],
    c3=+params[3];
    let answer=0;
    let maxSum=0;
    let min=Math.min(c1,Math.min(c2,c3));
    for(let i=0;i<s/min;i+=1){
        for (let j=0;j<s/min;j+=1){
            for (let k=0;k<s/min;k+=1){
                if((c1*i+c2*j+c3*k)<=s){
                    maxSum=+(c1*i+c2*j+c3*k);
                }
                if(answer<maxSum){
                    answer=maxSum;
                }
                
            }
            
        }
    }
    console.log(answer);
}
let params=['110',
    '13',
   '15',
    '17'];
    solve(params);