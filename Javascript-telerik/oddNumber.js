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
    '13',
    '-1',
    '7',
    '7',
    '-9223372036854775808',
    '7',
    '-9223372036854775808',
    '-3',
    '7',
    '0',
    '-1',
    '7',
    '0',
    '-3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
let arr=[];
for (let i = 0; i < n; i+=1){
const input = gets();
arr.push(input);
}
arr.sort();
let result="";
let counter=1;
if(n==1){
    result=arr[0];
}
else if(arr[arr.length-1]!==arr[arr.length-2]){
    result=arr[arr.length-1];
}
else{
for(let i=0;i<arr.length-1;i+=1){
    if(arr[i]===arr[i+1]){
        counter+=1;
    }else{
        
        if(counter%2!==0){
            result=arr[i];
        }
        else{
            counter=1;
        }
    }
}if(counter%2!==0){
    result=arr[arr.length-1];
}
}
print(result);
quit(0);
