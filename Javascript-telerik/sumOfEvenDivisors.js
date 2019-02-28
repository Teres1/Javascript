function solve(args){
    let m=+args[0];
    let n=+args[1];
    let sum=0;
    for(let i=m;i<=n;i+=1){
        if(i%2===0){
            for(let j=2;j<=i;j+=2){
                if(i%j===0){
                    sum+=j;
                }
            }
        }
    }
    console.log(sum);
}
solve(['900',
    '1000']);