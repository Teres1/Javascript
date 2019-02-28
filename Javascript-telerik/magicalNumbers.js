function solve(args){
let first=+args[0][0];
let second=+args[0][1];
let third=+args[0][2];
let result;
console.log(first,second,third);
if(second%2===0){
result=(first+second)*third;
} else{
    result=(first+second)/third;
}
console.log(result.toFixed(2));
}
solve(['120']);