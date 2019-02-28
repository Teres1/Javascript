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
    '2,3,1',
    '5,2,3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input1=gets().split(',');
const input2=gets().split(',');
let a=[];
for(let i=0,j=0;i<input1.length,j<input2.length;i+=1,j+=1){
    a.push(input1[i]);
    a.push(input2[i]);

}
let result='';
for(let i=0;i<a.length-1;i+=1){
result+=a[i]+',';
}
result+=a[a.length-1];
print(result);