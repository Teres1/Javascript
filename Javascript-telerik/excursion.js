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
    '2 3', 
    '3',
    '4 5',
    '3 6',
    '2 3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line1 = gets();
let input=line1.split(' ');
let w=+input[0];
let h=+input[1];
let a=[];
let b=[];
const n=+gets();
for(let i=0;i<n;i+=1){
    let line2=gets();
    let input2=line2.split(' ');
    a.push(+input2[0]);
    b.push(+input2[1]);
}
let count = 1;
let finalCount = 0;
for (let i = 0; i < a.length; i++) {
    if (w <= a[i]&& h <= b[i] ){
        count++;
    } else {
        finalCount = count;
        break;
    }
}
if (finalCount == 0) {
    print("No crash");

} else {
    print(finalCount);
}