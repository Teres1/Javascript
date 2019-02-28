'use strict';
function solve (args){
    let c=+args[0];
    let s=[];
    let start=[];
    let startElement=[];
    let end=[];
    let maxSum=0;
    let sum=0;
    let sum1=new Uint32Array(2);
    let maxCount=0;
    let startIndex=0;
    for (let i=0;i<c;i+=1){
        s.push(+args[i+1]);
    }
    for (let i=1;i<c;i+=1){
             if((s[i-1]>=s[i])&&(s[i]<s[i+1])){
                start.push (i);
                startElement.push(s[i]);
             }
            }
            for(let i=0;i<start.length-1;i+=1)
             for(let k=start[i];k<=start[i+1];k+=1){
                 if(s[k]<startElement[i]){
                     end.push(k); break;
                 }
                }
            
        for(let i=0;i<end.length;i+=1){
            for(let j=start[i];j<end[i];j+=1){
                sum1[i]+=s[j];
            }
        }
        for(let i=0;i<sum1.length;i+=1){
         if(sum1[i]>maxSum){
            maxSum=sum1[i];
    }
}
    console.log(s);
    console.log(sum1);
    console.log(start);
    console.log(end);
    console.log(startElement);
    console.log(maxSum);
}
    solve(['11',
    '1500',
    '4',
    '6',
    '5',
    '3',
    '3',
    '9',
    '100',
    '2',
    '3',
    '1']);
