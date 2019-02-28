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
    '10 5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input = gets().split(' ');
let n=+input[0];
let quantity=+input[1];
let litres=1;
for (let i = 1; i < n; i += 1) {
    litres+=i;
    if (litres >= quantity) {
        if ((i + 1) % 2 === 0) {
            print(i + 2);
            break;
        } else {
            print(i + 1);
            break;
        }
    }
}