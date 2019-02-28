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
'4 3' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input=gets().split(" ");
let n=+input[0];
let k=+input[1];
let arr=[];
for(let i=0;i<n;i+=1){
    arr.push(i+1);
}
let result="";
function comb(arr,tempArr, start,end,index, k) {
if (index == k)
{
for (let j=0; j<k; j+=1)
result+=tempArr[j]+" ";
print(result);
result="";
return;
}
for (let i=start; i<=end && end-i+1 >= k-index; i+=1)
{
tempArr[index] = arr[i];
comb(arr, tempArr, i+1, end, index+1, k);
}
}
function printComb(arr, n, k) {
    let tempArr=new Array(k);
    comb(arr, tempArr, 0, n-1, 0, k);
}
printComb(arr,n,k);