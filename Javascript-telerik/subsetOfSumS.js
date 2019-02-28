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
    '216',
    '12 20 21 14 2 31 5 27 28 11 24 26 11 4 14 27 14'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const s = +gets();
const input=gets();
let inp=input.split(" ");
let a=[];
for(let i =0;i<inp.length;i+=1){
  a.push(+inp[i]);
}
function sortArr(x,y) {
    return y - x;
}
a.sort(sortArr);
let sum = 0;
let result = 'no';
for (let i = 0; i < a.length; i += 1) {
    for (let j = i; j < a.length; j += 1) {
        if (s >=sum + a[j]) {
            sum += a[j];
            if (sum === s) {
                result = 'yes';
                break;
            }
        }
    }
    sum=0;
}
    
    print(result);
    quit(0);