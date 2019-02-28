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
    '3 4 5 6'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line1 = gets().split(' ').map(Number);
if(line1[0]<line1[1]&&line1[1]<line1[2]&&line1[2]<line1[3]){
print('Ascending');
}else if(line1[0]>line1[1]&&line1[1]>line1[2]&&line1[2]>line1[3]){
    print('Descending');
}else{
    print('Mixed');
}
