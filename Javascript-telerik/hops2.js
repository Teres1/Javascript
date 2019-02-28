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
    '2, -4, -6, 10, 2, 1, 5',
    '3 ',
    '3, 2, -1',
    '2, 2, -4 ',
    '2, -3',
 	];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


   const field = gets().split(', ').map(Number);
   let numberPatterns=+gets();
   let pattern=[];
   let max=Number.MIN_SAFE_INTEGER;
   for (let i = 0; i < numberPatterns; i+=1) {
       pattern=gets().split(', ').map(Number);
    let visited=[],
    carrots=0,
    index=0,
    patternIndex=0;
    while(!visited[index]&&index>=0&&index<field.length){
        carrots+=field[index];
        visited[index]=true;
        index+=pattern[patternIndex];
        patternIndex=(patternIndex+1)%pattern.length;
    }
    max=Math.max(carrots,max);
}
print(max);
quit(0);




   
