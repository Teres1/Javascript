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
    '22 23'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
let input=gets().split(" ");
let m=input[0];
let n=input[1];
let sum=0;
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if((i+j)%2===0){
            if(i===0||i===m-1||j===0||j===n-1){
               sum+=Math.pow(2,i+j);
            }else{
               sum+=2*Math.pow(2,i+j);
            }
        }
    }

}
print(sum);

