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
    '4 4', 
    '....', 
    '....',
    '....',
    '....' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line=gets();
let input=line.split(" ");
const n=+input[0];
const m=+input[1];
let matrix=[];
for (let i = 0; i < n; i++) {
    let col=[];
    line1=gets();
    for (let j = 0; j < m; j++) {

        col[j]= (line1[j]);
    }
    matrix[i]=col;

}
let count0=0;
let count1=0;
let count2=0;
let count3=0;
let count4=0;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
        if(matrix[i][j] ==="."&& matrix[i][j + 1]==="."&&matrix[i+1][j] ==="."&&
                matrix[i + 1][j+1] ===".")
                count0+=1;
    }
}
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
        if(matrix[i][j] ==="."&& matrix[i][j + 1]==="."&&matrix[i+1][j] ==="."&&
                matrix[i + 1][j+1] ==="X"||
                matrix[i][j] ==="X"&& matrix[i][j + 1]==="."&&matrix[i+1][j] ==="."&&
                matrix[i + 1][j+1] ==="."||
                matrix[i][j] ==="."&& matrix[i][j + 1]==="X"&&matrix[i+1][j] ==="."&&
                matrix[i + 1][j+1] ==="."||
                matrix[i][j] ==="."&& matrix[i][j + 1]==="."&&matrix[i+1][j] ==="X"&&
                matrix[i + 1][j+1] ===".")
                count1+=1;
    }
}
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
        if(matrix[i][j] ==="."&& matrix[i][j + 1]==="."&&matrix[i+1][j] ==="X"&&
                matrix[i + 1][j+1] ==="X"||
                matrix[i][j] ==="X"&& matrix[i][j + 1]==="."&&matrix[i+1][j] ==="."&&
                matrix[i + 1][j+1] ==="X"||
                matrix[i][j] ==="."&& matrix[i][j + 1]==="X"&&matrix[i+1][j] ==="."&&
                matrix[i + 1][j+1] ==="X"||
                matrix[i][j] ==="X"&& matrix[i][j + 1]==="."&&matrix[i+1][j] ==="X"&&
                matrix[i + 1][j+1] ==="."||
                matrix[i][j] ==="X"&& matrix[i][j + 1]==="X"&&matrix[i+1][j] ==="."&&
                matrix[i + 1][j+1] ==="."||
                matrix[i][j] ==="."&& matrix[i][j + 1]==="X"&&matrix[i+1][j] ==="X"&&
                matrix[i + 1][j+1] ===".")
                count2+=1;
    }
}
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
        if(matrix[i][j] ==="X"&& matrix[i][j + 1]==="X"&&matrix[i+1][j] ==="X"&&
                matrix[i + 1][j+1] ==="."||
                matrix[i][j] ==="X"&& matrix[i][j + 1]==="X"&&matrix[i+1][j] ==="."&&
                matrix[i + 1][j+1] ==="X"||
                matrix[i][j] ==="."&& matrix[i][j + 1]==="X"&&matrix[i+1][j] ==="X"&&
                matrix[i + 1][j+1] ==="X"||
                matrix[i][j] ==="X"&& matrix[i][j + 1]==="."&&matrix[i+1][j] ==="X"&&
                matrix[i + 1][j+1] ==="X")
                count3+=1;
    }
}
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
        if(matrix[i][j] ==="X"&& matrix[i][j + 1]==="X"&&matrix[i+1][j] ==="X"&&
                matrix[i + 1][j+1] ==="X")
                count4+=1;
    }
}
print(count0);
print(count1);
print(count2);
print(count3);
print(count4);
