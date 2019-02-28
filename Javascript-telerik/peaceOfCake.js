function solve(args){
    let a=+args[0];
    let b=+args[1];
    let c=+args[2];
    let d=+args[3];
    if(((a*b+c*d)/(b*d))>=1){
        console.log((a*d+b*c)/(b*d)|0);
        console.log((a*d+b*c)+'/'+b*d);
    }
    else{
        console.log(((a*d+b*c)/(b*d)).toFixed(20));
    }
}
solve(['1',
'4',
'1',
'8']);