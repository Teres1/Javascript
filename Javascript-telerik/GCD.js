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
    '25 15'

];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input = gets().split(' ');
let a = +input[0];
let b = +input[1];
let min = Math.min(a, b);
let result = 0;
for (let i = 0; i <= min; i += 1) {
    if ((a % i == 0) && (b % i == 0)) {
        result = i;
    }
}
print(result);