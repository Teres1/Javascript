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
    '7',
    '3',
    '4'

];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
const m=+gets();
const r=+gets();
const c=+gets();
let matrix = Array(n).fill().map(() => Array(m).fill(0));
const deltaR = [-2, -2, -1, +1, +2, +2, +1, -1];
const deltaC = [-1, +1, +2, +2, +1, -1, -2, -2];
matrix[r][c]=1;
let count=2;
let row=r;
let col=c;
for (let i = 0; i < n * m; i+=1) {
    if ((row - 2 >= 0) && (row - 2 < n) && (col - 1 >= 0) && (col - 1 < m) && (matrix[row - 2][col - 1] == 0)) {
        row -= 2;
        col -= 1;
        matrix[row][col] = count;
        row=r;
        col=c;
    } if ((row - 2 >= 0) && (row - 2 < n) && (col + 1 >= 0) && (col + 1 < m) && (matrix[row - 2][col + 1] == 0)) {
        row -= 2;
        col += 1;
        matrix[row][col] = count;
        row=r;
        col=c;
    } if ((row - 1 >= 0) && (row - 1 < n) && (col - 2 >= 0) && (col - 2 < m) && (matrix[row - 1][col - 2] == 0)) {
        row -= 1;
        col -= 2;
        matrix[row][col] = count;
        row=r;
        col=c;
    } if ((row - 1 >= 0) && (row - 1 < n) && (col + 2 >= 0) && (col + 2 < m) && (matrix[row - 1][col + 2] == 0)) {
        row -= 1;
        col += 2;
        matrix[row][col] = count;
        row=r;
        col=c;
    } else if ((row + 1 >= 0) && (row + 1 < n) && (col - 2 >= 0) && (col - 2 < m) && (matrix[row + 1][col - 2] == 0)) {
        row += 1;
        col -= 2;
        matrix[row][col] = count;
        row=r;
        col=c;
    } if ((row + 1 >= 0) && (row + 1 < n) && (col + 2 >= 0) && (col + 2 < m) && (matrix[row + 1][col + 2] == 0)) {
        row += 1;
        col += 2;
        matrix[row][col] = count;
        row=r;
        col=c;
    } if ((row + 2 >= 0) && (row + 2 < n) && (col - 1 >= 0) && (col - 1 < m) && (matrix[row + 2][col - 1] == 0)) {
        row += 2;
        col -= 1;
        matrix[row][col] = count;
        row=r;
        col=c;
    } if ((row + 2 >= 0) && (row + 2 < n) && (col + 1 >= 0) && (col + 1 < m) && (matrix[row + 2][col + 1] == 0)) {
        row += 2;
        col += 1;
        matrix[row][col] = count;
        row=r;
        col=c;
    }
}
count+=1;
for (let i = 0; i < n * m; i+=1) {
    row=r-2;
    col=c-1;
    if ((row - 2 >= 0) && (row - 2 < n) && (col - 1 >= 0) && (col - 1 < m) && (matrix[row - 2][col - 1] == 0)) {
        row -= 2;
        col -= 1;
        matrix[row][col] = count;
        row=r-2;
        col=c-1;
    } if ((row - 2 >= 0) && (row - 2 < n) && (col + 1 >= 0) && (col + 1 < m) && (matrix[row - 2][col + 1] == 0)) {
        row -= 2;
        col += 1;
        matrix[row][col] = count;
        row=r;
        col=c;
    } if ((row - 1 >= 0) && (row - 1 < n) && (col - 2 >= 0) && (col - 2 < m) && (matrix[row - 1][col - 2] == 0)) {
        row -= 1;
        col -= 2;
        matrix[row][col] = count;
        row=r-2;
        col=c-1;
    } if ((row - 1 >= 0) && (row - 1 < n) && (col + 2 >= 0) && (col + 2 < m) && (matrix[row - 1][col + 2] == 0)) {
        row -= 1;
        col += 2;
        matrix[row][col] = count;
        row=r;
        col=c;
    } else if ((row + 1 >= 0) && (row + 1 < n) && (col - 2 >= 0) && (col - 2 < m) && (matrix[row + 1][col - 2] == 0)) {
        row += 1;
        col -= 2;
        matrix[row][col] = count;
        row=r-2;
        col=c-1;
    } if ((row + 1 >= 0) && (row + 1 < n) && (col + 2 >= 0) && (col + 2 < m) && (matrix[row + 1][col + 2] == 0)) {
        row += 1;
        col += 2;
        matrix[row][col] = count;
        row=r;
        col=c;
    } if ((row + 2 >= 0) && (row + 2 < n) && (col - 1 >= 0) && (col - 1 < m) && (matrix[row + 2][col - 1] == 0)) {
        row += 2;
        col -= 1;
        matrix[row][col] = count;
        row=r-2;
        col=c-1;
    } if ((row + 2 >= 0) && (row + 2 < n) && (col + 1 >= 0) && (col + 1 < m) && (matrix[row + 2][col + 1] == 0)) {
        row += 2;
        col += 1;
        matrix[row][col] = count;
        row=r-2;
        col=c-1;
    }
}
let result="";
for(let i=0;i<n;i+=1){
    for(let j=0;j<m;j+=1){
        result+=matrix[i][j]+" ";
    }
    result+="\n";
}
print (result);