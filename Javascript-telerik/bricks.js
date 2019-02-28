function solve(args){
    let b0=+args[0];
    let b1=+args[1];
    let b2=+args[2];
    let n=+args[3];
    let a=[];
    let b=[];
    let m=1;
    let k=1;
    let index=0;
    let result='';
    let b3;
    for(let i=0;i<args.length-1;i+=1){
        a.push(+args[i]);
    }
    for(let i=0;i<=n;i+=1){
        m+=i;
    }
    for(let i=3;i<m;i+=1){
        b3=b0+b1+b2;
        b0=b1;
        b1=b2;
        b2=b3;
        b.push(b3);
    }
    let c=a.concat(b);
    for(let i=0;i<n;i+=1){
        for(let j=0;j<k;j+=1){
            result+=c[index]+' ';
           
            index+=1;
        }
        result=result.substring(0,result.length-1);
        if(i!==n-1){
        result+='\n';
        }
        k+=1;
    }

    console.log(result);
}
solve(['1',
'-1',
'1',
'4']);