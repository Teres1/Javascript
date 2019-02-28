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
    '94 106 4 5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input=gets().split(' ');
let a=+input[0];
let b=+input[1];
let p1=+input[2];
let p2=+input[3];
let str='';
for(let i=a;i<=b;i+=1){
    str+=i;
}
let count=0;
for(let i=0;i<str.length;i+=1){
    if(+str.charAt(i)%p1!=0&&+str.charAt(i)%p2!=0){
        count+=1;
    }
}
print(count);