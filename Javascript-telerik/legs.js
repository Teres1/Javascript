function solve(args){
    let n=+args[0];
    let count=0;
    for(let i=n/2|0;i>=0;i-=1){
        for(let j=(n-i*2)/5|0;j>=0;j-=1){
            for(let k=(n-i*2-j*5)/7|0;k>=0;k-=1){
                if((2*i+5*j+7*k)===n){
                    count+=1;
                }
            }
        }
    }

    console.log(count);
}
solve(['17']);