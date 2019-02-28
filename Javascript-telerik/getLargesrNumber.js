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
    '7 19 19'
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input=gets().split(' ');
let a=+input[0];
let b=+input[1];
let c=+input[2];
let maxNumber=getMax(a,getMax(b,c));
function getMax(a,b){
    let result=Math.max(a,b);
    return result;
}
print(maxNumber);