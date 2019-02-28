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
'3',
 '2'	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
const x=+gets();
let sum=1;
function factorial(n){
    let fact=1;
    for (let i = 1; i <=n ; i++) {
        fact*=i;
    }
    return  fact;
    }
for(let i=1;i<=n;i++){
    sum+=factorial(i)/Math.pow(x,i);
}
print(sum.toFixed(5));
quit(0);
