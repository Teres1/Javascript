'use strict';
function selectionSort(arr){
    let 
    i,j;
    for (i=0;i<arr.length;i+=1){
        for(j=i;j<arr.length;j+=1){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
let arr=[1,3,5,6,2,7,2];
console.log(selectionSort(arr));