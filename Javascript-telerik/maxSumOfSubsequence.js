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
    '10',
    '2',
    '3',
    '-6',
    '-1',
    '2',
    '-1',
    '6',
    '4',
    '-8',
    '8'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = +gets();
let a=[];
for(let i =0;i<n;i+=1){
    a.push(+gets());
}
let sum=0;
let maxSum=0;
for(let i=0;i<n;i+=1){
    sum+=a[i];
        if(maxSum<sum){
            maxSum=sum;
        }
    
    if(sum<0) {
        sum=0;
    }
}
print(maxSum);