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
    'index.html needs main.css',
    'main.css needs sub1.css',
    'index.html needs main.js',
    'main.css needs sub2.css',
    'index.html needs logo.png',
    'main.js needs player.png',
    'main.js needs partial.html',
    'partial.html needs partial.js'
    	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
let arr=[];
for(let i=0;i<n;i+=1){
    let input=gets();
    let inputSpl=input.split(" ");
    arr.push(inputSpl[0]);
    arr.push(inputSpl[2]);
}
arr=arr.sort();
let arr2=[];
arr2.push(arr[0]);
for(let i=1;i<arr.length;i+=1){
    if(arr[i]!==arr[i-1]){
        arr2.push(arr[i]);
    }
}
let result="";
for(let i=0;i<arr2.length;i+=1){
    result+=arr2[i];
    if(i!==arr2.length-1){
        result+=" ";
    }
}
console.log(result);