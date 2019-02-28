function solve(args){
let s=[];
let sumOfCoins=0;
let trays=[0.05,0.1,0.2,0.5,1];
for(let i=0;i<5;i+=1){
    s.push(+args[i]);
}
let a=+args[5];
let p=+args[6];
for(let i=0;i<s.length;i+=1){
    sumOfCoins+=s[i]*trays[i];
}
if((a>p)&&(a-p)<=sumOfCoins){
    console.log('Yes '+(sumOfCoins-a+p).toFixed(2));
}
else if(p>a){
    console.log('More '+(p-a).toFixed(2));
}
else if((a>p)&&(a-p)>sumOfCoins){
    console.log('No '+(a-p-sumOfCoins).toFixed(2));
}
}
solve(['4',
'5',
'4',
'2',
'1',
'10.00',
'2.00'
]);