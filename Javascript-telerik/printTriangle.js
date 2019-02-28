const n = 7;
let result = '';
for (let row = 0; row <= n; row += 1) {
    for (let col = 0; col <= row; col += 1) {
        result += col + ' ';

    }
    result += '\n';
}
console.log(result);