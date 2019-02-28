'use strict';
function solve(params){
    let line=params[0].split(" "),
    n=+line[0],
    m=+line[1],
    numbers=new Array(n),
    visited=new Array(n),
    number=1,
    red='';

for(let i=0;i<n;i+=1){
    numbers[i]=new Array(m);
    visited[i]=new Array(m);
    for(let j=0;j<m;j+=1){
        numbers[i][j]=number;
        red+=numbers[i][j]+' ';
       
        visited[i][j]=0;
         number+=1;
        
    }
    red+='\n';  
}

console.log (red);
let J=+(line[2]);
line=params[1].split(" ");
let rowPosition=+line[0];
let columnPosition=+(line[1]);
visited[rowPosition][columnPosition]=1;
let numbersSum=0;
numbersSum+=numbers[rowPosition][columnPosition];
for(let jump=2;jump<J+2;jump+=1){
    line=params[jump].split(" ");
    let rowStep=+line[0];
    let columnStep=+line[1];
    rowPosition+=rowStep;
    columnPosition+=columnStep;
    if(rowPosition<0||rowPosition>=n||columnPosition<0||columnPosition>=m){
        return 'escaped '+ numbersSum;
    }
    if(visited[rowPosition][columnPosition]===1){
        return 'caught'+jump-1;
    }
    visited[rowPosition][columnPosition]=1;
    numbersSum+=numbers[rowPosition][columnPosition];
    if(jump===J+1){
        jump=1;
    }
}
}
let params=[
'6 7 3',
'0 0',
'2 2',
'-2 2',
'3 -1'
];
console.log(solve(params));