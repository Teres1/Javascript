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
    '6 6 6 6 6 6 6'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line1 = gets().split(' ').map(Number);
let count2=0;
let count6=0;
let res='';
for(let i=0;i<line1.length;i+=1){
    if(line1[i]==2){
        count2+=1;
    }else if(line1[i]==6){
        count6+=1;
    }
}
if(count2>0||count6==0){
    print('No');
}else{
    for(let i=0;i<count6;i+=1){
        res+='*';
    }
    print(res);
}