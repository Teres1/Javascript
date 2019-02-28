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
    '13',
    '-1',
    '7',
    '7',
    '-9223372036854775808',
    '7',
    '-9223372036854775808',
    '-3',
    '7',
    '0',
    '-1',
    '7',
    '0',
    '-3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const set = new Set();
const n = +gets();
result="";
for (let i=0; i<n; i+=1) {
    const value = gets();

    if (set.has(value)) {
        set.delete(value);
    } else {
        set.add(value);
    }
}
set.forEach(function(value) {
    result=value;
  });
  print(result);
  quit(0);
