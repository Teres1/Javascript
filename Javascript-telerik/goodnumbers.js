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
    '256 768'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input = gets().split(' ');
let a = +input[0];
let b = +input[1];
function isGoodNum(num) {
    let result = true;
    let n = num;
    let div;
    while (n > 0) {
        div = n % 10;
        n = (n / 10) | 0;
        if (div !== 0) {
            if ((num % div === 0) && (result === true)) {
                result = true;
            } else {
                result = false;
            }

        }
    }
    return result;
}
let count = 0;
for (let i = a; i <= b; i += 1) {
    if (isGoodNum(i) === true) {
        count += 1;
    }
}
print(count);