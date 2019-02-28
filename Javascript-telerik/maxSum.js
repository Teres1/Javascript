function solve(arr) {
    let maxSum = -Number.MAX_VALUE, 
    currentSum = -Number.MAX_VALUE;
    for (let i = 1; i < arr.length; i+=1) {
        currentSum +=+arr[i];
        if(currentSum>maxSum){
             maxSum=currentSum;
            
        }
        else if(currentSum<0){
                
                currentSum=0;
            

        }
    }

    return maxSum;
}
let arr = ['10',
    '2',
    '3',
    '-6',
    '-1',
    '2',
    '-1',
    '6',
    '4',
    '-8',
'8'];
console.log(solve(arr));