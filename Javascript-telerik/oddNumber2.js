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
const n = +gets();
let arr=[];
let result="";
let myMap=new Map();
for(let i=0;i<n;i+=1){
    arr.push(gets());
}
const aCount = new Map([...new Set(arr)].map(
    x => [x, arr.filter(y => y === x).length]
));
for(let i=0;i<arr.length;i+=1){
if(+(aCount.get(arr[i]))%2!==0){
    result+=arr[i]; 
    break;
}
}
print(result);
