function solve(args){
    let a=+args[0];
    let b=+args[1];
    let c=+args[2];
    let max=Math.max(a,Math.max(b,c));
    console.log(max);
    let min=Math.min(a,Math.min(b,c));
    console.log(min);
    let mean=(a+b+c)/3;
    console.log(mean.toFixed(2));
}
solve(['123',
'234',
'345']);