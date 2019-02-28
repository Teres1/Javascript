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
    'o2hs123o6G0ol090le42H'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const input = gets();
let result='';
for(let i=input.length-1;i>=0;i-=1){
     if(((input.charCodeAt(i)>=65)&&(input.charCodeAt(i)<=90))||
        ((input.charCodeAt(i)>=97)&&(input.charCodeAt(i)<=122))){
            result+=input.charAt(i);
     }
}
print(result);