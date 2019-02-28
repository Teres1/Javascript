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
    '185'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = +gets();
let a=n%10;
let b=(n/10|0)%10;
let c=(n/100)|0;
let result=Math.max(a*b*c,Math.max(a*b+c,Math.max(a+b+c,a+b*c)));
print(result);