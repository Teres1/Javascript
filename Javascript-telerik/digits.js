const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
'6',
'9 9 9 2 2 2',
'9 9 9 2 2 2',
'9 9 9 2 2 2',
'9 9 9 2 2 2',
'9 9 9 2 2 2',
'9 9 9 2 2 2'	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
let matrix=[];
for (let i = 0; i < n; i++) {
    let col=[];
    line1=gets();
     let inp=line1.split(" ");
    for (let j = 0; j < n; j++) {

        col[j]= +(inp[j]);
    }
    matrix[i]=col;

}
let sum = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        switch (matrix[i][j]) {
            case 1:
                sum += checkIsOne(matrix, i, j);
                break;
            case 2:
                sum += checkIsTwo(matrix, i, j);
                break;
            case 3:
                sum += checkIsThree(matrix, i, j);
                break;
            case 4:
                sum += checkIsFour(matrix, i, j);
                break;
            case 5:
                sum += checkIsFive(matrix, i, j);
                break;
            case 6:
                sum += checkIsSix(matrix, i, j);
                break;
            case 7:
                sum += checkIsSeven(matrix, i, j);
                break;
            case 8:
                sum += checkIsEight(matrix, i, j);
                break;
            case 9:
                sum += checkIsNine(matrix, i, j);
                break;
        }
    }
}


function checkIsOne(matrix, row, col) {
let containOne = row >= 0 && row < matrix.length - 4
        && col >= 2 && col < matrix[0].length
        && matrix[row][col] == 1
        && matrix[row + 1][col - 1] == 1
        && matrix[row + 1][col] == 1
        && matrix[row + 2][col - 2] == 1
        && matrix[row + 2][col] == 1
        && matrix[row + 3][col] == 1
        && matrix[row + 4][col] == 1;
return containOne ? 1 : 0;
}

function checkIsTwo(matrix,row,col) {
let containTwo = row >= 0 && row < matrix.length - 4
        && col >= 1 && col < matrix[0].length - 1
        && matrix[row][col] == 2
        && matrix[row + 1][col - 1] == 2
        && matrix[row + 1][col + 1] == 2
        && matrix[row + 2][col + 1] == 2
        && matrix[row + 3][col] == 2
        && matrix[row + 4][col - 1] == 2
        && matrix[row + 4][col] == 2
        && matrix[row + 4][col + 1] == 2;
return containTwo ? 2 : 0;
}

function checkIsThree(matrix,row,col) {
let containThree = row >= 0 && row < matrix.length - 4
        && col >= 0 && col < matrix[0].length - 2
        && matrix[row][col] == 3
        && matrix[row][col + 1] == 3
        && matrix[row][col + 2] == 3
        && matrix[row + 1][col + 2] == 3
        && matrix[row + 2][col + 1] == 3
        && matrix[row + 2][col + 2] == 3
        && matrix[row + 3][col + 2] == 3
        && matrix[row + 4][col] == 3
        && matrix[row + 4][col + 1] == 3
        && matrix[row + 4][col + 2] == 3;
return (containThree) ? 3 : 0;
}

function checkIsFour( matrix, row, col) {
let containFour = row >= 0 && row < matrix.length - 4 &&
        col >= 0 && col < matrix[0].length - 2
        && matrix[row][col] == 4
        && matrix[row][col + 2] == 4
        && matrix[row + 1][col] == 4
        && matrix[row + 1][col + 2] == 4
        && matrix[row + 2][col] == 4
        && matrix[row + 2][col + 1] == 4
        && matrix[row + 2][col + 2] == 4
        && matrix[row + 3][col + 2] == 4
        && matrix[row + 4][col + 2] == 4;
return (containFour) ? 4 : 0;
}

function checkIsFive(matrix,row,col) {
let containFive = row >= 0 && row < matrix.length - 4 &&
        col >= 0 && col < matrix[0].length - 2
        && matrix[row][col] == 5
        && matrix[row][col + 1] == 5
        && matrix[row][col + 2] == 5
        && matrix[row + 1][col] == 5
        && matrix[row + 2][col] == 5
        && matrix[row + 2][col + 1] == 5
        && matrix[row + 2][col + 2] == 5
        && matrix[row + 3][col + 2] == 5
        && matrix[row + 4][col] == 5
        && matrix[row + 4][col + 1] == 5
        && matrix[row + 4][col + 2] == 5;
return (containFive) ? 5 : 0;
}

function checkIsSix(matrix, row, col) {
let containSix = row >= 0 && row < matrix.length - 4 &&
        col >= 0 && col < matrix[0].length - 2
        && matrix[row][col] == 6
        && matrix[row][col + 1] == 6
        && matrix[row][col + 2] == 6
        && matrix[row + 1][col] == 6
        && matrix[row + 2][col] == 6
        && matrix[row + 2][col + 1] == 6
        && matrix[row + 2][col + 2] == 6
        && matrix[row + 3][col] == 6
        && matrix[row + 3][col + 2] == 6
        && matrix[row + 4][col] == 6
        && matrix[row + 4][col + 1] == 6
        && matrix[row + 4][col + 2] == 6;
return (containSix) ? 6 : 0;
}

function checkIsSeven( matrix, row,  col) {
let containSeven = row >= 0 && row < matrix.length - 4 &&
        col >= 0 && col < matrix[0].length - 2
        && matrix[row][col] == 7
        && matrix[row][col + 1] == 7
        && matrix[row][col + 2] == 7
        && matrix[row + 1][col + 2] == 7
        && matrix[row + 2][col + 1] == 7
        && matrix[row + 3][col + 1] == 7
        && matrix[row + 4][col + 1] == 7;
return (containSeven) ? 7 : 0;
}

function checkIsEight( matrix,  row,  col) {
let containEight = row >= 0 && row < matrix.length - 4 &&
        col >= 0 && col < matrix[0].length - 2
        && matrix[row][col] == 8
        && matrix[row][col + 1] == 8
        && matrix[row][col + 2] == 8
        && matrix[row + 1][col] == 8
        && matrix[row + 1][col + 2] == 8
        && matrix[row + 2][col + 1] == 8
        && matrix[row + 3][col] == 8
        && matrix[row + 3][col + 2] == 8
        && matrix[row + 4][col] == 8
        && matrix[row + 4][col + 1] == 8
        && matrix[row + 4][col + 2] == 8;
return (containEight) ? 8 : 0;
}

function checkIsNine( matrix, row, col) {
let containNine = row >= 0 && row < matrix.length - 4 &&
        col >= 0 && col < matrix[0].length - 2
        && matrix[row][col] == 9
        && matrix[row][col + 1] == 9
        && matrix[row][col + 2] == 9
        && matrix[row + 1][col] == 9
        && matrix[row + 1][col + 2] == 9
        && matrix[row + 2][col + 1] == 9
        && matrix[row + 2][col + 2] == 9
        && matrix[row + 3][col + 2] == 9
        && matrix[row + 4][col] == 9
        && matrix[row + 4][col + 1] == 9
        && matrix[row + 4][col + 2] == 9;
return (containNine) ? 9 : 0;
}

print(sum);
quit(0);