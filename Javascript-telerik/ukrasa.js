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
    '8',
    '14 11 2 16 7 9 13 17 '	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = +(gets().replace(" ",""));
let sum = 0;
const line=gets().replace(/^\s\s*/, '').replace(/\s\s*$/, '');
const input = line.split(" ");
let arr=[];
for (let i = 0; i < input.length; i++) {
    arr.push(parseInt(input[i]));
    sum+=arr[i];
}
let min=sum;
let m;
let sum1 ;
let sum2 ;
for (let i = 0; i < Math.pow(2,n); i+=1) {
    sum1=0;
    for (let j = 0; j <= n; j+=1) 
        if (i & Math.pow(2, j)) 
            sum1 += arr[j];
            sum2 = sum - sum1;
            m = Math.abs(sum1 - sum2);
        
    
        if (m < min) {
            min = m;
        }
    }

    print(min);