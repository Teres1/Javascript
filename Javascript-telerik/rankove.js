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
    '4',
    '1 7 3 9'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
const input = gets().split(' ').map(Number);
function sortArr(x,y) {
    return y - x;
}
let a=[];
for(let i=0;i<input.length;i+=1){
    a[i]=+input[i];
}
a.sort(sortArr);
let result='';
for(let i=0;i<input.length;i+=1){
    result+=(a.indexOf(input[i])+1)+' ';
}
print(result);
