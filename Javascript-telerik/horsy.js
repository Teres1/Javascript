'use strict';
function solve(params){
    let input=params[0].split(" ");
    let rows=parseInt(input[0]);
    let columns=parseInt(input[1]);
    let numbers=new Array(rows);
    let visited=new Array(rows);
    let count=0;
    for(let i=0;i<rows;i+=1){
        numbers[i]=new Array(columns);
        visited[i]=new Array(columns);
        
        for(let j=0;j<columns;j+=1){
            numbers[i][0]=Math.pow(2,i);
            numbers[i][j]=numbers[i][0]-j;
            visited[i][j]=0;
        
        }
       
    }
   
    let rowPosition=rows-1;
    let columnPosition=columns-1;
    visited[rowPosition][columnPosition]=1;
    let numbersSum=0;
    numbersSum+=numbers[rowPosition][columnPosition];
    let directions=new Array(params.length-1);
    for(let i=0;i<rows;i+=1){
        directions[i]=new Array(columns);
        for(let j=0;j<columns;j+=1){
            directions[i][j]=params[i+1].charAt(j);
            
        }
        
    }
    
    while(true){
        switch(directions[rowPosition][columnPosition]){
            case '1':rowPosition-=2;
            columnPosition+=1; break;
            case '2':rowPosition-=1;
            columnPosition+=2; break;
            case '3':rowPosition+=1;
            columnPosition+=2; break;
            case '4':rowPosition+=2;
            columnPosition+=1; break;
            case '5':rowPosition+=2;
            columnPosition-=1; break;
            case '6':rowPosition+=1;
            columnPosition-=2; break;
            case '7':rowPosition-=1;
            columnPosition-=2; break;
            case '8':rowPosition-=2;
            columnPosition-=1; break;
        }
        count+=1;
        if(rowPosition<0||rowPosition>=rows||columnPosition<0||columnPosition>=columns){
            return "Go go Horsy! Collected "+numbersSum+ " weeds";
        }
        if(visited[rowPosition][columnPosition]===1){
            return "Sadly the horse is doomed in " +count+ " jumps";
        }
        visited[rowPosition][columnPosition]=1;
        
        numbersSum+=numbers[rowPosition][columnPosition];
    }
}
let params =[
    '3 5',
    '54561',
    '43328',
    '52388',
    ];
    console.log(solve(params));