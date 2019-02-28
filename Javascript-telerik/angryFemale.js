function solve(args){
    let n=+args[0];
    let sumOfEven=0;
    let sumOfOdd=0;
    let d=0;
    while (n>0){
        d=n%10;
        n=n/10|0;
        if(d%2===0){
            sumOfEven+=d;
        }
        else{
            sumOfOdd+=d;
        }
    }
    if(sumOfEven>sumOfOdd){
        console.log('right '+sumOfEven);
    }
    else if(sumOfEven<sumOfOdd){
        console.log('left '+sumOfOdd);
    }
    else{
        console.log('straight '+sumOfEven);
    }
}
solve(['112']);