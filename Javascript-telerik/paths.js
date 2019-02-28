'use strict';
let params = [
    '3 5',
    'dr dl dr ur ul',
    'dr dr ul ur ur',
    'dl dr ur dl ur'
    ];
function solve(params) {

    let input = params[0].split(' ');
    let rows = parseInt(input[0]);
    let columns = parseInt(input[1]);
    let numbers = new Array(rows);
    let visited = new Array(rows);

    for (let i = 0; i < rows; i += 1) {
        numbers[i] = new Array(columns);
        visited[i] = new Array(columns);
        for (let j = 0; j < columns; j += 1) {
            numbers[i][0] = Math.pow(2, i);
            numbers[i][j] = numbers[i][0] + j;
            visited[i][j] = 0;
        }
    }
    let rowPosition = 0;
    let columnPosition = 0;
    visited[rowPosition][columnPosition] = 1;
    let numbersSum = 0;
    numbersSum += numbers[rowPosition][columnPosition];
    let directions = new Array(rows);
    for (let i = 0; i < rows; i += 1) {
        directions[i] = new Array(columns);
        for (let j = 0; j < columns; j += 1) {
            directions[i][j] = params[i + 1].split(" ")[j];
        }
    }
    while (true) {
        switch (directions[rowPosition][columnPosition]) {
            case "dr": rowPosition += 1;
                columnPosition += 1; break;
            case "dl": rowPosition += 1;
                columnPosition -= 1; break;
            case "ur": rowPosition -= 1;
                columnPosition += 1; break;
            case "ul": rowPosition -= 1;
                columnPosition -= 1; break;
        }
        if (rowPosition < 0 || rowPosition >= rows || columnPosition < 0 || columnPosition >= columns) {
            return 'successed with ' + numbersSum;
        }
        if (visited[rowPosition][columnPosition] === 1) {
            return 'failed at (' + rowPosition + ', ' + columnPosition + ')';
        }
        visited[rowPosition][columnPosition] = 1;
        numbersSum += numbers[rowPosition][columnPosition];
     }
}
console.log(solve(params));