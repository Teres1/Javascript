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
    '4',
'1 2 3 2 1',
'2 1',
'1 2 2 1',
'4'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
for (let i = 0; i < n; i += 1) {
    const arr = gets().split(' ').map(Number);
    if(isSymmetric(arr)){
        print('Yes');
    }else{
        print('No');
    }
}
function isSymmetric(arr){
    for(let i=0;i<arr.length;i+=1){
        if (arr[i]===(arr[arr.length - 1 - i])){
            return true;
        }else{
            return false;
        }
    }
}