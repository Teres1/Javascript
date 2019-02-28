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
    '1020340567.89'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input = gets();
let n = 0;
for (let i = 0; i < input.length; i++) {
    if(input.charAt(i)>='0'&&input.charAt(i)<='9'){
        n += +input.charAt(i);
    }
}
function crookedDigits(n){
    let sum=0;
    while(n>9){
        let div=n%10;
        while(n>0){
            sum+=div;
            n=(n/10)|0;
            div=n%10;
        }
        n=sum;
        sum=0;
    }
    return n;
}
print(crookedDigits(n));

