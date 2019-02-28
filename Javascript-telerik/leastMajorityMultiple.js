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
    '30',
    '42',
    '70',
    '35',
    '90'
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
let a=[];
let result=0;
let counter=0;
for(let i=0;i<5;i+=1){
 a.push(+gets());
}
for(let i=4;i<97*98*99;i+=1){
     for(let j=0;j<a.length;j+=1){
         if(i%a[j]==0){
             counter+=1;
         }
     }
     if(counter>=3){
         result=i;
         break;
     }else{
         counter=0;
     }
}
print(result);