function solve(args){
    let n=args[0];
    let count=0;
    let sum=0;
    for(let i=0;i<n.length;i+=2){
        count+=1;
        sum+=+n[i];
    }
    console.log(count+' '+sum);
}
solve(['987654']);