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
    '25'
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
let n=+gets();
let result=0;
for(let i=5;n/i>=1;i*=5){
    if(i%5==0){
        result+=(n/i)|0;
    }
}
print(result);
