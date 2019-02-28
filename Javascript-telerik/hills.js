'use strict';
function solve(params) {
    let input = [];
    input = params.split(" ");
    console.log(input);
    let p = [],
        v = [];
    let count1 = 0;
    let count2 = 0;
    let result = 0;
    let s = [];
    for (let i = 0; i < input.length; i += 1) {
        s[i] = parseInt(input[i]);
    }
    console.log(s);
    for (let i = 1; i < s.length - 1; i += 1) {
        if ((s[i] > s[i - 1]) && (s[i] > s[i + 1])) {
            p.push(i);
        }
        else if ((s[i] < s[i - 1]) && (s[i] < s[i + 1])) {
            v.push(i);
        }
    }
    p.push(s.length - 1);
    p.unshift(0);
    console.log(v);
    console.log(p);
    for (let i = 0; i < p.length; i += 1) {
        count1 = v[i] - p[i];
        count2 = p[i + 1] - v[i];
        if (count2 + count1 > result) {
            result = count1 + count2;
        }
    }
    console.log(result);
}
let params = '5 1 7 4 8';
solve(params);
