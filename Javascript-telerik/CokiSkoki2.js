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
'6',
'1 4 2 6 3 4'
 	];

const gets = this.gets || getGets(test);
const print = this.print || console.log;



const n=+gets();
let line=gets();
let input=line.split(" ");
let num=[];
for(let i=0;i<n;i+=1){
    num[i]=+input[i];
}
let res =new Uint8Array(n);
let start;
for (let i = 0; i < n; i+=1) {
    start=+num[i];
    for (let j = i + 1; j < n; j+=1) {
        if (num[j] > start) {
            res[i]=+res[i]+1;
            start = +num[j];
        }
    }
}
let max=0;
for (let i = 0; i < n; i+=1) {
    if(res[i]>max){
        max=res[i];
    }
}
print(max);
let result="";
for (let i = 0; i < n; i+=1) {
    result+=res[i]+" ";
}
print(result);
