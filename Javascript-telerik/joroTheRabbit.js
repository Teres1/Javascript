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
    '1, -2, -3, 4, -5, 6, -7, -8'	
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const line=gets();
let arr=[];
let input=line.split(", ");
for(let i=0;i<input.length;i+=1){
    arr[i]=+input[i];
}
let bestRouteSize=0;
for (let i = 0; i < arr.length; i+=1) {
    for (let j = 1; j < arr.length; j+=1) {
        let startStep=i;
        let currentRoute=1;
        let nextStep=(startStep+j)%arr.length;
        while(arr[startStep]<arr[nextStep]){
            currentRoute+=1;
            startStep=nextStep;
            nextStep=(startStep+j)%arr.length;
        }
        if(bestRouteSize<currentRoute){
            bestRouteSize=currentRoute;
        }
    }
}
print(bestRouteSize);
quit(0);