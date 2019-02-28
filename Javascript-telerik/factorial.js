function factorial(n){
    let index=1,
    fact=1;
    while(index<=n){
        fact*=index;
        index+=1;
    }
    return fact;

}console.log(factorial(100));