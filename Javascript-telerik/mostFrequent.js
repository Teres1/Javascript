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
    '13',
    '4',
    '1',
    '1',
    '4',
    '2',
    '3',
    '4',
    '4',
    '1',
    '2',
    '4',
    '9',
    '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = +gets();
let a=[];
for(let i =0;i<n;i+=1){
  a.push(+gets());
}
let count=0;
let number;
let maxCount=0;
for(let i=0;i<a.length;i+=1){
    for(let j=0;j<a.length;j+=1){
        if(a[i]===a[j]){
            count+=1;
        }
    }
    if(count>maxCount){
        maxCount=count;
        number=a[i];
    }
    
    count=0;
}
print(number+'('+maxCount+' times)');