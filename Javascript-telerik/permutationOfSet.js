let permArr=[],
usedChars=[];

function permutationOfSet(arr){
    let i,ch;
    for(i=0;i<arr.length;i+=1){
        ch=arr.splice(i,1)[0];
        usedChars.push(ch);
        if(arr.length===0){
            permArr.push(usedChars.slice());
        
        }
        permutationOfSet(arr);
        arr.splice(i,0,ch);
        usedChars.pop();
    }
    return permArr;
}
let arr=[1,2,3];
console.log(permutationOfSet(arr));