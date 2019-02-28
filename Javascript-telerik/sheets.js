function solve(args){
    let n=+args[0];
    let i=10;
    while(i>=0){
        if(n<Math.pow(2,i)){
console.log('A'+(10-i));
        }
        else {
            n=n-Math.pow(2,i);
        }
        i-=1;
    }
}
solve(['1']);