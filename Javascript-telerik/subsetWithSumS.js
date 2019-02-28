function subsetWithSumS(arr,s){
    let sumCounter=0,
    sumArr=[],
    a=[];
    
    for(let i=0;i<arr.length;i+=1){
        for(let j=0,len=sumArr.length;j<len;j+=1){
            sumArr.push(sumArr[j]+arr[i]);
        }
        sumArr.push(arr[i]);
        a.splice(i,0,arr[i]);
    }
    
    for(let i=0;i<sumArr.length;i+=1){
        if(s===sumArr[i])
            {
                
               console.log(a);
            }
    }

}
let arr=[2,1,2];
subsetWithSumS(arr,3);