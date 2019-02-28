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
    'abbb'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input=gets();
let vowelCount=0;
for(let i=0;i<input.length;i+=1){
    if(input[i]==='a'||input[i]==='e'||input[i]==='i'||input[i]==='o'||input[i]==='y'
    ||input[i]==='u'){
        vowelCount+=1;
    }

}
if(vowelCount===2){
    print('Yes');
}else{
    print(vowelCount+' ',4-vowelCount);
}