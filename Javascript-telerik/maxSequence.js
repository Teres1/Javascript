function maxSequence(n,arr){
    let i,
    j=0,
    count=1,
    max=1;
    for(i=0;i<n;i+=1){
        while(arr[j]===arr[j+1]){
            count+=1;
            j+=1;
        }
        if(count>max){
            max=count;
        }

    }
    console.log(max);
}
n=5;
arr=[1,1,1,1,4,1];
maxSequence(n,arr);