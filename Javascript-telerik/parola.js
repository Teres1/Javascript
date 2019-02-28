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
    '996655 99'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input = gets().split(' ');
let num=input[0];
let k=input[1];
let reverseNum='';
for(let i=num.length-1;i>=0;i--){
    reverseNum+=num.charAt(i);
}
let rem=(+reverseNum)%k;
let quotient=(+reverseNum)/k|0;
print(rem+quotient);
