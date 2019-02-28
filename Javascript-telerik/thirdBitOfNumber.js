'use script';
function thirdBitOfNumber(arr){
let n=+arr[0];
let p=3;
let mask=1<<p;
let result=n&mask;
let bit=result>>p;
console.log(bit);
}
arr=['16'];
thirdBitOfNumber(arr);