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
    '1',
    '1',
    '2',
    '3',
    '3',
    '2',
    '2',
    '2',
    '1',
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = +gets();
let a=[];
for(let i =0;i<n;i+=1){
  a.push(+gets());
}
let count=1;
let maxCount=0;
let start=a[0];
for(let i=0;i<a.length-1;i+=1){
    if(a[i]===start){
        count+=1;
    if(count>maxCount){
        maxCount=count;
    }
    }else{
        start=a[i];
        count=1;
    }
}
print(maxCount);