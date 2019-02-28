function maxIncreasingSequence(n,arr){
    let i,
    j=0,
    max=1,
    count=1;
    for(i=0;i<n;i+=1){
        while (arr[j+1]>arr[j]){
            count+=1;
            j+=1;
            

        }
        if(count>max){
            max=count;
        }

        
    }
    console.log(count);
}
n=5;
arr=[1,1.5,2,2,2,3];
maxIncreasingSequence(n,arr);