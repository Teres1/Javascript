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
    'ADD -28716',
    'ADD 22150',
    'ADD 822',
    'ADD -32140',
    'ADD 6087',
    'FIND',
    'ADD -31230',
    'FIND',
    'EXIT'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
let list2 = [];
let counter = 0;
let result = "";
while (true) {
    let input = gets().split(" ");
    if (input[0]==="EXIT") {
        break;
    }
    if (input[0]==="ADD") {
        counter+=1;
        list2.push(input[1]);
    }
    if (input[0]==="FIND") {
        list2.sort(function(a, b) {
            return a-b;
          });
          
        if (counter % 2 != 0) {

            result = list2[(list2.length-1)/2];
            print(result);
        } else {
            result = ((+list2.slice((list2.length)/2-1,list2.length/2) +(+ list2.slice(list2.length/2,list2.length/2+1)))/2);
            print(result);
        }
    }
}