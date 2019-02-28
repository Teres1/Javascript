'use strict';
function solve(args) {
    let input = args[0].split(' ');
    let r = +input[0];
    let c = +input[1];
    let maze = new Array(r);
    for (let i = 1; i < r + 1; i += 1) {
      input[i] =args[i].split(' ');

    }
    for (let i = 0; i < r; i += 1) {
        maze[i] = new Array(c);
        for (let j = 0; j < c; j += 1) {
            maze[i][j] = +input[i+1][j];
        }
    }
    let rowPosition = (r / 2) | 0;
    let columnPosition = (c / 2) | 0;
    function escape(){
        console.log('No rakiya,only JavaScript '+' '+rowPosition+' ' +columnPosition);
    }
    function getCaught(){
        console.log('No JavaScript, only rakiya '+' '+rowPosition+' ' +columnPosition);
    }
    while (true) {
        const value=maze[rowPosition][columnPosition];
        if (value&1){ 
            if(rowPosition===0){
                return escape();
            }
            if(maze[rowPosition-1][columnPosition]>=0){
            maze[rowPosition][columnPosition]=-1;
            rowPosition -= 1; 
            continue;
        }
    }
            if (value&2){ 
                if(columnPosition===c-1){
                    return escape();
                }
                if(maze[rowPosition][columnPosition+1]>=0){
                maze[rowPosition][columnPosition]=-1;
                columnPosition+= 1; 
                continue;
            }
        }
        if (value&4){ 
            if(rowPosition===r-1){
                return escape();
            }
            if(maze[rowPosition+1][columnPosition]>=0){
            maze[rowPosition][columnPosition]=-1;
            rowPosition+= 1; 
            continue;
        }
    }
    if (value&8){ 
        if(columnPosition===0){
            return escape();
        }
        if(maze[rowPosition][columnPosition-1]>=0){
        maze[rowPosition][columnPosition]=-1;
        columnPosition-= 1; 
        continue;
    }
}
return getCaught();
}
}



console.log(solve([
    '7 5',
    '9 3 11 9 3',
    '10 12 4 6 10',
    '12 3 13 1 6',
    '9 6 11 12 3',
    '10 9 6 13 6',
    '10 12 5 5 3',
    '12 5 5 5 6'
]));