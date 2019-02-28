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
    '4 10'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line1 = gets().split(' ').map(Number);
let gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
let res='';
res+=(+line1[0]/gcd(line1[0],line1[1]))+' '+(+line1[1]/gcd(line1[0],line1[1]));
print(res);