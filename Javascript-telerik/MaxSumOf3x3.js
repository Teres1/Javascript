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
'5 5',
    '1 1 3 3 5',
    '-6 -7 2 -3 -1',
    '3 0 -4 5 9',
    '7 -7 0 1 0',
    '-7 -6 -4 -4 9' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line=gets();
let input=line.split(" ");
const n=+input[0];
const m=+input[1];
let matrix=[];
let maxSum=Number.NEGATIVE_INFINITY;
for (let i = 0; i < n; i++) {
    let col=[];
    line1=gets();
     let inp=line1.split(" ");
    for (let j = 0; j < m; j++) {

        col[j]= +(inp[j]);
    }
    matrix[i]=col;

}
for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
        sum = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] +
                matrix[i + 1][j] + matrix[i + 1][j + 1] + matrix[i + 1][j + 2] +
                matrix[i + 2][j] + matrix[i + 2][j + 1] + matrix[i + 2][j + 2];

        if (sum > maxSum) {
            maxSum = sum;
        }
    }
}
print(maxSum);
quit(0);
