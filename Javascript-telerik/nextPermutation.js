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
    '15',
    '11 6 4 12 5 8 14 7 15 3 2 10 1 13 9'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = +gets();
let index1 = 0;
let index2 = 0;
let num=[];
let arr = [];
let result="";
const input=gets().split(" ");
for (let i = 0; i < n; i+=1) {
    num.push(+input[i]);
}
for (let i = 0; i < num.length - 1; i+=1) {
    if (num[i] < num[i+1]) {
        index1 = i;
    }
}
for (let i = 0; i < num.length - 1; i++) {
    if (num[index1] < num[i+1]) {
        index2 = i + 1;
    }
}
let temp = num[index1];
num[index1] = num[index2];
num[index2] = temp;
for (let i = 0; i <= index1; i++) {
    arr[i] = num[i];
}
for (let i = index1+1 ; i < num.length; i+=1) {
    arr[i] = num[input.length - i + index1];
}
for (let i = 0; i < arr.length; i++) {
    result+=arr[i]+" ";
}
print(result);
quit(0);
