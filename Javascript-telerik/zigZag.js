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
'3 4' 	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line=gets();
let input=line.split(" ");
const n=+input[0];
const m=+input[1];
let sum = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if ((i + j) % 2 == 0) {
            if (i == 0 || i == n - 1 || j == 0 || j == m - 1) {
                sum += (1 + i * 3 + j * 3);
            } else {
                sum += 2 * (1 + i * 3 + j * 3);
            }

        }
    }

}
print(sum);
