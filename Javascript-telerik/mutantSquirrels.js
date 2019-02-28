function solve(args){
    let t=+args[0];
    let b=+args[1];
    let s=+args[2];
    let n=+args[3];
    let result=t*b*s*n;
    if(result%2){
        result/=7;
    }
    else{
        result*=376439;
    }
    console.log(result.toFixed(3));
}
solve(['703',
'7',
'21',
'3']);