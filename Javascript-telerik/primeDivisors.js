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
    '6 12'	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input=gets().split(' ');
let m=+(input[0]);
let n=+(input[1]);
let result="";
for (let i = 2; i < Math.min(m,n); i++) {
    if (m % i == 0 && n % i == 0 && isPrime(i)) {
    result+=i+" ";
    }
}if(result!=="") {
    print(result);
}else{
    print(-1);
}
function isPrime(num) {
for (let divider = 2; divider <=  Math.sqrt(num)|0; divider++) {
    if (num % divider == 0) {
        return false;
    }
}
return true;
}

